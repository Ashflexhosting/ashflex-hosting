import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Scan, ZoomIn } from "lucide-react";

export interface LightboxShot {
  src: string;
  caption: string;
}

interface FullPageLightboxProps {
  shots: LightboxShot[];
  initialIndex: number;
  projectTitle: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

/**
 * High-resolution lightbox for full-page site captures.
 *
 * Two viewing modes:
 * - Fit: the capture is displayed fit-to-width at its natural resolution so
 *   every pixel is visible; the tall frame is vertically scrollable.
 * - Zoom: the capture is displayed at its natural width and visitors can
 *   drag-pan it, or scroll the mouse wheel to zoom in/out (pinch-zoom on
 *   touch via the native touch pinch gesture).
 */
export default function FullPageLightbox({
  shots,
  initialIndex,
  projectTitle,
  onClose,
  onIndexChange,
}: FullPageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const panRef = useRef({ x: 0, y: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragRef = useRef({ active: false, startX: 0, startY: 0, panX: 0, panY: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Index navigation via keyboard and via props changes
  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goShot(1);
      if (e.key === "ArrowLeft") goShot(-1);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, shots.length]);

  // Reset zoom/pan when navigating between captures
  useEffect(() => {
    resetView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const goShot = (dir: 1 | -1) => {
    const next = (index + dir + shots.length) % shots.length;
    setIndex(next);
    onIndexChange(next);
  };

  const resetView = () => {
    setScale(1);
    panRef.current = { x: 0, y: 0 };
    setPan({ x: 0, y: 0 });
    const el = viewportRef.current;
    if (el) el.scrollTop = 0;
  };

  // Wheel zoom while in zoom mode, vertical scrolling otherwise
  const handleWheel = (e: React.WheelEvent) => {
    if (!zoomed) return;
    e.preventDefault();
    e.stopPropagation();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    setScale((s) => Math.min(4, Math.max(0.5, s * factor)));
  };

  // Drag-to-pan in zoom mode
  const onPointerDown = (e: React.PointerEvent) => {
    if (!zoomed) return;
    dragRef.current = { active: true, startX: e.clientX, startY: e.clientY, panX: panRef.current.x, panY: panRef.current.y };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    panRef.current = { x: dragRef.current.panX + dx, y: dragRef.current.panY + dy };
    setPan({ ...panRef.current });
  };
  const onPointerUp = () => {
    dragRef.current.active = false;
  };

  const toggleZoom = () => {
    if (zoomed) {
      resetView();
      setZoomed(false);
    } else {
      setZoomed(true);
    }
  };

  const shot = shots[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-brand/95 backdrop-blur-sm flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${projectTitle} screenshot ${index + 1} in high resolution`}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-sm font-medium text-white">
          {shot.caption} <span className="text-white/50">· {index + 1} / {shots.length}</span>
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleZoom}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
              zoomed
                ? "bg-white text-brand border-transparent"
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
            aria-label={zoomed ? "Fit to width" : "Zoom and pan"}
          >
            {zoomed ? <Scan size={13} /> : <ZoomIn size={13} />}
            {zoomed ? "Fit to width" : "Zoom & pan"}
          </button>
          {zoomed && (
            <button
              type="button"
              onClick={resetView}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Reset zoom"
            >
              100%
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Viewport */}
      <div className="relative flex-1 min-h-0">
        {shots.length > 1 && (
          <>
            <button
              type="button"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => goShot(-1)}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => goShot(1)}
              aria-label="Next screenshot"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        <div
          ref={viewportRef}
          onWheel={handleWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClick={() => {
            // Single tap in zoom mode recenters; in fit mode opens the detail view
            if (zoomed) resetView();
          }}
          className={`h-full w-full overflow-y-auto overscroll-none ${
            zoomed ? "touch-pan-y cursor-grab active:cursor-grabbing" : ""
          }`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(37, 99, 235, 0.45) transparent",
          }}
        >
          <style>{`
            [data-lightbox-scroller]::-webkit-scrollbar { width: 6px; }
            [data-lightbox-scroller]::-webkit-scrollbar-track { background: transparent; }
            [data-lightbox-scroller]::-webkit-scrollbar-thumb { background: rgba(37, 99, 235, 0.45); border-radius: 999px; }
            [data-lightbox-scroller]:hover::-webkit-scrollbar-thumb { background: rgba(37, 99, 235, 0.75); }
          `}</style>
          <div
            data-lightbox-scroller
            className="mx-auto w-full max-w-6xl px-3 pb-8 pt-2"
            style={{
              transform: zoomed ? `translate3d(${pan.x}px, ${pan.y}px, 0)` : "none",
              transition: dragRef.current.active ? "none" : "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <img
              ref={imgRef}
              src={shot.src}
              alt={`${projectTitle} — ${shot.caption}`}
              draggable={false}
              className={`block mx-auto shadow-2xl shadow-black/40 ${
                zoomed ? "w-auto min-w-[100%]" : "w-full"
              }`}
              style={zoomed ? { transform: `scale(${scale})`, transformOrigin: "top left" } : undefined}
              loading="eager"
            />
          </div>
        </div>

        {/* Mode hint */}
        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 text-[11px] text-white/70 bg-white/10 rounded-full backdrop-blur-sm">
          {zoomed ? "Scroll to zoom · drag to pan · click to reset" : "Scroll to view the full-page capture"}
        </span>
      </div>
    </div>
  );
}
