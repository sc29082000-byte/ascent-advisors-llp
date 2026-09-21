/**
 * Frame Loader and Canvas Engine for Ascent Advisors LLP
 * Manages 300 cinematic frames with prioritized preloading,
 * nearest-frame fallback, and smooth RAF interpolation.
 */

export const TOTAL_FRAMES = 300;

export function getFrameUrl(index: number): string {
  const frameNumber = String(Math.min(TOTAL_FRAMES, Math.max(1, index + 1))).padStart(3, '0');
  const base = (import.meta.env.BASE_URL || './').replace(/\/$/, '');
  return `${base}/frames/ezgif-frame-${frameNumber}.jpg`;
}

export class FrameSequenceManager {
  private images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
  private loadedMap: boolean[] = new Array(TOTAL_FRAMES).fill(false);
  private loadedCount = 0;
  private onProgressCallback?: (progress: number) => void;
  private onFirstFrameReadyCallback?: () => void;
  private isDestroyed = false;

  constructor(
    onProgress?: (progress: number) => void,
    onFirstFrameReady?: () => void
  ) {
    this.onProgressCallback = onProgress;
    this.onFirstFrameReadyCallback = onFirstFrameReady;
  }

  public startLoading(): void {
    // 1. Immediately load frame 0 (First paint critical)
    this.loadImage(0, true).then(() => {
      if (this.onFirstFrameReadyCallback && !this.isDestroyed) {
        this.onFirstFrameReadyCallback();
      }
      // 2. Load keyframes across the timeline (every 10th frame)
      const keyframes: number[] = [];
      for (let i = 9; i < TOTAL_FRAMES; i += 10) {
        keyframes.push(i);
      }
      Promise.all(keyframes.map(k => this.loadImage(k))).then(() => {
        // 3. Load remaining frames sequentially in chunks
        this.loadRemainingFrames();
      });
    });
  }

  private loadImage(index: number, priority = false): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      if (this.images[index] && this.loadedMap[index]) {
        resolve(this.images[index]!);
        return;
      }

      const img = new Image();
      if (priority) {
        img.fetchPriority = 'high';
      }
      img.src = getFrameUrl(index);

      img.onload = () => {
        if (this.isDestroyed) return;
        this.images[index] = img;
        this.loadedMap[index] = true;
        this.loadedCount++;
        if (this.onProgressCallback) {
          this.onProgressCallback(this.loadedCount / TOTAL_FRAMES);
        }
        resolve(img);
      };

      img.onerror = () => {
        // Retry once after 500ms
        setTimeout(() => {
          if (this.isDestroyed) return;
          const retryImg = new Image();
          retryImg.src = getFrameUrl(index);
          retryImg.onload = () => {
            this.images[index] = retryImg;
            this.loadedMap[index] = true;
            this.loadedCount++;
            if (this.onProgressCallback) {
              this.onProgressCallback(this.loadedCount / TOTAL_FRAMES);
            }
            resolve(retryImg);
          };
          retryImg.onerror = () => {
            resolve(img);
          };
        }, 500);
      };
    });
  }

  private async loadRemainingFrames(): Promise<void> {
    // Batch load remaining in chunks of 8
    const pendingIndices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (!this.loadedMap[i]) {
        pendingIndices.push(i);
      }
    }

    const CHUNK_SIZE = 8;
    for (let i = 0; i < pendingIndices.length; i += CHUNK_SIZE) {
      if (this.isDestroyed) break;
      const batch = pendingIndices.slice(i, i + CHUNK_SIZE);
      await Promise.all(batch.map(idx => this.loadImage(idx)));
      // Tiny delay to keep UI thread silky smooth
      await new Promise(r => setTimeout(r, 10));
    }
  }

  /**
   * Returns the best available frame for the requested index.
   * If exact frame is not loaded yet, finds the nearest loaded neighbor.
   */
  public getFrame(index: number): HTMLImageElement | null {
    const targetIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(index)));
    if (this.loadedMap[targetIdx] && this.images[targetIdx]) {
      return this.images[targetIdx];
    }

    // Search outward for nearest loaded frame
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const lower = targetIdx - offset;
      if (lower >= 0 && this.loadedMap[lower] && this.images[lower]) {
        return this.images[lower];
      }
      const upper = targetIdx + offset;
      if (upper < TOTAL_FRAMES && this.loadedMap[upper] && this.images[upper]) {
        return this.images[upper];
      }
    }

    return this.images[0] || null;
  }

  public getLoadedCount(): number {
    return this.loadedCount;
  }

  public destroy(): void {
    this.isDestroyed = true;
    this.images = [];
  }
}

/**
 * Draws image into canvas using "cover" aspect-ratio scaling
 */
export function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
): void {
  const imgRatio = img.width / img.height;
  const canvasRatio = canvasWidth / canvasHeight;

  let renderWidth: number;
  let renderHeight: number;
  let offsetX: number;
  let offsetY: number;

  if (canvasRatio > imgRatio) {
    renderWidth = canvasWidth;
    renderHeight = canvasWidth / imgRatio;
    offsetX = 0;
    offsetY = (canvasHeight - renderHeight) / 2;
  } else {
    renderWidth = canvasHeight * imgRatio;
    renderHeight = canvasHeight;
    offsetX = (canvasWidth - renderWidth) / 2;
    offsetY = 0;
  }

  ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
}
