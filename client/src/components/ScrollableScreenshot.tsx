import { useRef, useState } from "react";

const heightMap: Record<string, string> = {
  "h-56": "14rem",
  "h-60": "15rem",
  "h-64": "16rem",
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
}

export default function ScrollableScreenshot({
  src,
  alt,
  height = "h-64",
  className = "",
  rounded = true,
}: ScrollableScreenshotProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const resolvedHeight = resolveHeight(height);

  return (
    <div
      className={`relative w-full overflow-hidden bg-brand ${rounded ? "rounded-[0.9rem]" : ""} ${className}`}
      style={{ height: resolvedHeight }}
    >
      {/* Scrollable tall image — visitors scroll to view the full capture */}
      <div
        ref={scrollerRef}
        onScroll={() => {
          const el = scrollerRef.current;
          if (el && el.scrollTop > 2 && !scrolled) setScrolled(true);
        }}
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
          src={src}
          alt={alt}
          draggable={false}
          className="block w-full"
          loading="lazy"
        />
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
