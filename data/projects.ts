export type ProjectKey =

  | "nawat"

  | "haultrack"

  | "aiRobotHealth"

  | "elearning";



export interface Project {

  slug: string;

  key: ProjectKey;



  category: string;

  technologies: string[];



  featured: boolean;



  github?: string;

  demo?: string;

  demoLabel?: string;

  image?: string;

  video?: string;



  screenshots?: {

    src: string;

  }[];

}
export const projects: Project[] = [
  {
    slug: "nawat",
    key: "nawat",
    category: "Full-Stack",
    technologies: [
      "React Native",
      "Expo",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
    image: "/images/projects/nawat/nawat-dashboard.png",
    featured: true,
  },

  {
    slug: "haultrack",
    key: "haultrack",
    category: "Full-Stack · AI · IoT",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "MQTT",
      "YOLOv8",
      "EasyOCR",
    ],
    image: "/images/projects/haultrack/haultrack.png",
    demo: "https://fleet-management-frontend-ebon.vercel.app/login",
    demoLabel: "View App",
    video:
      "https://drive.google.com/file/d/19ouWj-QKd9vGoYsW1U8h2x-EBHpxukT0/view?usp=sharing",
    featured: true,
  },

  {
    slug: "ai-robot-health-monitoring",
    key: "aiRobotHealth",
    category: "AI & IoT",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "XGBoost",
      "scikit-learn",
      "MQTT",
      "Socket.io",
      "Docker",
    ],
    image:
      "/images/projects/ai-robot-health-monitoring/alerts-maintenance-engineer.png",
    screenshots: [
      {
        src: "/images/projects/ai-robot-health-monitoring/admin-dashboard.png",
      },
      {
        src: "/images/projects/ai-robot-health-monitoring/engineer-management.png",
      },
    ],
    github: "sirineelayeb/ai-robot-health-monitoring",
    featured: true,
  },

  {
    slug: "elearning-platform",
    key: "elearning",
    category: "Full-Stack",
    technologies: ["Angular", "Spring Boot", "MySQL", "Java"],
    github:
      "sirineelayeb/E-Learning-Platform-Project.git",
    featured: true,
  },
];