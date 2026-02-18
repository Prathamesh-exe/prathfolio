import type { User } from "@/features/portfolio/types/user"

export const USER = {
  firstName: "Prathamesh",
  lastName: "Medage",
  displayName: "Prathamesh Medage",
  username: "prathamesh",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Full Stack Developer | AI Enthusiast",
    "Building with Java, Python & FastAPI",
    "Crafting AI-Powered Solutions",
    "Node.js & Next.js Developer",
    "Data Science & Machine Learning",
    "Svelte | React | Modern Web",
  ],
  address: "Pune, Maharashtra, India",
  phoneNumber: "KzkxNzk3MjI1NDM2NQ==", // E.164 format, base64 encoded
  email: "cHJhdGhhbWVzaG1lZGFnZTdAZ21haWwuY29t", // base64 encoded
  website: "https://prathameshtech.in",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Software Developer Intern",
      company: "Varroc Connect",
      website: "https://varrocconnect.com/",
    },
  ],
  about: `
- **Full Stack Developer** passionate about building modern web applications.
- Skilled in **Java**, **Python**, **Node.js**, **FastAPI**, and **Next.js**.
- Experience with **AI/GenAI**: Working with **LLMs**, **Transformers**, **RAG**, **Agentic AI**, and **MCP**.
- Building scalable applications with **databases** (MySQL, MongoDB, PostgreSQL, VictoriaMetrics) and **message queues** (Kafka).
- Always learning and exploring new technologies in **AI**, **Data Science**, and **Full Stack Development**.
`,
  avatar: "/profile.png", // TODO: Replace with your profile image
  ogImage: "/og-image.png", // TODO: Create your OG image
  timeZone: "Asia/Kolkata",
  keywords: [
    "prathamesh",
    "prathamesh medage",
    "medage",
    "developer",
    "full stack",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
} satisfies User
