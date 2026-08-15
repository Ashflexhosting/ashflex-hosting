import { useState, useRef, useCallback } from "react";

/**
 * Device mockup frame for portfolio detail screenshots with three upgrades:
 *
 * 1. **Screen glare** — a subtle diagonal sheen across the glass that shifts
 *    gently, so the screen reads as a real glossy panel.
 * 2. **Responsive device switch** — an iMac-style all-in-one desktop frame on
 *    md+ screens, switching to a sleek phone mockup on smaller viewports.
 * 3. **Manual scroll controls** — up/down chevron buttons overlaid on the
 *    screen let visitors step through the full-page capture at a controlled
 *    speed (the hover auto-scroll still works alongside them).
 */
interface LaptopFrameProps {
  children: React.ReactNode;
  className?: string;
  /** Optional ref target so the frame can drive the inner scroller */
  scrollerRef?: React.RefObject<HTMLDivElement | null>;
}

const SCROLL_STEP = 200; // px per arrow tap
const SCROLL_DURATION = 300; // ms for a smooth stepped scroll

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="opacity-70">
      <path
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
        fill="#3a3a3e"
      />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M5 11.5 9 7l4 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M5 6.5 9 11l4-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Smoothly steps the scroller by `delta` px over SCROLL_DURATION ms.
 * Uses its own rAF loop so manual taps feel controlled regardless of
 * the hover auto-scroll running at the same time.
 */
function stepScroll(el: HTMLElement, delta: number) {
  const start = el.scrollTop;
  const target = Math.min(Math.max(start + delta, 0), el.scrollHeight - el.clientHeight);
  if (target === start) return;
  const t0 = performance.now();
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
  const tick = (now: number) => {
    const p = Math.min((now - t0) / SCROLL_DURATION, 1);
    el.scrollTop = start + (target - start) * ease(p);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * On-screen navigation arrows: sit on the right edge of the screen area,
 * step the capture up/down on click, and hide when scrolling is unnecessary.
 */
function ScrollArrows({ scrollerRef }: { scrollerRef: React.RefObject<HTMLDivElement | null> }) {
  const [canScroll, setCanScroll] = useState({ up: false, down: true });

  const refresh = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScroll({
      up: el.scrollTop > 4,
      down: el.scrollTop + el.clientHeight < el.scrollHeight - 4,
    });
  }, [scrollerRef]);

  // Refresh when the scroll position is known to change (manual step or auto)
  const onBefore = (delta: number) => {
    stepScroll(scrollerRef.current!, delta);
  };

  return (
    <div
      role="group"
      aria-label="Screenshot navigation"
      onScroll={refresh}
      className="absolute inset-y-0 right-0 z-10 hidden md:flex flex-col items-center justify-center gap-1.5 pr-[6px]"
      style={{ pointerEvents: "none" }}
    >
      <button
        type="button"
        aria-label="Scroll up"
        onClick={() => onBefore(-SCROLL_STEP)}
        onWheel={(e) => e.stopPropagation()}
        className="pointer-events-auto h-8 w-8 rounded-full bg-brand/85 text-white/90 shadow-md backdrop-blur-sm flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200 disabled:opacity-20 disabled:scale-100"
        disabled={!canScroll.up}
      >
        <ChevronUp />
      </button>
      <button
        type="button"
        aria-label="Scroll down"
        onClick={() => onBefore(SCROLL_STEP)}
        onWheel={(e) => e.stopPropagation()}
        className="pointer-events-auto h-8 w-8 rounded-full bg-brand/85 text-white/90 shadow-md backdrop-blur-sm flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200 disabled:opacity-20 disabled:scale-100"
        disabled={!canScroll.down}
      >
        <ChevronDown />
      </button>
    </div>
  );
}

/**
 * iMac-style all-in-one desktop frame matching the user's reference
 * (desktopframe.jpg): wide ~16:9 screen inside a thick rounded dark bezel
 * with a camera dot, a silver aluminum chin spanning the full width with
 * the Apple logo, and a slim silver stand with a curved base.
 * A diagonal sheen overlay gives the glass a realistic glare.
 */
function ImacFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full ${className ?? ""}`}>
      {/* Display body: thick rounded black bezel */}
      <div
        className="relative w-full rounded-[1.1rem] shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        style={{
          background: "linear-gradient(180deg, #2e2e32 0%, #111113 40%, #0a0a0c 100%)",
          padding: "5.5% 4% 0",
        }}
      >
        {/* Camera dot on the top bezel */}
        <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[0.45rem] h-[0.45rem] rounded-full bg-[#0f0f10] ring-1 ring-black/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] z-10" />
        {/* Screen: white face with rounded corners */}
        <div className="relative w-full overflow-hidden rounded-[0.35rem] bg-white">{children}</div>
      </div>
      {/* Silver chin spanning the full width, with the Apple logo */}
      <div className="relative w-full h-[2.6rem] rounded-b-[0.9rem] bg-gradient-to-b from-[#e8e8eb] via-[#cfcfd3] to-[#b7b7bd] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-3px_6px_rgba(0,0,0,0.12)] -mt-[0.3rem] pt-[0.2rem] z-[2]">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[0.55rem]">
          <AppleLogo />
        </div>
      </div>
      {/* Slim silver stand neck */}
      <div className="relative mx-auto w-[34%] -mt-[0.15rem]">
        <div
          className="h-[14px] bg-gradient-to-b from-[#c8c8cc] via-[#b4b4ba] to-[#a2a2a8] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-2px_3px_rgba(0,0,0,0.15)]"
          style={{ clipPath: "polygon(24% 0, 76% 0, 100% 100%, 0 100%)" }}
        />
      </div>
      {/* Curved silver base */}
      <div className="mx-auto w-[62%] -mt-[0.1rem]">
        <div
          className="h-[10px] rounded-[999px] bg-gradient-to-b from-[#d4d4d8] via-[#bfbfc4] to-[#a5a5ab] shadow-[0_3px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)]"
        />
      </div>
    </div>
  );
}

/**
 * Phone mockup for smaller screens: dark bezel with pill speaker notch,
 * side buttons, rounded corners, and a slim dark edge under the screen.
 */
function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-[24rem] mx-auto ${className ?? ""}`}>
      {/* Phone body */}
      <div className="relative w-full rounded-[2rem] bg-[#161618] p-[2.5%] shadow-[0_3px_12px_rgba(0,0,0,0.35)]">
        {/* Power button (right) and volume buttons (left) */}
        <div className="absolute -right-[3px] top-[14%] w-[3px] h-[9%] rounded-r bg-[#2e2e32]" />
        <div className="absolute -left-[3px] top-[16%] w-[3px] h-[6%] rounded-l bg-[#2e2e32]" />
        <div className="absolute -left-[3px] top-[24%] w-[3px] h-[6%] rounded-l bg-[#2e2e32]" />
        {/* Dynamic Island speaker */}
        <div className="absolute top-[3.5%] left-1/2 -translate-x-1/2 w-[26%] h-[14px] rounded-full bg-black z-10" />
        {/* Screen */}
        <div className="relative w-full overflow-hidden rounded-[1.6rem] bg-brand">{children}</div>
      </div>
    </div>
  );
}

export default function LaptopFrame({ children, className = "", scrollerRef }: LaptopFrameProps) {
  // Shared ref so the arrow buttons and screen glare can observe the scroller.
  // If the consumer passes a ref, we merge events into it.
  const internalRef = useRef<HTMLDivElement | null>(null);
  const refs: React.RefObject<HTMLDivElement | null>[] = [internalRef];
  if (scrollerRef) refs.push(scrollerRef);

  const screen = (
    <div className="relative">
      {/* Subtle glass glare — a soft diagonal sheen over the whole screen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 18%, transparent 42%, transparent 58%, rgba(255,255,255,0.02) 78%, rgba(255,255,255,0.06) 100%)",
        }}
      />
      {/* Control arrows overlaid on the right edge of the screen */}
      <ScrollArrows scrollerRef={scrollerRef ?? internalRef} />
      {children}
    </div>
  );

  return (
    <div data-device-frame="" className={`w-full ${className}`}>
      {/* Desktop: iMac frame */}
      <div className="hidden md:block">
        <ImacFrame>{screen}</ImacFrame>
      </div>
      {/* Mobile: phone frame */}
      <div className="block md:hidden">
        <PhoneFrame>{screen}</PhoneFrame>
      </div>
    </div>
  );
}
