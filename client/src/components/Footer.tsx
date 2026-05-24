/* ============================================================
   DESIGN: Deep Ocean Protocol — Footer
   - Minimal, dark, with teal accent
   - Quick nav links + copyright
   ============================================================ */
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="py-8 sm:py-10 relative safe-bottom"
      style={{
        background: "rgba(3, 10, 20, 0.55)",
        borderTop: "1px solid rgba(0,212,255,0.08)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between w-full">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 shrink-0"
            aria-label="Mohsin Azam — scroll to top"
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden"
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
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Mohsin<span style={{ color: "#00D4FF" }}> Azam</span>
            </span>
          </button>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {["about", "experience", "projects", "skills"].map(id => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs sm:text-sm capitalize transition-colors duration-200 hover:text-white touch-target px-2 min-h-[44px]"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                }}
              >
                {id}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/EngrMohsinAzam", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/mohsin-azam-b745a5292", label: "LinkedIn" },
              { icon: Mail, href: "mailto:azammohsin816@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+923118363591", label: "Phone" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("mailto:") || s.href.startsWith("tel:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") || s.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="touch-target rounded-lg transition-all duration-200 active:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.25)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Mohsin Azam · Blockchain & Web3 Developer · Built with{" "}
          <span style={{ color: "#00D4FF" }}>♦</span> and Solidity
        </div>
      </div>
    </footer>
  );
}
