import { useEffect, useState } from 'react';

type UsePreloadOptions = {
  // If true, treat load errors as failures (reject); otherwise resolve on error.
  strict?: boolean;
  // If provided, called after each image finishes (loaded or errored)
  onProgress?: (loadedCount: number, total: number) => void;
};

export const usePreloadImages = (urls: string[], options: UsePreloadOptions = {}) => {
  const { strict = false, onProgress } = options;
  const [loadedCount, setLoadedCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setDone(true);
      setLoadedCount(0);
      return;
    }

    let cancelled = false;
    setLoadedCount(0);
    setDone(false);

    const loadImage = (url: string) =>
      new Promise<void>((resolve, reject) => {
        try {
          const img = new Image();
          const onFinish = () => {
            img.onload = null;
            img.onerror = null;
            resolve();
          };
          img.onload = onFinish;
          img.onerror = () => {
            img.onload = null;
            img.onerror = null;
            if (strict) reject(new Error('Image failed: ' + url));
            else resolve();
          };
          img.src = url;
        } catch (err) {
          if (strict) reject(err as Error);
          else resolve();
        }
      });

    Promise.all(
      urls.map(u =>
        loadImage(u)
          .then(() => {
            if (cancelled) return;
            setLoadedCount(c => {
              const next = c + 1;
              onProgress?.(next, urls.length);
              return next;
            });
          })
          .catch(() => {
            // if strict, the promise chain will reject and be caught below
            if (cancelled) return;
            setLoadedCount(c => {
              const next = c + 1;
              onProgress?.(next, urls.length);
              return next;
            });
          })
      )
    )
      .then(() => {
        if (!cancelled) setDone(true);
      })
      .catch(() => {
        if (!cancelled) setDone(true);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urls.join('|'), strict]);

  return {
    loadedCount,
    total: urls.length,
    progress: urls.length ? loadedCount / urls.length : 1,
    loaded: done,
  } as const;
};

export default usePreloadImages;
