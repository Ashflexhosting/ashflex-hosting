import { useEffect, useRef, useState } from "react";

/** Pixels per second the capture scrolls while hovered */
const HOVER_SCROLL_SPEED = 38;

const heightMap: Record<string, string> = {
  "h-56": "14rem",
  "h-60": "15rem",
  "h-64": "16rem",
  "h-90": "22.5rem",
  "h-96": "24rem",
};

function resolveHeight(height: string): string {
  if (height.startsWith("h-[")) return height.slice(3, -1); // e.g. h-[75vh] -> 75vh
  return heightMap[height] ?? height;
}

/**
 * A vertically scrollable screenshot viewer for full-page site captures.
 *
 * Visitors can scroll inside the frame (mouse wheel or touch drag) to view
 * the entire page screenshot instead of only a cropped viewport. A subtle
 * "Scroll to view" hint appears when the image is taller than the frame and
 * fades out once the visitor starts scrolling.
 */
interface ScrollableScreenshotProps {
  src: string;
  alt: string;
  height?: string;
  className?: string;
  rounded?: boolean;
  /**
   * Parent-controlled hover state (used by the Our Work peek, where the hover
   * region lives outside the frame). When true, auto-scroll runs; when it
   * flips from true to false the frame resets to the top.
   */
  active?: boolean;
  /**
   * Optional ref that is forwarded to the inner scrollable div so an external
   * controller (e.g. the device frame's navigation arrows) can drive it.
   */
  scrollerRef?: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollableScreenshot({
  src,
  alt,
  height = "h-64",
  className = "",
  rounded = true,
  active = false,
  scrollerRef: externalRef,
}: ScrollableScreenshotProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  // Merge internal ref with an optional forwarded ref so both can drive the scroller
  const mergeRef = (el: HTMLDivElement | null) => {
    (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    if (externalRef) {
      (externalRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    }
  };
  const scrollerRef = internalRef;
  const [scrolled, setScrolled] = useState(false);

  // Below-fold full-page captures use native lazy loading by default, but
  // that leaves them blank until the user scrolls near them. Preload each
  // capture eagerly once its frame comes within two viewports of the screen,
  // so mobile visitors never see empty navy frames while scrolling the grid.
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && "loading" in img) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Promote the image to eager loading without touching src,
              // so the frame never collapses from an IMG reload cycle.
              img.loading = "eager";
              observer?.disconnect();
            }
          });
        },
        { rootMargin: "0px 0px 1500px 0px" }
      );
      observer.observe(img);
    }
    return () => observer?.disconnect();
  }, [src]);

  const resolvedHeight = resolveHeight(height);
  // Responsive form: "md:h-[desktop] h-[mobile]" — drive with a matchMedia listener
  const [mobileHeight, desktopHeight] = (() => {
    const m = height?.match(/^md:(h-\[[^\]]+\])\s+(h-\[[^\]]+\])$/);
    if (!m) return [null, null] as [string | null, string | null];
    return [resolveHeight(m[2]), resolveHeight(m[1])];
  })();
  // Persist the resolved height so it is re-applied whenever the container
  // element is re-mounted or re-rendered, guarding against height collapse.
  const resolvedHeightRef = useRef("auto");
  const applyHeight = (el: HTMLDivElement | null) => {
    if (!el) return;
    el.style.height = resolvedHeightRef.current;
  };
  const responsiveContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!mobileHeight || !desktopHeight) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      resolvedHeightRef.current = mq.matches ? desktopHeight : mobileHeight;
      applyHeight(responsiveContainerRef.current);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [mobileHeight, desktopHeight]);
  useEffect(() => {
    if (mobileHeight || desktopHeight) return;
    resolvedHeightRef.current = resolvedHeight;
    applyHeight(responsiveContainerRef.current);
  }, [mobileHeight, desktopHeight, resolvedHeight]);

  // Auto-scroll the capture vertically while the frame is hovered, so
  // visitors can preview the full page screenshot without manual scrolling.
  const rafRef = useRef<number | null>(null);
  const pauseUntilRef = useRef<number>(0);
  const startScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (rafRef.current !== null) return;
    let last = performance.now();
    const tick = (now: number) => {
      rafRef.current = null;
      if (now < pauseUntilRef.current) return;
      const dt = Math.min(now - last, 50) / 1000;
      last = now;
      const maxScroll = el.scrollHeight - el.clientHeight;
      el.scrollTop = Math.min(el.scrollTop + HOVER_SCROLL_SPEED * dt, maxScroll);
      // Single smooth top-to-bottom pass: hold at the bottom instead of looping
      if (el.scrollTop < maxScroll) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };
  const stopScroll = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    // Briefly pause auto-scroll after the visitor manually scrolls or touches,
    // so the browser's own scrolling feels natural, then resume while hovered
    pauseUntilRef.current = performance.now() + 1200;
    window.setTimeout(() => {
      if (hoveredRef.current) startScroll();
    }, 1200);
  };
  const hoveredRef = useRef(false);
  const handleEnter = () => {
    hoveredRef.current = true;
    startScroll();
  };
  const handleLeave = () => {
    hoveredRef.current = false;
    stopScroll();
    const el = scrollerRef.current;
    if (el) el.scrollTop = 0; // reset to the top once the card is no longer hovered
  };

  // Parent-controlled hover (Our Work peek): keep the auto-scroll in sync
  // with the parent's hover region so the frame never disappears mid-scroll.
  const prevActive = useRef<boolean | undefined>(undefined);
  if (prevActive.current === undefined) {
    prevActive.current = active;
  } else if (prevActive.current !== active) {
    prevActive.current = active;
    if (active) {
      hoveredRef.current = true;
      startScroll();
    } else {
      hoveredRef.current = false;
      stopScroll();
      const el = scrollerRef.current;
      if (el) el.scrollTop = 0;
    }
  }

  return (
    <div
      className={`relative w-full overflow-hidden bg-brand ${rounded ? "rounded-[0.9rem]" : ""} ${className}`}
      ref={(el) => {
        responsiveContainerRef.current = el;
        // Always apply the resolved height when the element mounts or is
        // re-rendered — the absolute scroller inside has no height of its
        // own, so a missing container height collapses the whole frame.
        applyHeight(el);
      }}
    >
      {/* Hovering anywhere over the frame auto-scrolls the capture */}
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative h-full"
      >
        {/* Scrollable tall image — visitors scroll to view the full capture */}
        <div
          ref={mergeRef}
          onScroll={() => {
            const el = scrollerRef.current;
            if (el && el.scrollTop > 2 && !scrolled) setScrolled(true);
          }}
          onWheel={stopScroll}
          onTouchStart={stopScroll}
        data-screenshot-scroller
        className="absolute inset-x-0 top-0 bottom-0 w-full overflow-y-auto overscroll-none touch-pan-y"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(37, 99, 235, 0.45) transparent",
        }}
      >
        <style>{`
          [data-screenshot-scroller]::-webkit-scrollbar { width: 6px; }
          [data-screenshot-scroller]::-webkit-scrollbar-track { background: transparent; }
          [data-screenshot-scroller]::-webkit-scrollbar-thumb { background: rgba(37, 99, 235, 0.45); border-radius: 999px; }
          [data-screenshot-scroller]:hover::-webkit-scrollbar-thumb { background: rgba(37, 99, 235, 0.75); }
        `}</style>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          draggable={false}
          className="block w-full"
          loading="lazy"
        />
        </div>
      </div>
      {/* Scroll hint — only shows while content extends beyond the frame */}
      {!scrolled && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center pb-2">
          <span className="flex items-center gap-1.5 rounded-full bg-brand/80 px-2.5 py-1 text-[10px] font-medium text-white/90 shadow-sm">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="animate-bounce"
              aria-hidden="true"
            >
              <path d="M5 8V2M5 8 2 5M5 8l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Scroll to view
          </span>
        </div>
      )}
    </div>
  );
}
