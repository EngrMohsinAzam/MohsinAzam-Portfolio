/* ============================================================
   DESIGN: Deep Ocean Protocol — Scroll To Top Button
   ============================================================ */
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-50 w-12 h-12 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 touch-target"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        right: "max(1rem, env(safe-area-inset-right))",
        background: "linear-gradient(135deg, #00D4FF, #0099CC)",
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)",
        color: "#050D1A",
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
