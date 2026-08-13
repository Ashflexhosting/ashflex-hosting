/**
 * A MacBook-style laptop mockup frame matching the classic device reference:
 *
 * - A full silver aluminum base (keyboard deck) that spans wider than the screen,
 *   with a subtle top surface, front edge chamfer, and an opening notch at the
 *   center where the lid meets the deck.
 * - A slim dark display frame (bezel) around the screen, rounded corners, with
 *   a small camera dot centered on the top bezel.
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
      {/* Lid: dark bezel with the screen inside */}
      <div className="relative w-full rounded-[1.1rem] bg-[#141416] p-[7px] shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
        {/* Camera dot */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#2a2a2e] ring-1 ring-black/50 z-10" />
        {/* Screen area — content fills it */}
        <div className="relative w-full overflow-hidden rounded-[0.75rem] bg-brand">{children}</div>
      </div>

      {/* Hinge gap */}
      <div className="h-[5px]" />

      {/* Base / keyboard deck — silver aluminum, wider than the lid */}
      <div className="relative -mx-[3%] w-[106%]">
        {/* Top surface of the deck */}
        <div className="h-[6px] rounded-t-[3px] bg-gradient-to-b from-[#e8e8ea] via-[#d9d9dc] to-[#c9c9cd]" />
        {/* Front edge with chamfer */}
        <div className="h-[8px] rounded-b-[4px] bg-gradient-to-b from-[#c4c4c9] via-[#b5b5ba] to-[#a6a6ac] shadow-[0_3px_6px_rgba(0,0,0,0.18)]" />
        {/* Opening notch — the lip where the lid opens */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[3px] w-[16%] h-[4px] rounded-b-[3px] bg-[#9a9aa0] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]" />
      </div>
    </div>
  );
}
