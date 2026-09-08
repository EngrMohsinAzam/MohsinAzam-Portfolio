/* ============================================================
   DESIGN: Deep Ocean Protocol — About Section
   ============================================================ */
import { Shield, Layers, GitBranch, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PROFILE_IMG = "/profile.jpeg";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Delivery",
    desc: "End-to-end delivery with Golang and Node.js backends, Next.js/React frontends, REST/gRPC APIs, PostgreSQL & Redis — plus Solidity contracts and Web3 wallet integrations.",
  },
  {
    icon: Shield,
    title: "Backend Engineering",
    desc: "Scalable Golang and Node.js services with clean REST APIs, microservices patterns, PostgreSQL & Redis, Docker, secure authentication, and RBAC for enterprise platforms.",
  },
  {
    icon: Layers,
    title: "Blockchain & DeFi",
    desc: "Production smart contracts and DeFi systems — DigiPort KYC, CryptoForexBridge (CFX) on XRPL EVM, ERC1155 tokenization, vaults, oracles, and secure financial workflows.",
  },
  {
    icon: GitBranch,
    title: "Cross-Chain & Tokenization",
    desc: "Engineered MultX Bridge for ETH ↔ BNB Chain transfers and tokenized asset workflows with validator/relayer verification, OpenZeppelin standards, and wallet integrations.",
  },
];

const educationFacts = [
  "BSc Telecom Engineering — UET Mardan (2021 – 2025)",
  "English — Fluent",
  "Urdu — Native",
  "Open to Full-Time Roles · Based in Riyadh, KSA",
];

function EducationCard({ className = "" }: { className?: string }) {
  return (
    <div className={`glass-card hero-card-3d rounded-xl p-5 ${className}`}>
      <p
        className="text-xs mb-3 tracking-widest"
        style={{
          color: "#00D4FF",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        Education & Background
      </p>
      <ul className="space-y-2">
        {educationFacts.map((fact, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif" }}
          >
            <span style={{ color: "#00D4FF", marginTop: "2px", flexShrink: 0 }}>▸</span>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="section-pad relative overflow-x-hidden"
    >
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          transform: "translate(30%, -50%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10 md:mb-16">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            WHO I AM
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">About Me</h2>
          <div className="teal-line w-16" />
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-5 gap-12 items-start transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="lg:col-span-2 max-w-sm mx-auto lg:max-w-none w-full">
            <div
              className="rounded-2xl overflow-hidden mb-6 relative w-full aspect-[4/5]"
              style={{
                border: "1px solid rgba(0, 212, 255, 0.15)",
                boxShadow:
                  "0 10px 28px rgba(0, 0, 0, 0.35), 0 0 32px rgba(0, 212, 255, 0.08)",
              }}
            >
              <img
                src={PROFILE_IMG}
                alt="Mohsin Azam — Full Stack & Backend Engineer"
                className="w-full h-full object-cover object-[50%_20%]"
                draggable={false}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,13,26,0.5) 0%, transparent 40%)",
                }}
              />
            </div>

            <EducationCard className="hidden lg:block" />
          </div>

          <div className="lg:col-span-3">
            <p
              className="text-lg mb-4 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
              }}
            >
              I&apos;m <span style={{ color: "#00D4FF", fontWeight: 600 }}>Mohsin Azam</span>, a
              Full Stack & Backend Engineer with{" "}
              <span style={{ color: "#00D4FF", fontWeight: 600 }}>5+ years of experience</span>{" "}
              building scalable, secure, and high-performance applications with Golang, Node.js,
              React.js, Next.js, REST APIs, microservices, PostgreSQL, MongoDB, Docker, and Kubernetes.
            </p>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}
            >
              Based in Riyadh, Saudi Arabia and open to full-time opportunities. Experience includes
              DigiPort KYC, TeleNexus, and Banking Platform at Omnisoft, plus blockchain projects in
              DeFi, cross-chain bridges, and smart contracts. I deliver production-ready backend
              architectures and end-to-end solutions for FinTech, SaaS, and decentralized applications.
            </p>

            <EducationCard className="lg:hidden mb-8" />

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="glass-card hero-card-3d rounded-xl p-5 project-card"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "rgba(0, 212, 255, 0.1)" }}
                  >
                    <item.icon size={18} style={{ color: "#00D4FF" }} />
                  </div>
                  <h4
                    className="font-semibold text-white mb-2 text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
