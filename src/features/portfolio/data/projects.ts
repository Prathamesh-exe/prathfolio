import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "custom-language-interpreter",
    title: "Custom Language & Interpreter",
    period: {
      start: "05.2026",
      end: "06.2026",
    },
    link: "https://github.com/Prathamesh-exe/crafting-interpreter",
    skills: [
      "Java",
      "Compilers",
      "Interpreters",
      "Lexer",
      "Recursive-Descent Parser",
      "AST",
      "Visitor Pattern",
      "Static Analysis",
    ],
    description: `- Built a dynamically typed programming language and tree-walk interpreter from scratch in Java
- Implemented the full pipeline: scanner, recursive-descent parser, AST, resolver for static scope analysis, and interpreter
- Supports closures, classes, inheritance, control flow and runtime error reporting
- Executes programs by walking the AST instead of compiling to bytecode, with a REPL and file runner`,
    isExpanded: true,
  },
  {
    id: "proxy-server",
    title: "Multithreaded Proxy Server with LRU Cache",
    period: {
      start: "2025",
      end: "2025",
    },
    link: "https://github.com/Prathamesh-exe/Proxy-Server-Impl",
    skills: [
      "Java",
      "Multithreading",
      "LRU Cache",
      "HashMap",
      "LinkedList",
      "Thread Pools",
      "Semaphores",
      "HTTP",
    ],
    description: `- Built multithreaded HTTP proxy server in Java to handle concurrent client requests
- Implemented LRU cache using HashMap and LinkedList for fast page retrieval
- Utilized thread pools and semaphores for controlled concurrency and efficient resource management`,
    isExpanded: true,
  },
  {
    id: "bi-dashboard",
    title: "Real-Time BI Dashboard",
    period: {
      start: "2025",
      end: "2025",
    },
    link: "https://github.com/Prathamesh-exe/openInsights",
    skills: [
      "Power BI REST API",
      "WebSockets",
      "Node.js",
      "Apache ECharts",
      "Real-time Analytics",
      "Team Leadership",
    ],
    description: `- Lead team to build open-source Power BI alternative with interactive analytics using Power BI REST API
- Implemented WebSockets for real-time data updates and responsive dashboards
- Developed data processing backend with Node.js
- Created interactive visualizations using Apache ECharts`,
    isExpanded: true,
  },
]
