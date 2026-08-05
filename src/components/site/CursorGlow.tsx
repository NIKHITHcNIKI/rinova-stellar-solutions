import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] hidden size-[420px] rounded-full opacity-70 blur-[90px] transition-transform duration-200 ease-out md:block"
      style={{
        transform: `translate3d(${pos.x - 210}px, ${pos.y - 210}px, 0)`,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 22%, transparent), transparent 65%)",
      }}
    />
  );
}
