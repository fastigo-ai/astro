import { useState, useCallback, useEffect } from "react";

export function useAutoSlider({ count, interval = 5000 }: { count: number; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, interval, isPaused]);

  return { index, setIndex, next, prev, pause, resume };
}
