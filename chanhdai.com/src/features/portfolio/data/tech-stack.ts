import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  
  // Frameworks & Libraries
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Framework"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Framework"],
  },
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    categories: ["Framework"],
  },
  {
    key: "svelte",
    title: "Svelte",
    href: "https://svelte.dev/",
    categories: ["Framework"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  
  // Databases
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "victoriametrics",
    title: "VictoriaMetrics",
    href: "https://victoriametrics.com/",
    categories: ["Database", "Time Series"],
  },
  
  // Message Queues & Tools
  {
    key: "kafka",
    title: "Apache Kafka",
    href: "https://kafka.apache.org/",
    categories: ["Message Queue", "Tools"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Tools", "Containerization"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Version Control"],
    theme: true,
  },
  {
    key: "linux",
    title: "Linux",
    href: "https://www.linux.org/",
    categories: ["Tools", "OS"],
  },
  {
    key: "grafana",
    title: "Grafana",
    href: "https://grafana.com/",
    categories: ["Tools", "Observability"],
  },
  
  // AI/ML
  {
    key: "tensorflow",
    title: "TensorFlow",
    href: "https://www.tensorflow.org/",
    categories: ["AI", "Machine Learning"],
  },
  {
    key: "transformers",
    title: "Transformers",
    href: "https://huggingface.co/docs/transformers/",
    categories: ["AI", "Machine Learning"],
  },
  {
    key: "langchain",
    title: "LangChain",
    href: "https://www.langchain.com/",
    categories: ["AI", "LLM"],
  },
  {
    key: "openai",
    title: "OpenAI",
    href: "https://openai.com/",
    categories: ["AI", "LLM"],
  },
  {
    key: "huggingface",
    title: "Hugging Face",
    href: "https://huggingface.co/",
    categories: ["AI", "ML Platform"],
  },
]
