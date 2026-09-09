export interface SkillGroup {
  number: string;
  key: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    key: "frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },

  {
    number: "02",
    key: "backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Spring Boot",
      "FastAPI",
    ],
  },

  {
    number: "03",
    key: "databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Prisma",
    ],
  },

  {
    number: "04",
    key: "aiIot",
    skills: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "YOLOv8",
      "MQTT",
      "EasyOCR",
    ],
  },

  {
    number: "05",
    key: "toolsDevops",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Postman",
      "Playwright",
      "Vite",
    ],
  },
];