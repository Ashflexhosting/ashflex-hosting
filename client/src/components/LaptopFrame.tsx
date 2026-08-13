/**
 * An iMac-style all-in-one desktop mockup matching the classic device reference:
 *
 * - A slim dark display surround with a centered camera dot, rounded corners.
 * - A silver aluminum chin below the screen (the signature iMac look), slightly
 *   wider than the display, with the small Apple-style logo accent.
 * - A silver stand neck (trapezoid) and a rounded silver base beneath the chin.
 * - The website screenshot fills the screen area and stays fully interactive
 *   (hover auto-scroll, touch scroll, click-through).
 */
interface LaptopFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function LaptopFrame({ children, className = "" }: LaptopFrameProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Display: slim dark surround with the screen inside */}
      <div className="relative w-full rounded-[0.9rem] bg-[#141416] p-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
        {/* Camera dot on top bezel */}
        <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#2a2a2e] ring-1 ring-black/50 z-10" />
        {/* Screen area — content fills it */}
        <div className="relative w-full overflow-hidden rounded-[0.55rem] bg-brand">{children}</div>
      </div>

      {/* Silver aluminum chin — wider than the display, like the iMac */}
      <div className="relative -mx-[2%] w-[104%]">
        <div
          className="h-[34px] rounded-b-[0.6rem] bg-gradient-to-b from-[#dcdce0] via-[#c8c8cd] to-[#b4b4ba]"
          style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 4px rgba(0,0,0,0.12)" }}
        >
          {/* Apple-style logo accent centered on the chin */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[8px] w-[10px] h-[10px] rounded-full bg-gradient-to-b from-[#9a9aa0] to-[#7e7e84] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]" />
        </div>
      </div>

      {/* Stand neck — tapered silver trapezoid */}
      <div className="relative mx-auto w-[22%]">
        <div
          className="h-[14px] bg-gradient-to-b from-[#b4b4ba] via-[#a6a6ac] to-[#9a9aa0]"
          style={{ clipPath: "polygon(14% 0, 86% 0, 100% 100%, 0 100%)" }}
        />
      </div>
      {/* Stand base — rounded silver slab */}
      <div className="mx-auto w-[42%]">
        <div
          className="h-[7px] rounded-[6px] bg-gradient-to-b from-[#a6a6ac] to-[#8e8e94]"
          style={{ boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
        />
      </div>
    </div>
  );
}
