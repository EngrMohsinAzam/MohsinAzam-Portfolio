/* ============================================================
   DESIGN: Deep Ocean Protocol — Metrics Banner
   - Full-width stats strip between sections
   - Animated counters on scroll (count up from 0)
   - Teal/gold accent alternation
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  { value: 5, suffix: "+", label: "Years Experience", color: "#00D4FF" },
  { value: 9, suffix: "", label: "Projects Built", color: "#F4C430" },
  { value: 5, suffix: "", label: "Live Products", color: "#00D4FF" },
  { value: 30, suffix: "+", label: "REST APIs Built", color: "#F4C430" },
  { value: 12, suffix: "+", label: "Technologies Used", color: "#00D4FF" },
  { value: 15, suffix: "+", label: "Smart Contracts Built", color: "#F4C430" },
];

function AnimatedCounter({
  target,
  suffix,
  color,
  active,
}: {
  target: number;
  suffix: string;
  color: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const duration = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease-out so it feels live and settles cleanly
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    setCount(0);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target]);

  return (
    <span style={{ color }}>
      {count}
      {suffix}
    </span>
  );
}

export default function MetricsBanner() {
  const { ref, visible } = useScrollAnimation(0.25);

  return (
    <div
      ref={ref}
      className="py-8 md:py-12 relative overflow-x-hidden"
      style={{
        background: "rgba(5, 13, 26, 0.25)",
        borderTop: "1px solid rgba(0,212,255,0.08)",
        borderBottom: "1px solid rgba(0,212,255,0.08)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="text-center transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="text-3xl lg:text-4xl font-extrabold mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <AnimatedCounter
                  target={m.value}
                  suffix={m.suffix}
                  color={m.color}
                  active={visible}
                />
              </div>
              <div
                className="text-xs"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
