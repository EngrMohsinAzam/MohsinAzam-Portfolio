/* ============================================================
   DESIGN: Deep Ocean Protocol — Projects Section
   ============================================================ */
import { useState } from "react";
import { Github, ExternalLink, ChevronRight } from "lucide-react";

const DEFI_IMG = "/projects/cfx-defi.jpg";
const KYC_IMG = "/projects/digiport-kyc.jpg";
const BRIDGE_IMG = "/projects/multx-bridge.jpg";
const SUPPLY_IMG = "/projects/supply-chain.jpg";
const STAKING_IMG = "/projects/token-staking.jpg";
const FUNDRAISE_IMG = "/projects/fundraising-dapp.jpg";

const GITHUB_PROFILE = "https://github.com/EngrMohsinAzam";

const projects = [
  {
    id: 1,
    title: "DigiPort — SaaS Decentralized KYC Platform",
    category: "KYC Platform",
    description:
      "A SaaS-based decentralized KYC platform enabling secure on-chain identity verification, credential management, and compliance automation for financial institutions. Features enterprise-grade RBAC, OpenZeppelin upgradeable smart contracts, USDT subscription billing via Chainlink oracles, and multi-chain wallet integrations — live in production at Omnisoft Lahore.",
    image: KYC_IMG,
    featured: true,
    tags: ["Solidity", "SaaS", "KYC", "RBAC", "OpenZeppelin", "Chainlink", "USDT", "React", "Next.js"],
    highlights: [
      "SaaS KYC platform with on-chain identity verification and credential management",
      "Enterprise-grade RBAC workflows for secure financial institution onboarding",
      "USDT subscription billing with Chainlink-powered fiat-equivalent pricing",
      "Upgradeable Solidity contracts using OpenZeppelin proxy patterns",
      "Multi-chain wallet integrations across Ethereum, BSC, Polygon & EVM networks",
      "Live production deployment at digiportid.com",
    ],
    github: GITHUB_PROFILE,
    live: "https://www.digiportid.com/",
    networks: ["Ethereum", "BSC", "Polygon"],
    status: "Live" as const,
    accentColor: "#00D4FF",
  },
  {
    id: 2,
    title: "MultX — Cross-Chain Transfer Protocol",
    category: "Cross-Chain Bridge",
    description:
      "A Lithosphere-based cross-chain bridge enabling secure asset transfers between Ethereum and Binance Smart Chain. Built with a 2-of-3 multi-signature validator consensus, Lock & Release settlement, and relayer coordination for trustless messaging.",
    image: BRIDGE_IMG,
    featured: false,
    tags: ["Solidity", "Cross-Chain", "Multi-Sig", "Ethereum", "BSC", "Lithosphere", "Hardhat"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "https://multxdev.litho.ai/",
    networks: ["Ethereum", "BSC"],
    status: "Live" as const,
    accentColor: "#00D4FF",
  },
  {
    id: 3,
    title: "CFX Ecosystem — DeFi on XRPL EVM",
    category: "DeFi Protocol",
    description:
      "A full DeFi ecosystem deployed on XRPL EVM mainnet comprising 6 smart contracts: CFXToken, CFXSwap, PairVaultFactory, UniversalPairVault, SimpleOracleRouter, and PETToken — with factory-cloned vaults and NAV-driven deposit/redemption logic.",
    image: DEFI_IMG,
    featured: false,
    tags: ["Solidity", "DeFi", "Vaults", "Oracles", "XRPL EVM", "OpenZeppelin", "Mainnet"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "https://explorer.xrplevm.org/address/0x30C89cfae115d65f309A63f8D18Ad4eC6708F2F9",
    networks: ["XRPL EVM"],
    status: "Mainnet" as const,
    accentColor: "#F4C430",
  },
  {
    id: 4,
    title: "Supply Chain Tracker — Bahria Incubation",
    category: "Supply Chain / Web3",
    description:
      "An Ethereum-based supply chain tracking dApp built for Bahria University Karachi Incubation Center. Enables tamper-proof end-to-end product provenance verification with on-chain event logging and wallet authentication.",
    image: SUPPLY_IMG,
    featured: false,
    tags: ["Solidity", "Ethereum", "Supply Chain", "Provenance", "React", "Ethers.js"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "#",
    networks: ["Ethereum"],
    status: "University" as const,
    accentColor: "#F4C430",
  },
  {
    id: 5,
    title: "Token Staking & Rewards System",
    category: "DeFi / Staking",
    description:
      "ERC-20 staking contracts with time-locked rewards, configurable APY, and emergency withdrawal mechanisms. Includes upgradeable token contracts with minting, pausing, blacklisting, and OpenZeppelin Transparent Proxy patterns.",
    image: STAKING_IMG,
    featured: false,
    tags: ["Solidity", "ERC-20", "Staking", "OpenZeppelin", "Proxy", "Hardhat"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "#",
    networks: ["Ethereum"],
    status: "Personal" as const,
    accentColor: "#00D4FF",
  },
  {
    id: 6,
    title: "University Fundraising dApp",
    category: "DeFi Protocol",
    description:
      "An Ethereum-based fundraising platform with transparent on-chain campaign management, wallet authentication, and auditable fund tracking — enabling trustless donation flows with full transparency.",
    image: FUNDRAISE_IMG,
    featured: false,
    tags: ["Solidity", "Ethereum", "DApp", "Wallet Auth", "React", "Ethers.js"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "#",
    networks: ["Ethereum"],
    status: "University" as const,
    accentColor: "#F4C430",
  },
];

const statusColors = {
  Live: "#00D4FF",
  Mainnet: "#F4C430",
  University: "#A78BFA",
  Personal: "#94A3B8",
} as const;

type FilterType =
  | "All"
  | "DeFi Protocol"
  | "KYC Platform"
  | "Cross-Chain Bridge"
  | "Supply Chain / Web3"
  | "DeFi / Staking";

const filters: FilterType[] = [
  "All",
  "DeFi Protocol",
  "KYC Platform",
  "Cross-Chain Bridge",
  "Supply Chain / Web3",
  "DeFi / Staking",
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section-pad relative overflow-x-hidden"
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(244,196,48,0.03) 0%, transparent 70%)",
          transform: "translate(20%, 20%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            WHAT I&apos;VE BUILT
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">Projects</h2>
          <div className="teal-line w-16 mb-6" />
          <p
            className="text-base max-w-2xl"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
          >
            Production blockchain projects spanning on-chain KYC, cross-chain bridges, DeFi vaults,
            supply chain tracking, and tokenization — deployed across Ethereum, BSC, and XRPL EVM
            mainnet.
          </p>
        </div>

        <div className="filter-scroll">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background:
                  activeFilter === filter
                    ? "linear-gradient(135deg, #00D4FF, #0099CC)"
                    : "rgba(255,255,255,0.05)",
                color: activeFilter === filter ? "#050D1A" : "rgba(255,255,255,0.6)",
                border:
                  activeFilter === filter ? "none" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`glass-card hero-card-3d rounded-2xl project-card ${project.featured ? "lg:col-span-3" : ""}`}
              style={{ borderTop: `2px solid ${project.accentColor}30` }}
            >
              <div
                className={`relative overflow-hidden rounded-t-2xl ${project.featured ? "h-48 sm:h-64 lg:h-80" : "h-44 sm:h-48"}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 30%, rgba(5,13,26,0.9) 100%)",
                  }}
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-1.5 sm:gap-2 max-w-[calc(100%-4rem)]">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "rgba(5,13,26,0.8)",
                      border: `1px solid ${project.accentColor}40`,
                      color: project.accentColor,
                      fontFamily: "'Space Grotesk', sans-serif",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold w-fit"
                    style={{
                      background: `${statusColors[project.status]}15`,
                      border: `1px solid ${statusColors[project.status]}40`,
                      color: statusColors[project.status],
                      fontFamily: "'Space Grotesk', sans-serif",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.status === "University" ? "University Project" : project.status}
                  </span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target rounded-lg transition-all duration-200 active:opacity-80"
                    style={{
                      background: "rgba(5,13,26,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(8px)",
                    }}
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github size={14} />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="touch-target rounded-lg transition-all duration-200 active:opacity-80"
                      style={{
                        background: "rgba(5,13,26,0.8)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(8px)",
                      }}
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card-body p-4 sm:p-6 overflow-visible">
                <div className={project.featured ? "grid lg:grid-cols-2 lg:gap-8 gap-6" : ""}>
                  <div>
                  <h3 className="project-title text-white">
                    {project.title}
                  </h3>
                  <div className="project-networks">
                    {project.networks.map((network) => (
                      <span
                        key={network}
                        className="project-network-badge"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(255,255,255,0.65)",
                        }}
                      >
                        {network}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    {expanded === project.id || project.description.length < 200
                      ? project.description
                      : project.description.slice(0, 180) + "..."}
                  </p>
                  {project.description.length >= 200 && (
                    <button
                      onClick={() =>
                        setExpanded(expanded === project.id ? null : project.id)
                      }
                      className="flex items-center gap-1 text-xs mb-4 touch-target min-h-[44px] px-1 -ml-1"
                      style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {expanded === project.id ? "Show less" : "Read more"}
                      <ChevronRight
                        size={12}
                        style={{
                          transform: expanded === project.id ? "rotate(90deg)" : "none",
                        }}
                      />
                    </button>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span key={tag} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="skill-badge">+{project.tags.length - 6}</span>
                    )}
                  </div>
                </div>

                {project.featured && project.highlights.length > 0 && (
                  <div>
                    <p
                      className="text-xs mb-3 tracking-widest"
                      style={{
                        color: project.accentColor,
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      Key Highlights
                    </p>
                    <ul className="space-y-3">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm"
                          style={{
                            color: "rgba(255,255,255,0.7)",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                            style={{
                              background: `${project.accentColor}15`,
                              color: project.accentColor,
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {i + 1}
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
