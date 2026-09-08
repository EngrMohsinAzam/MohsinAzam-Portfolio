/* ============================================================
   DESIGN: Deep Ocean Protocol — Hero Section
   - Full-bleed background with generated blockchain image
   - Animated particle network overlay
   - Typewriter effect on role text
   - Diagonal bottom divider
   ============================================================ */
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from "lucide-react";
import { RESUME_URL, WHATSAPP_HREF, openWhatsApp } from "@/config/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useTypewriter } from "@/hooks/useTypewriter";

const roles = [
  "Full Stack & Backend Engineer",
  "Golang & Node.js Developer",
  "Microservices & REST API Engineer",
  "Cloud-Native Full-Stack Developer",
  "Enterprise Backend Engineer",
  "Fintech Platform Developer",
  "Blockchain & Smart Contract Engineer",
];

const coreStack = [
  "Golang · Node.js · REST APIs",
  "Next.js · TypeScript · React",
  "Microservices & API Development",
  "PostgreSQL · MongoDB · Redis",
  "Docker · Kubernetes · DevOps",
  "Solidity · Web3 · Smart Contracts",
  "DeFi · Fintech · Tokenization",
];

const productionHighlights = [
  {
    title: "DigiPort KYC",
    desc: "SaaS Identity Verification Platform",
    href: "https://kyc-platform-blush.vercel.app/",
    tag: "Live",
    accent: "#00D4FF",
  },
  {
    title: "Banking Platform",
    desc: "Core Digital Banking · Golang",
    href: "https://banking-plateform.vercel.app/",
    tag: "Live",
    accent: "#F4C430",
  },
  {
    title: "Murabaha Engine",
    desc: "Shariah-Compliant Financing · Golang",
    href: "https://murabaha-engine.vercel.app/login",
    tag: "Live",
    accent: "#F4C430",
  },
  {
    title: "TeleNexus",
    desc: "Telecom Network Operations Platform",
    href: "https://tele-nexus.vercel.app/login",
    tag: "Live",
    accent: "#00D4FF",
  },
  {
    title: "MultX Bridge",
    desc: "Cross-Chain Token Transfer · ETH ↔ BSC",
    href: "https://multxdev.litho.ai/",
    tag: "Live",
    accent: "#00D4FF",
  },
  {
    title: "CryptoForexBridge",
    desc: "Forex Tokenization on XRPL EVM",
    href: "https://explorer.xrplevm.org/address/0x30C89cfae115d65f309A63f8D18Ad4eC6708F2F9",
    tag: "Mainnet",
    accent: "#F4C430",
  },
];

function CoreSkillsPanel() {
  const mid = Math.ceil(coreStack.length / 2);
  const leftSkills = coreStack.slice(0, mid);
  const rightSkills = coreStack.slice(mid);

  return (
    <div className="glass-card hero-card-3d rounded-xl p-4 sm:p-6 w-full">
      <p
        className="text-xs mb-3"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Core Technical Skills
      </p>
      <div className="grid grid-cols-2 gap-2 items-start">
        <div className="flex flex-col gap-2">
          {leftSkills.map((tech) => (
            <span key={tech} className="skill-badge skill-badge-mobile-col">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {rightSkills.map((tech) => (
            <span key={tech} className="skill-badge skill-badge-mobile-col">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductionHighlightsPanel() {
  return (
    <div className="glass-card hero-card-3d rounded-xl p-4 sm:p-5 w-full min-h-0 flex flex-col flex-1">
      <p
        className="text-xs mb-2.5 shrink-0"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Production Highlights
      </p>
      <div className="hero-highlights-scroll space-y-2 min-h-0">
        {productionHighlights.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg transition-all duration-200 group min-h-[52px] active:opacity-80"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(0, 212, 255, 0.1)",
            }}
          >
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.title}
              </p>
              <p
                className="text-xs line-clamp-2 sm:truncate"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {item.desc}
              </p>
            </div>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full shrink-0"
              style={{
                background: `${item.accent}15`,
                border: `1px solid ${item.accent}40`,
                color: item.accent,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
              }}
            >
              {item.tag}
            </span>
            <ExternalLink
              size={14}
              className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
              style={{ color: item.accent }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const displayed = useTypewriter(roles);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-start overflow-x-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl pt-20 lg:pt-20 pb-14 lg:pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-start">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            {/* Available badge */}
            <div className="mb-4 lg:mb-5">
              <span
                className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 py-2 rounded-full text-xs font-medium max-w-full"
                style={{
                  background: "rgba(0, 212, 255, 0.08)",
                  border: "1px solid rgba(0, 212, 255, 0.25)",
                  color: "#00D4FF",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
                Open to Full-Time Roles · Based in Riyadh, KSA
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 lg:mb-4 leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Mohsin
              <br />
              <span style={{ color: "#00D4FF" }}>Azam</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-5 min-h-[2.75rem] lg:min-h-[3rem]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <span aria-live="polite">{displayed}</span>
              <span className="typewriter-cursor" style={{ color: "#00D4FF" }}>|</span>
            </div>

            {/* Bio */}
            <p
              className="text-base lg:text-lg mb-6 lg:mb-7 max-w-md leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
              }}
            >
              5+ years building scalable full-stack and backend systems for FinTech, SaaS, and
              enterprise platforms. Strong in Golang, Node.js, Next.js, REST APIs, microservices,
              and databases — with additional experience in Solidity, smart contracts, and Web3.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-8">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-teal px-7 py-3.5 rounded-lg text-sm font-semibold w-full sm:w-auto min-h-[48px]"
              >
                View Projects
              </button>
              <a
                href={RESUME_URL}
                className="btn-outline-teal px-7 py-3.5 rounded-lg text-sm font-semibold inline-flex items-center justify-center w-full sm:w-auto min-h-[48px]"
              >
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/EngrMohsinAzam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="touch-target rounded-lg transition-all duration-200 active:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohsin-azam-b745a5292/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="touch-target rounded-lg transition-all duration-200 active:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:azammohsin816@gmail.com"
                aria-label="Send email"
                className="touch-target rounded-lg transition-all duration-200 active:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Mail size={18} />
              </a>
              <a
                href={WHATSAPP_HREF}
                onClick={openWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="touch-target rounded-lg transition-all duration-200 active:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>

            {/* Mobile: skills + production highlights */}
            <div className="lg:hidden mt-8 space-y-4">
              <CoreSkillsPanel />
              <ProductionHighlightsPanel />
            </div>
          </div>

          {/* Right: Skills + production highlights — fits in viewport */}
          <div
            className="hidden lg:flex flex-col gap-3 animate-fade-in-up w-full self-start lg:max-h-[calc(100dvh-6.5rem)]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-card hero-card-3d rounded-xl p-4 w-full shrink-0">
              <p
                className="text-xs mb-2.5"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Core Technical Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <ProductionHighlightsPanel />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className={`hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 ${reduceMotion ? "" : "animate-float"}`}
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <span className="text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scroll</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
