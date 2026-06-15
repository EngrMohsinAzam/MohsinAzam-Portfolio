/* ============================================================
   DESIGN: Deep Ocean Protocol — Skills Section
   ============================================================ */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Backend Development",
    color: "#00D4FF",
    icon: "⬡",
    skills: [
      { name: "Golang", level: 88 },
      { name: "REST APIs & API Development", level: 90 },
      { name: "gRPC", level: 82 },
      { name: "Microservices", level: 85 },
      { name: "PostgreSQL & MongoDB", level: 80 },
    ],
  },
  {
    title: "Blockchain & Smart Contracts",
    color: "#F4C430",
    icon: "◈",
    skills: [
      { name: "Solidity & Smart Contracts", level: 90 },
      { name: "Ethereum & Web3", level: 88 },
      { name: "DeFi & Tokenization", level: 88 },
      { name: "Cross-Chain & dApps", level: 85 },
      { name: "Smart Contract Security", level: 82 },
    ],
  },
  {
    title: "Frontend & Web3 Integration",
    color: "#00D4FF",
    icon: "◇",
    skills: [
      { name: "React.js & JavaScript", level: 85 },
      { name: "Ethers.js", level: 88 },
      { name: "Wallet Integration", level: 88 },
      { name: "Hardhat & Foundry", level: 90 },
      { name: "OpenZeppelin & Chainlink", level: 88 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#F4C430",
    icon: "◉",
    skills: [
      { name: "Docker & Kubernetes", level: 78 },
      { name: "GitHub & DevOps", level: 85 },
      { name: "Truffle & Remix IDE", level: 82 },
      { name: "Security Audits", level: 80 },
      { name: "Hardhat Testing", level: 90 },
    ],
  },
];

const techBadges = [
  "Golang",
  "REST APIs",
  "gRPC",
  "Microservices",
  "Solidity",
  "Ethereum",
  "Web3",
  "DeFi",
  "Tokenization",
  "Cross-Chain",
  "dApps",
  "React.js",
  "JavaScript",
  "Ethers.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "Hardhat",
  "Foundry",
  "Truffle",
  "Remix IDE",
  "OpenZeppelin",
  "Chainlink",
  "Smart Contracts",
  "Security Audits",
  "GitHub",
  "MetaMask",
  "ERC-20",
  "ERC-1155",
];

function SkillCard({ cat, index }: { cat: (typeof skillCategories)[0]; index: number }) {
  const { ref, visible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className="glass-card hero-card-3d rounded-2xl p-6 project-card transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl" style={{ color: cat.color }}>
          {cat.icon}
        </span>
        <h3
          className="font-bold text-white text-base"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {cat.title}
        </h3>
      </div>
      <div className="space-y-4">
        {cat.skills.map((skill, si) => (
          <div key={si}>
            <div className="flex justify-between items-center mb-1.5">
              <span
                className="text-sm"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                }}
              >
                {skill.name}
              </span>
              <span
                className="text-xs"
                style={{ color: cat.color, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {skill.level}%
              </span>
            </div>
            <div
              className="h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)`,
                  boxShadow: `0 0 8px ${cat.color}40`,
                  transitionDelay: `${index * 0.15 + si * 0.08}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref: badgeRef, visible: badgeVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="skills"
      className="section-pad relative overflow-x-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10 md:mb-16">
          <p
            className="text-xs font-semibold mb-3 tracking-widest"
            style={{ color: "#00D4FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            TECHNICAL EXPERTISE
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">Skills & Stack</h2>
          <div className="teal-line w-16" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <SkillCard key={ci} cat={cat} index={ci} />
          ))}
        </div>

        <div
          ref={badgeRef}
          className="glass-card hero-card-3d rounded-2xl p-5 sm:p-8 transition-all duration-700"
          style={{
            opacity: badgeVisible ? 1 : 0,
            transform: badgeVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p
            className="text-xs mb-6 tracking-widest text-center"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Full Technology Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech, i) => (
              <span
                key={i}
                className="skill-badge transition-all duration-300"
                style={{
                  opacity: badgeVisible ? 1 : 0,
                  transform: badgeVisible ? "scale(1)" : "scale(0.8)",
                  transitionDelay: `${i * 0.03}s`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
