/* ============================================================
   DESIGN: Deep Ocean Protocol — Navbar
   Layout: brand (left) · nav links + Resume (right)
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { RESUME_URL } from "@/config/site";

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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
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
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const showSolidBg = scrolled || mobileOpen;

  return (
    <nav
      className="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: showSolidBg ? "rgba(5, 13, 26, 0.92)" : "transparent",
        backdropFilter: showSolidBg ? "blur(16px)" : "none",
        borderBottom: showSolidBg ? "1px solid rgba(0, 212, 255, 0.08)" : "none",
      }}
    >
      <div className="navbar-inner container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand — left */}
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileOpen(false);
          }}
          className="navbar-brand"
          aria-label="Mohsin Azam — scroll to top"
        >
          <div className="navbar-logo" aria-hidden="true">
            <img
              src="/Icone_logo.png"
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>
          <span className="navbar-name">
            Mohsin<span className="text-[#00D4FF]"> Azam</span>
          </span>
        </button>

        {/* Desktop — links + Resume grouped on the right (reference layout) */}
        <div className="navbar-desktop hidden lg:flex items-center">
          <div className="navbar-links flex items-center">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className="nav-link"
                  style={{
                    color: isActive ? "#00D4FF" : "rgba(255,255,255,0.65)",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <a href={RESUME_URL} className="btn-teal navbar-resume-btn">
            Resume
          </a>
        </div>

        {/* Mobile — hamburger only */}
        <button
          type="button"
          className="navbar-menu-btn lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <>
          <button
            type="button"
            className="navbar-backdrop lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="navbar-mobile-panel lg:hidden">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className="navbar-mobile-link"
                  style={{ color: isActive ? "#00D4FF" : "rgba(255,255,255,0.85)" }}
                >
                  {item.label}
                </button>
              );
            })}
            <a
              href={RESUME_URL}
              className="btn-teal navbar-mobile-resume"
              onClick={() => setMobileOpen(false)}
            >
              Download Resume
            </a>
            <div className="navbar-mobile-contact">
              <a href="mailto:azammohsin816@gmail.com">Email</a>
              <a href="tel:+923118363591">Call</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
