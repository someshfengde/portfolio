"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let rafId = 0;
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: position.x, y: position.y };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      target.x = e.touches[0].clientX;
      target.y = e.touches[0].clientY;
    };

    const animate = () => {
      position.x = lerp(position.x, target.x, 0.12);
      position.y = lerp(position.y, target.y, 0.12);
      dot.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    // Respect users who prefer reduced motion or very small screens
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.innerWidth < 640;
    if (prefersReducedMotion || isSmall) {
      dot.style.display = "none";
      return;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  const size = 350; // diameter of the glow

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30"
      style={{
        width: 1,
        height: 1,
        willChange: "transform",
      }}
    >
      <div
        style={{
          position: "relative",
          left: -size / 2,
          top: -size / 2,
          width: size,
          height: size,
          borderRadius: 9999,
          background:
            "radial-gradient(closest-side, rgba(99, 102, 241, 0.15), rgba(34, 211, 238, 0.08) 50%, transparent 70%)",
          filter: "blur(30px)",
          opacity: 0.85,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}


