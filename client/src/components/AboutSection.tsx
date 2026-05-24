/* ============================================================
   DESIGN: Deep Ocean Protocol — About Section
   ============================================================ */
import { Shield, Layers, GitBranch, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PROFILE_IMG = "/profile.jpeg";

const highlights = [
  {
    icon: Shield,
    title: "On-Chain KYC Systems",
    desc: "Built DigiPort — a SaaS decentralized KYC platform with enterprise RBAC, OpenZeppelin upgradeable contracts, Chainlink-powered USDT billing, and multi-chain wallet integrations.",
  },
  {
    icon: Layers,
    title: "DeFi on XRPL EVM",
    desc: "Deployed the CFX ecosystem on mainnet — vault factories, oracle routers, and NAV-driven deposit/redemption logic across 6 smart contracts.",
  },
  {
    icon: GitBranch,
    title: "Cross-Chain Infrastructure",
    desc: "Engineered MultX — a Lithosphere-based bridge with 2-of-3 multi-sig validators, Lock & Release settlement, and relayer coordination across ETH & BSC.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web3 Delivery",
    desc: "End-to-end DApp development from Solidity and OpenZeppelin contracts to React, Next.js, Go, and Node.js — production-ready and mainnet-deployed.",
  },
];

const educationFacts = [
  "BSc Telecom Engineering — UET Mardan (2021 – 2025)",
  "English — Professional Working Proficiency",
  "Urdu — Native",
  "Available Immediately · Open to Relocation",
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
                alt="Mohsin Azam — Blockchain & Web3 Developer"
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
              Blockchain & Web3 Developer with{" "}
              <span style={{ color: "#00D4FF", fontWeight: 600 }}>3+ years of hands-on experience</span>{" "}
              architecting production-grade decentralized applications, smart contracts, and DeFi
              infrastructure across Ethereum, BSC, Polygon, Tron, and XRPL EVM.
            </p>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}
            >
              Currently building DigiPort at Omnisoft Lahore, with a track record spanning on-chain
              KYC platforms, cross-chain bridges, vault systems, and tokenization protocols. I deliver
              full-cycle — from audited Solidity contracts to React, Next.js, Go, and Node.js
              integration. Based in Lahore, immediately available, and open to relocation across Pakistan.
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
