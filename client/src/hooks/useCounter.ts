import { useEffect, useRef, useState } from "react";

export function useCounter(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animate = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
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
            animate();
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
    }, duration + 300);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [end, duration, start]);

  return { count, ref };
}
