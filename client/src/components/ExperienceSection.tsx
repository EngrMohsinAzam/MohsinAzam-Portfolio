/* ============================================================
   DESIGN: Deep Ocean Protocol — Experience Section
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const companyLinks: Record<string, string> = {
  Omnisoft: "https://www.digiportid.com/",
  "Freelance · Bridge Platform": "https://multxdev.litho.ai/",
  "Genesis Lab": "https://explorer.xrplevm.org/address/0x30C89cfae115d65f309A63f8D18Ad4eC6708F2F9",
};

const getCompanyLink = (company: string): string => companyLinks[company] || "#";

const experiences = [
  {
    company: "Omnisoft",
    role: "Blockchain Developer",
    period: "Sep 2025 – Present",
    location: "Lahore, Pakistan",
    current: true,
    color: "#00D4FF",
    achievements: [
      "Developed and maintained DigiPort KYC — a blockchain-powered SaaS identity verification platform for secure compliance management.",
      "Designed and implemented Solidity smart contracts for KYC record management, verification workflows, and platform fee handling.",
      "Built backend APIs and blockchain integrations using Golang to support multi-company onboarding and KYC lifecycle management.",
      "Integrated AI-based document verification and fraud detection systems to automate user validation processes.",
      "Implemented RBAC, wallet integration, and transaction monitoring to enhance security and compliance.",
      "Developed hybrid architecture combining on-chain transparency with off-chain verification for scalability and performance.",
    ],
    tags: ["DigiPort KYC", "Golang", "Solidity", "SaaS", "RBAC", "AI Verification", "Hybrid Architecture"],
  },
  {
    company: "Bahria University",
    role: "Blockchain Developer",
    period: "May 2025 – Sep 2025",
    location: "Karachi, Pakistan",
    current: false,
    color: "#F4C430",
    achievements: [
      "Developed a blockchain-based supply chain management platform for transparent, secure, and tamper-proof product lifecycle tracking.",
      "Designed and deployed Solidity smart contracts for product registration, ownership transfer, and on-chain verification.",
      "Built a React.js dashboard integrated with MetaMask wallet connectivity for real-time product tracking.",
      "Implemented RBAC to secure supply chain operations and improve access management.",
      "Enhanced supply chain transparency, traceability, and trust using blockchain-based verification mechanisms.",
    ],
    tags: ["Supply Chain", "Solidity", "React.js", "MetaMask", "RBAC", "Ethereum"],
  },
  {
    company: "Freelance · Bridge Platform",
    role: "Blockchain Developer",
    period: "Contract",
    location: "Remote",
    current: false,
    color: "#F4C430",
    achievements: [
      "Developed MultX Bridge — a cross-chain token bridge enabling secure asset transfers between Ethereum and BNB Chain.",
      "Built and deployed Solidity smart contracts for token locking, minting, burning, and release mechanisms.",
      "Supported multiple ecosystem tokens including IMAGE, LGPT, and custom blockchain assets across networks.",
      "Implemented validator and relayer-based verification for secure, reliable, and tamper-proof transaction execution.",
      "Integrated MetaMask and Web3 wallet functionalities for seamless user interaction and token bridging.",
      "Designed, tested, and optimized bridge workflows using Hardhat, Ethers.js, and OpenZeppelin libraries.",
    ],
    tags: ["MultX Bridge", "Cross-Chain", "Solidity", "Hardhat", "OpenZeppelin", "Ethereum", "BNB Chain"],
  },
  {
    company: "Genesis Lab",
    role: "Blockchain Developer",
    period: "Aug 2024 – Apr 2025",
    location: "Islamabad, Pakistan",
    current: false,
    color: "#00D4FF",
    achievements: [
      "Architected CryptoForexBridge (CFX) — a decentralized forex tokenization platform on XRPL EVM.",
      "Built and deployed Solidity smart contracts enabling stablecoin deposits and ERC1155 tokenized forex pairs.",
      "Developed vault, minting, redemption, and token management contracts with oracle-based pricing mechanisms.",
      "Implemented secure financial workflows for token issuance, asset-backed redemption, and token burning.",
      "Conducted smart contract testing, deployment, and optimization using Hardhat, Chai, and Ethers.js.",
      "Improved contract security, scalability, and transaction efficiency for decentralized financial operations.",
    ],
    tags: ["CFX", "XRPL EVM", "DeFi", "ERC1155", "Oracles", "Tokenization", "Solidity"],
  },
  {
    company: "Volwest Startup",
    role: "Smart Contract Developer",
    period: "Contract",
    location: "Remote",
    current: false,
    color: "#00D4FF",
    achievements: [
      "Developed and deployed Olwist Token — an advanced ERC20 with minting, pausing, blacklisting, and expiry management.",
      "Implemented upgradeable smart contract functionalities using OpenZeppelin standards for security and maintainability.",
      "Optimized smart contract performance and conducted extensive testing using Hardhat, Ethers.js, and Solidity best practices.",
      "Designed token infrastructure to support future ecosystem growth, integrations, and scalable blockchain applications.",
    ],
    tags: ["Olwist Token", "ERC-20", "OpenZeppelin", "Upgradeable", "Hardhat", "Solidity"],
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
              {exp.company === "Freelance · Bridge Platform" && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(244, 196, 48, 0.1)",
                    border: "1px solid rgba(244, 196, 48, 0.3)",
                    color: "#F4C430",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Freelance
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
              <ExperienceCard key={`${exp.company}-${i}`} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
