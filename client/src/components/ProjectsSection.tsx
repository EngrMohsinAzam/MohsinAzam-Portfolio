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

const BACKEND_IMG = "/projects/fundraising-dapp.jpg";

const GITHUB_PROFILE = "https://github.com/EngrMohsinAzam";

const projects = [
  {
    id: 1,
    title: "DigiPort KYC — SaaS Identity Verification Platform",
    category: "KYC Platform",
    description:
      "A blockchain-powered SaaS KYC platform for secure identity verification and compliance management. Features Solidity smart contracts for KYC workflows, Golang backend APIs, AI document verification, RBAC, wallet integration, and hybrid on-chain/off-chain architecture — live at Omnisoft Lahore.",
    image: KYC_IMG,
    featured: true,
    tags: ["Golang", "Solidity", "SaaS", "KYC", "RBAC", "AI Verification", "React.js"],
    highlights: [
      "Blockchain-powered SaaS KYC platform with secure identity verification and compliance",
      "Solidity smart contracts for KYC record management and platform fee handling",
      "Golang backend APIs supporting multi-company onboarding and KYC lifecycle",
      "AI-based document verification and fraud detection for automated validation",
      "Hybrid architecture combining on-chain transparency with off-chain verification",
      "Live production deployment at digiportid.com",
    ],
    github: GITHUB_PROFILE,
    live: "https://www.digiportid.com/",
    networks: ["Ethereum", "EVM"],
    status: "Live" as const,
    accentColor: "#00D4FF",
  },
  {
    id: 2,
    title: "MultX Bridge — Cross-Chain Token Transfer Platform",
    category: "Cross-Chain Bridge",
    description:
      "A cross-chain token bridge enabling secure asset transfers between Ethereum and BNB Chain. Built with Solidity contracts for locking, minting, burning, and release — plus validator/relayer verification, MetaMask integration, and OpenZeppelin-secured workflows.",
    image: BRIDGE_IMG,
    featured: false,
    tags: ["Solidity", "Cross-Chain", "Hardhat", "OpenZeppelin", "Ethers.js", "Ethereum", "BNB Chain"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "https://multxdev.litho.ai/",
    networks: ["Ethereum", "BNB Chain"],
    status: "Live" as const,
    accentColor: "#00D4FF",
  },
  {
    id: 3,
    title: "CryptoForexBridge (CFX) — Forex Tokenization Platform",
    category: "DeFi Protocol",
    description:
      "A decentralized forex tokenization platform on XRPL EVM. Solidity smart contracts enable stablecoin deposits and ERC1155 tokenized forex pairs with vault, minting, redemption, and oracle-based pricing for secure financial workflows.",
    image: DEFI_IMG,
    featured: false,
    tags: ["Solidity", "DeFi", "ERC1155", "Tokenization", "XRPL EVM", "Oracles", "Hardhat"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "https://explorer.xrplevm.org/address/0x30C89cfae115d65f309A63f8D18Ad4eC6708F2F9",
    networks: ["XRPL EVM"],
    status: "Mainnet" as const,
    accentColor: "#F4C430",
  },
  {
    id: 4,
    title: "Decentralized Supply Chain Tracker",
    category: "Supply Chain / Web3",
    description:
      "A blockchain-based supply chain management platform for transparent, secure, and tamper-proof product lifecycle tracking. Features Solidity contracts for registration and ownership transfer, React.js dashboard with MetaMask, and RBAC for secure operations.",
    image: SUPPLY_IMG,
    featured: false,
    tags: ["Solidity", "Supply Chain", "React.js", "MetaMask", "RBAC", "Ethers.js"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "#",
    networks: ["Ethereum"],
    status: "University" as const,
    accentColor: "#F4C430",
  },
  {
    id: 5,
    title: "Olwist Token — Advanced ERC20",
    category: "Token / Smart Contracts",
    description:
      "An advanced ERC20 token with minting, pausing, blacklisting, expiry management, and upgradeable smart contract functionalities. Built with OpenZeppelin standards, extensive Hardhat testing, and optimized for security, scalability, and ecosystem growth.",
    image: STAKING_IMG,
    featured: false,
    tags: ["Solidity", "ERC-20", "OpenZeppelin", "Upgradeable", "Hardhat", "Ethers.js"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "#",
    networks: ["Ethereum"],
    status: "Personal" as const,
    accentColor: "#00D4FF",
  },
  {
    id: 6,
    title: "Go URL Shortener — REST API Service",
    category: "Backend / Go",
    description:
      "A high-performance URL shortener built in Go for hands-on backend learning. Features REST API endpoints for shortening and redirecting URLs, custom short-code generation, PostgreSQL persistence, caching layer, and clean service-oriented architecture — demonstrating production-ready Golang patterns valued in KSA enterprise teams.",
    image: BACKEND_IMG,
    featured: false,
    tags: ["Golang", "REST APIs", "PostgreSQL", "Microservices", "Redis", "Docker"],
    highlights: [],
    github: GITHUB_PROFILE,
    live: "#",
    networks: ["Backend"],
    status: "Learning" as const,
    accentColor: "#00D4FF",
  },
];

const statusColors = {
  Live: "#00D4FF",
  Mainnet: "#F4C430",
  University: "#A78BFA",
  Personal: "#94A3B8",
  Learning: "#34D399",
} as const;

type FilterType =
  | "All"
  | "DeFi Protocol"
  | "KYC Platform"
  | "Cross-Chain Bridge"
  | "Supply Chain / Web3"
  | "Token / Smart Contracts"
  | "Backend / Go";

const filters: FilterType[] = [
  "All",
  "DeFi Protocol",
  "KYC Platform",
  "Cross-Chain Bridge",
  "Supply Chain / Web3",
  "Token / Smart Contracts",
  "Backend / Go",
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
            Production projects spanning SaaS KYC platforms, Golang backends, cross-chain bridges,
            forex tokenization, and smart contracts — plus hands-on Go microservices learning,
            aligned with in-demand backend and blockchain roles across KSA.
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
                    {project.status === "University"
                      ? "University Project"
                      : project.status === "Learning"
                        ? "Learning Project"
                        : project.status}
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
