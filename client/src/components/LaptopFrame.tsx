/**
 * iMac-style all-in-one desktop mockup, modeled on the reference image:
 *
 * - A tall, flat dark display body with the screen inset (thick flat bezel
 *   on all sides, camera dot centered on the top edge).
 * - The dark body flows into the tall silver aluminum chin as one unit
 *   (the reference has no gap between bezel and chin).
 * - A centered Apple-style logo on the silver chin.
 * - A short dark stand neck below the chin and a thin horizontal base slab.
 * - The website screenshot fills the screen area and stays fully interactive
 *   (hover auto-scroll, touch scroll, click-through).
 */
interface LaptopFrameProps {
  children: React.ReactNode;
  className?: string;
}

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

export default function LaptopFrame({ children, className = "" }: LaptopFrameProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Display body — tall dark frame around the screen (thick flat bezel) */}
      <div className="relative w-full bg-[#161618] p-[3.5%] pb-0 rounded-[0.35rem] shadow-[0_3px_12px_rgba(0,0,0,0.35)]">
        {/* Camera dot on the top bezel */}
        <div className="absolute top-[1.6%] left-1/2 -translate-x-1/2 w-[0.5rem] h-[0.5rem] rounded-full bg-[#3a3a3e] ring-1 ring-black/40 z-10" />
        {/* Screen area — content fills it */}
        <div className="relative w-full overflow-hidden rounded-[0.1rem] bg-brand">{children}</div>
      </div>

      {/* Integrated silver chin — continuous with the dark body above */}
      <div className="relative w-full h-[1.9rem] bg-gradient-to-b from-[#d8d8db] via-[#c6c6cb] to-[#b0b0b6] -mt-px">
        {/* Apple-style logo centered on the chin */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <AppleLogo />
        </div>
      </div>

      {/* Stand neck — short, slightly tapered, dark metal */}
      <div className="relative mx-auto w-[30%]">
        <div
          className="h-[10px] bg-gradient-to-b from-[#4a4a4e] via-[#3c3c40] to-[#303034]"
          style={{ clipPath: "polygon(18% 0, 82% 0, 100% 100%, 0 100%)" }}
        />
      </div>
      {/* Base — thin horizontal silver slab */}
      <div className="mx-auto w-[52%]">
        <div className="h-[6px] rounded-[4px] bg-gradient-to-b from-[#c0c0c5] to-[#9e9ea4] shadow-[0_2px_5px_rgba(0,0,0,0.25)]" />
      </div>
    </div>
  );
}
