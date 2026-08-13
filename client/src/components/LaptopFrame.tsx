/**
 * A MacBook-style laptop frame for wrapping website screenshots.
 *
 * Renders a slim screen bezel with rounded corners and a small camera dot on
 * top, plus the signature curved base lip at the bottom. Content fills the
 * screen area and stays fully interactive (scrolling, hover, click-through).
 */
interface LaptopFrameProps {
  children: React.ReactNode;
  /** Optional caption or label — the scroll hint still renders inside */
  className?: string;
}

export default function LaptopFrame({ children, className = "" }: LaptopFrameProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Screen bezel */}
      <div
        className="relative w-full overflow-hidden bg-[#1a1a1c] p-[6px] rounded-t-[0.85rem]"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
      >
        {/* Camera dot on the bezel */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#3a3a3e] ring-1 ring-black/40 z-10" />
        {/* Screen — content fills it */}
        <div className="relative w-full overflow-hidden rounded-[0.65rem] bg-brand">{children}</div>
      </div>
      {/* Base lip */}
      <div className="relative">
        <div className="h-[7px] bg-gradient-to-b from-[#3a3a3e] to-[#52525a] rounded-b-sm mx-[8%] translate-y-[-1px]" />
        <div className="h-[5px] bg-gradient-to-b from-[#52525a] to-[#3a3a3e] rounded-b-md mx-[4%] translate-y-[-1px]" />
      </div>
    </div>
  );
}
