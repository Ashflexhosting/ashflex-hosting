import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useCallback, useRef } from "react";

export interface TiltEffectProps {
  children: React.ReactNode;
  /** Maximum rotation in degrees (default 5) */
  max?: number;
  /** Class name applied to the wrapper (default: none) */
  className?: string;
  /** Style applied to the wrapper */
  style?: React.CSSProperties;
  /** Disable the tilt entirely (e.g. prefers-reduced-motion) */
  disabled?: boolean;
}

/**
 * Subtle 3D tilt effect driven by cursor position.
 * Rotates the children around the X/Y axes relative to the pointer,
 * with spring smoothing and an eased snap-back to flat on leave.
 */
export function TiltEffect({
  children,
  max = 5,
  className,
  style,
  disabled = false,
}: TiltEffectProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tiltDisabled = disabled || prefersReduced;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 220, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 24 });

  const rotateX: MotionValue<number> = useTransform(springY, [0, 1], [max, -max]);
  const rotateY: MotionValue<number> = useTransform(springX, [0, 1], [-max, max]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(Math.min(1, Math.max(0, x)));
      mouseY.set(Math.min(1, Math.max(0, y)));
    },
    [mouseX, mouseY]
  );

  const handleLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective: 1100,
        transformStyle: "preserve-3d",
        ...style,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{
          rotateX: tiltDisabled ? 0 : rotateX,
          rotateY: tiltDisabled ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
