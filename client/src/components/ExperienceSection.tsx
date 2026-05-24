/* ============================================================
   DESIGN: Deep Ocean Protocol — Experience Section
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const companyLinks: Record<string, string> = {
  Omnisoft: "https://www.digiportid.com/",
  "Freelance (Independent)": "https://multxdev.litho.ai/",
  "Genesis IT Lab": "https://explorer.xrplevm.org/address/0x30C89cfae115d65f309A63f8D18Ad4eC6708F2F9",
};

const getCompanyLink = (company: string): string => companyLinks[company] || "#";

const experiences = [
  {
    company: "Omnisoft",
    role: "Blockchain & Web3 Developer",
    period: "Sep 2025 – Present",
    location: "Lahore · Onsite",
    current: true,
    color: "#00D4FF",
    achievements: [
      "Architected and developed DigiPort — a SaaS-based decentralized KYC platform enabling secure on-chain identity verification, credential management, and compliance automation.",
      "Designed enterprise-grade RBAC (Role-Based Access Control) workflows for financial institutions, ensuring secure onboarding and permission management.",
      "Integrated USDT payment infrastructure with Chainlink price feeds for dynamic real-time fiat-equivalent subscription billing.",
      "Developed and deployed scalable Solidity smart contracts with upgradeable architecture using OpenZeppelin proxy patterns.",
      "Delivered end-to-end Web3 integration by connecting audited smart contracts with a production-ready React.js / Next.js frontend.",
      "Built blockchain interoperability and wallet integrations supporting Ethereum, BSC, Polygon, and EVM-compatible ecosystems.",
    ],
    tags: ["DigiPort", "SaaS", "KYC", "RBAC", "Chainlink", "USDT", "OpenZeppelin", "Solidity", "React", "Next.js"],
  },
  {
    company: "Freelance (Independent)",
    role: "Smart Contract Developer",
    period: "Dec 2025 – May 2026",
    location: "Remote · Part-time",
    current: false,
    color: "#F4C430",
    achievements: [
      "Developed MultX — a Lithosphere-based cross-chain bridge supporting asset transfers between Ethereum and BSC.",
      "Implemented a 2-of-3 multi-signature validator consensus mechanism with unique hash verification.",
      "Built Lock & Release settlement logic with relayer coordination for trustless cross-chain messaging.",
      "Delivered production-ready bridge infrastructure alongside ongoing full-time development at Omnisoft.",
    ],
    tags: ["MultX", "Cross-Chain Bridge", "Multi-Sig", "Ethereum", "BSC", "Lithosphere"],
  },
  {
    company: "Bahria University — Karachi Incubation Center",
    role: "Blockchain Developer",
    period: "May 2025 – Sep 2025",
    location: "Karachi · Project-based",
    current: false,
    color: "#00D4FF",
    achievements: [
      "Built a tamper-proof supply chain tracking dApp on Ethereum for end-to-end product provenance verification.",
      "Designed on-chain event logging and wallet authentication for transparent stakeholder audit trails.",
      "Delivered a production-ready DApp for the university incubation program with secure smart contract architecture.",
    ],
    tags: ["Supply Chain", "Ethereum", "Provenance", "DApp", "Solidity"],
  },
  {
    company: "Genesis IT Lab",
    role: "Blockchain & DeFi Developer",
    period: "Aug 2024 – Apr 2025",
    location: "Islamabad · Contract",
    current: false,
    color: "#00D4FF",
    achievements: [
      "Deployed the CFX DeFi ecosystem on XRPL EVM mainnet — 6 smart contracts including CFXToken, CFXSwap, and PairVaultFactory.",
      "Engineered a factory-cloned vault framework with PET receipt tokens and NAV-driven deposit/redemption logic.",
      "Built SimpleOracleRouter for accurate XRP-to-CFX exchange rates with on-chain oracle integration.",
      "Led full-cycle delivery from contract architecture through mainnet deployment and frontend integration.",
    ],
    tags: ["CFX", "XRPL EVM", "DeFi", "Vaults", "Oracles", "Mainnet", "Solidity"],
  },
];

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const { ref, visible } = useScrollAnimation(0.1);
  const link = getCompanyLink(exp.company);

  return (
    <div
      ref={ref}
      className="relative pl-10 sm:pl-12 lg:pl-20 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className="absolute left-1.5 lg:left-5 top-6 w-5 h-5 rounded-full flex items-center justify-center"
        style={{
          background:
            exp.color === "#F4C430"
              ? "rgba(244, 196, 48, 0.15)"
              : "rgba(0, 212, 255, 0.15)",
          border: `2px solid ${exp.color}`,
          boxShadow: `0 0 12px ${exp.color}60`,
        }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
      </div>

      <div className="glass-card hero-card-3d rounded-xl p-4 sm:p-6 project-card">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-3 mb-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-1 flex-wrap">
              <a
                href={link}
                target={link !== "#" ? "_blank" : undefined}
                rel={link !== "#" ? "noopener noreferrer" : undefined}
                className="text-base sm:text-lg font-bold text-white hover:text-teal-400 transition-colors break-words"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {exp.company}
              </a>
              {exp.current && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(0, 212, 255, 0.1)",
                    border: "1px solid rgba(0, 212, 255, 0.3)",
                    color: "#00D4FF",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Current
                </span>
              )}
              {exp.company === "Freelance (Independent)" && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(244, 196, 48, 0.1)",
                    border: "1px solid rgba(244, 196, 48, 0.3)",
                    color: "#F4C430",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Parallel · Part-time
                </span>
              )}
            </div>
            <p
              className="text-sm font-medium"
              style={{ color: exp.color, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {exp.role}
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <p
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {exp.period}
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}
            >
              {exp.location}
            </p>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.achievements.map((ach, j) => (
            <li
              key={j}
              className="flex items-start gap-2 text-sm"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "#00D4FF", marginTop: "2px", flexShrink: 0 }}>▸</span>
              {ach}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="skill-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-pad relative overflow-x-hidden"
    >
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10 md:mb-16">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            CAREER JOURNEY
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">Experience</h2>
          <div className="teal-line w-16" />
        </div>

        <div className="relative">
          <div
            className="absolute left-4 lg:left-8 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, #00D4FF 0%, rgba(0,212,255,0.1) 100%)",
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
