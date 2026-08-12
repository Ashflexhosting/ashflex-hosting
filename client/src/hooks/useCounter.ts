import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered count-up hook.
 *
 * @param end Target value to count up to
 * @param duration Animation duration in ms (default 2000)
 * @param start Value to start from (default 0)
 * @param delay Optional ms to wait after the element enters the viewport before animating
 */
export function useCounter(end: number, duration = 2000, start = 0, delay = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animate = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Respect users who prefer reduced motion — show the final value directly.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCount(end);
      return;
    }

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a snappy, decelerating feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress >= 1) clearInterval(timer);
    }, 16);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(animate, delay);
            } else {
              animate();
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    // Fallback: ensure the count always reaches its end value even if the
    // observer never fires (e.g. element already visible or observer unavailable).
    const fallback = setTimeout(() => {
      if (!hasAnimated.current) {
        setCount(end);
        hasAnimated.current = true;
      }
    }, duration + delay + 300);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [end, duration, start, delay]);

  return { count, ref };
}
