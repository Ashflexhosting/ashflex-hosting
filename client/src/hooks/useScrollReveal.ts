import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    const revealSelectors =
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .bento-reveal, .flow-line, .flow-curve";
    const isReveal = (node: Element) =>
      node.matches(revealSelectors);
    const observeAll = (root: Element) => {
      root.querySelectorAll(revealSelectors).forEach((child) => observer.observe(child));
    };

    observeAll(el);
    if (isReveal(el)) observer.observe(el);

    // Also catch elements added later (e.g. a "View more" expand) inside the subtree
    const mutator = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (isReveal(m.target as Element)) {
          observer.observe(m.target as Element);
        }
        m.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (isReveal(node)) observer.observe(node);
            node.querySelectorAll?.(revealSelectors).forEach((child) => observer.observe(child));
          }
        });
      }
    });
    mutator.observe(el, { childList: true, subtree: true });

    return () => {
      mutator.disconnect();
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}
