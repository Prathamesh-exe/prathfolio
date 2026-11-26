import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "varroc-connect",
    companyName: "Varroc Connect, Pune",
    positions: [
      {
        id: "varroc-jr-software-engineer",
        title: "Jr. Software Engineer",
        employmentPeriod: {
          start: "07.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Wrote multiple ETL pipelines with query and throughput optimizations
- Built a federated query engine from scratch that queries multiple databases, from RDBMS to time-series stores
- Added an AI agent on top of the federated query engine
- Wrote an MCP server exposing the engine and agent to LLM clients
- Set up Docker-based deployment pipelines with Harbor as the container registry`,
        skills: [
          "ETL",
          "Federated Query Engine",
          "RDBMS",
          "Time-Series Databases",
          "AI Agents",
          "MCP",
          "Docker",
          "Harbor",
          "CI/CD",
        ],
        isExpanded: true,
      },
      {
        id: "varroc-sde-intern",
        title: "Software Development Intern",
        employmentPeriod: {
          start: "07.2025",
          end: "07.2026",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Enhanced driving-behavior scoring algorithm with weighted parabolic model
- Implemented VictoriaMetrics time-series DB for IoT manufacturing analytics (0.1s query latency)
- Built real-time Grafana dashboards for production monitoring and anomaly detection
- Developed downtime tracking and config management dashboards (Svelte + Node.js)
- Integrated e-commerce marketplace with loyalty points system`,
        skills: [
          "Grafana",
          "VictoriaMetrics",
          "MongoDB",
          "Svelte",
          "Node.js",
          "E-commerce",
          "Algorithm Development",
          "Dashboard Development",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "vit-pune",
        title: "Vishwakarma Institute of Technology, Pune",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        icon: "education",
        description: `B.TECH (Artificial Intelligence and Data Science)
CGPA: 8.79/10`,
        skills: [
          "Artificial Intelligence",
          "Machine Learning",
          "Python",
          "Java",
          "Algorithms",
        ],
        isExpanded: true,
      },
      {
        id: "novel-college",
        title: "Novel Junior College of Science and Commerce, Pune",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        icon: "education",
        description: `HSC (Class XII)
Percentage: 88%`,
        skills: ["Science", "Mathematics"],
        isExpanded: true,
      },
      {
        id: "sterling-school",
        title: "NCRD's Sterling High School, Pune",
        employmentPeriod: {
          start: "2010",
          end: "2020",
        },
        icon: "education",
        description: `SSC (Class X)
Percentage: 96%`,
        skills: ["Academic Excellence"],
        isExpanded: true,
      },
    ],
  },
]
