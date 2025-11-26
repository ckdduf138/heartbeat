import { useEffect, useState } from 'react';

// Draws an image onto a canvas with a solid background and returns a data URL
export function useFlattenImage(src?: string, bgColor = '#ffffff', size = 120) {
  const [flattened, setFlattened] = useState<string | null>(null);

  useEffect(() => {
    if (!src) {
      setFlattened(null);
      return;
    }

    let mounted = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        // use provided size to keep consistent display
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // fill background
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // draw image centered and contained
        const ratio = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
        const iw = img.naturalWidth * ratio;
        const ih = img.naturalHeight * ratio;
        const ix = (canvas.width - iw) / 2;
        const iy = (canvas.height - ih) / 2;
        ctx.drawImage(img, ix, iy, iw, ih);

        const dataUrl = canvas.toDataURL('image/png');
        if (mounted) setFlattened(dataUrl);
      } catch (e) {
        // if anything fails, fall back to original src
        if (mounted) setFlattened(src);
      }
    };
    img.onerror = () => {
      if (mounted) setFlattened(src);
    };

    return () => {
      mounted = false;
    };
  }, [src, bgColor, size]);

  return flattened;
}
