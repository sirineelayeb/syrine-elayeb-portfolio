export interface ExperienceItem {
  key: "quetraTechHaulTrack" | "quetraTechRoboHealth" | "leaderPos";

  company: string;
  role: string;
  period: string;
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    key: "quetraTechHaulTrack",

    company: "QuetraTech",
    role: "Full-Stack Engineer Intern",
    period: "Feb 2026 – Jun 2026",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "MQTT",
      "YOLOv8",
      "EasyOCR",
    ],
  },

  {
    key: "quetraTechRoboHealth",

    company: "QuetraTech",
    role: "Full-Stack Developer Intern",
    period: "Jan 2026 – Feb 2026",

    technologies: [
      "React",
      "Node.js",
      "MQTT",
      "Docker",
      "Python",
      "XGBoost",
    ],
  },

  {
    key: "leaderPos",

    company: "LeaderPos",
    role: "Full-Stack Developer Intern",
    period: "Feb 2024 – May 2024",

    technologies: [
      "Angular",
      "Spring Boot",
      "Java",
      "MySQL",
    ],
  },
];
