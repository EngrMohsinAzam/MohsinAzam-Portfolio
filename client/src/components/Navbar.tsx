/* ============================================================
   DESIGN: Deep Ocean Protocol — Navbar
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const showSolidBg = scrolled || mobileOpen;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-md:!bg-[rgba(5,13,26,0.95)] max-md:!backdrop-blur-md max-md:border-b max-md:border-[rgba(0,212,255,0.08)]"
      style={{
        background: showSolidBg ? "rgba(5, 13, 26, 0.92)" : "transparent",
        backdropFilter: showSolidBg ? "blur(16px)" : "none",
        borderBottom: showSolidBg ? "1px solid rgba(0, 212, 255, 0.08)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between max-w-7xl relative z-[60]">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileOpen(false);
          }}
          className="flex items-center gap-2 sm:gap-3 shrink-0 min-h-[44px]"
          aria-label="Mohsin Azam — scroll to top"
        >
          <div
            className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <img
              src="/Icone_logo.png"
              alt=""
              className="h-[160%] w-[160%] max-w-none object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>
          <span
            className="leading-none hidden min-[380px]:inline"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.02em",
            }}
          >
            Mohsin<span style={{ color: "#00D4FF" }}> Azam</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="nav-link min-h-[44px] px-1"
              style={{
                color:
                  activeSection === item.href.slice(1)
                    ? "#00D4FF"
                    : "rgba(255,255,255,0.7)",
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/MohsinAzam_Resume.pdf"
            download
            className="btn-teal px-5 py-2.5 rounded text-sm inline-flex items-center min-h-[44px]"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-white touch-target rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="md:hidden relative z-50 px-4 pb-6 pt-2 safe-bottom max-h-[calc(100dvh-4rem)] overflow-y-auto"
          style={{
            background: "rgba(5, 13, 26, 0.98)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left py-3.5 px-2 nav-link border-b min-h-[48px] text-base"
                style={{
                  borderColor: "rgba(0,212,255,0.08)",
                  color: isActive ? "#00D4FF" : "rgba(255,255,255,0.85)",
                }}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href="/MohsinAzam_Resume.pdf"
            download
            className="btn-teal w-full mt-4 py-3.5 rounded-lg text-sm inline-flex items-center justify-center min-h-[48px]"
            onClick={() => setMobileOpen(false)}
          >
            Download Resume
          </a>
          <div className="flex justify-center gap-3 mt-5 pt-4 border-t border-[rgba(0,212,255,0.08)]">
            <a
              href="mailto:azammohsin816@gmail.com"
              className="text-sm touch-target px-3 rounded-lg"
              style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Email
            </a>
            <a
              href="tel:+923118363591"
              className="text-sm touch-target px-3 rounded-lg"
              style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Call
            </a>
          </div>
          </div>
        </>
      )}
    </nav>
  );
}
