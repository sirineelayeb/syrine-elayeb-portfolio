import type { Translation } from "./types";

export const en: Translation = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },

  actions: {
    linkedin: "LinkedIn",
    downloadCV: "CV",
    letsTalk: "Let's talk",
    viewWork: "View my work",
  },

  language: "Language",

  hero: {

    label: "Full-Stack Developer",



    title: "I build modern web applications that solve real problems.",



    description:

      "I'm Syrine Elayeb, a Full-Stack Developer focused on building scalable applications with React, Node.js, NestJS, and modern backend technologies, with a strong interest in AI and IoT.",



    roles: [

      "Full-Stack Developer",

      "Full-Stack AI Engineer",

      "IoT Software Engineer",

    ],
  },
  about: {
  label: "About me",
  title: "Hi, I'm Syrine.",

  paragraphs: [
    "I'm a Full-Stack Developer with a Master's degree in Internet of Things, passionate about building practical and reliable digital products.",

    "I work across the frontend and backend, with experience in React, Next.js, Node.js, NestJS, Spring Boot, and modern databases. I enjoy turning ideas into clean, maintainable applications.",

    "I'm also interested in AI and IoT, especially where they can be combined with software engineering to solve real-world problems.",
  ],

  facts: {
    focus: "Focus",
    focusValue: "Full-Stack Development",

    interests: "Interests",
    interestsValue: "AI · IoT · Backend",

    basedIn: "Based in",
    basedInValue: "Tunisia",
  },
  },
  skills: {
    label: "Skills",
    title: "Technologies I use to",
    titleHighlight: "build products.",

    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      aiIot: "AI & IoT",
      toolsDevops: "Tools & DevOps",
    },

    approachLabel: "My approach",
    approachTitle: "Full-Stack development with",
    approachHighlight: "curiosity beyond the stack.",
    approachDescription:
      "I enjoy working across the entire application lifecycle — from designing interfaces and APIs to working with data, automation, AI, and connected systems.",

    tags: {
      fullStack: "Full-Stack",
      ai: "AI",
      iot: "IoT",
    },
  },
  projects: {
    label: "Projects",

    title: "Selected work and",
    titleHighlight: "technical projects.",

    description:
      "A selection of applications and systems I've built across full-stack development, AI, and IoT.",

    closingDescription:
      "I enjoy turning real-world problems into practical software, combining thoughtful interfaces with reliable backend systems, data, AI, and connected technologies.",

    backToProjects: "Back to projects",

    actions: {
      viewProject: "View project",
      watchDemo: "Watch demo",
      viewApp: "View App",
    },

    sections: {
      overview: "Overview",
      about: "About the project",

      features: "Features",
      featuresTitle: "What I built.",

      challenges: "Challenges",
      challengesTitle: "Problems I solved.",
      challengesDescription:
        "Some of the technical challenges involved in building",

      problem: "The problem",
      approach: "My approach",

      screenshots: {
        label: "Project Screens",
        title: "A closer look at the project.",
        description:
          "Explore some of the key screens and interfaces of the project.",
      },
    },

    items: {
      nawat: {
        title: "Nawat",

        shortDescription:
          "A wedding management platform designed to help couples plan and manage their wedding while providing an interactive experience for guests.",

        description:
          "Nawat is a full-stack wedding management platform currently under development. It aims to centralize wedding planning for couples while providing guests with a simple and interactive experience. The platform covers key aspects of wedding organization, including guests, digital invitations, wishlist management, tasks, events, QR sharing, and notifications. This portfolio showcase focuses on the admin interface and the implemented application architecture.",

        category: "Full-Stack",

        features: [
          {
            title: "Wedding Management",
            description:
              "Manage wedding information, planning details, and the overall wedding configuration from a centralized interface.",
          },
          {
            title: "Guest Management",
            description:
              "Add, organize, search, filter, and manage wedding guests and their information.",
          },
          {
            title: "Digital Invitations",
            description:
              "Create and manage digital wedding invitations using customizable templates or uploaded designs.",
          },
          {
            title: "Wishlist & Gifts",
            description:
              "Create wedding wishlists with gift items, categories, prices, links, colors, and availability information.",
          },
          {
            title: "Wedding Tasks",
            description:
              "Organize wedding preparations with tasks, priorities, statuses, assignments, and progress tracking.",
          },
          {
            title: "Events",
            description:
              "Create and manage wedding-related events with details such as date, time, location, and event information.",
          },
          {
            title: "QR Sharing",
            description:
              "Use QR codes to provide guests with quick access to wedding-related information and experiences.",
          },
          {
            title: "Notifications",
            description:
              "Provide notifications to keep users informed about relevant wedding activities and updates.",
          },
        ],

        challenges: [
          {
            title: "Managing Multiple User Roles",
            problem:
              "The platform needs to support different user types, including couples and guests, with different permissions and responsibilities.",
            solution:
              "I designed the application around role-based access and separated the different user experiences while keeping the backend architecture centralized.",
          },
          {
            title: "Designing a Growing Backend",
            problem:
              "The application contains several interconnected features such as weddings, guests, invitations, wishlist items, tasks, events, and notifications.",
            solution:
              "I structured the NestJS backend into modular domains and used Prisma with PostgreSQL to maintain clear relationships between the different entities.",
          },
          {
            title: "Real-Time Notifications",
            problem:
              "Users need to receive relevant updates without constantly refreshing the application.",
            solution:
              "I integrated real-time communication for notifications and combined it with backend notification management to provide a more responsive user experience.",
          },
        ],

        screenshots: [
          {
            title: "Nawat Dashboard",
            description:
              "Centralized dashboard providing couples with an overview of their wedding planning progress and key information.",
          },
        ],
      },

      haultrack: {
        title: "HaulTrack",

        shortDescription:
          "An intelligent fleet management platform combining real-time GPS tracking, vehicle telemetry, and AI-powered data processing.",

        description:
          "HaulTrack is an intelligent fleet management platform designed to monitor vehicles in real time and process both telemetry and visual data. The system combines a Node.js and Express backend with MongoDB, Redis, MQTT, and computer vision technologies to provide real-time fleet monitoring, vehicle detection, and license plate recognition.",

        category: "Full-Stack · AI · IoT",

        features: [
          {
            title: "Real-Time GPS Tracking",
            description:
              "Track vehicle locations in real time and provide fleet operators with up-to-date positioning information.",
          },
          {
            title: "Telemetry Processing",
            description:
              "Receive and process vehicle telemetry data to monitor important operational information.",
          },
          {
            title: "Redis GPS Caching",
            description:
              "Use Redis to efficiently cache live GPS data and improve access to frequently updated vehicle positions.",
          },
          {
            title: "AI Vehicle Detection",
            description:
              "Use YOLOv8 to detect vehicles from visual data and support automated fleet analysis.",
          },
          {
            title: "License Plate Recognition",
            description:
              "Combine computer vision with EasyOCR to identify and process vehicle license plate information.",
          },
          {
            title: "Fleet Management",
            description:
              "Provide a centralized interface for monitoring vehicles and managing fleet-related information.",
          },
        ],

        challenges: [
          {
            title: "Processing Real-Time GPS Data",
            problem:
              "Vehicle locations continuously change and need to be processed efficiently without putting unnecessary load on the main database.",
            solution:
              "I used Redis as a fast caching layer for live GPS telemetry while keeping persistent information in MongoDB.",
          },
          {
            title: "Handling Telemetry Communication",
            problem:
              "Vehicles continuously transmit telemetry data that needs to be received and processed reliably.",
            solution:
              "I used MQTT as the communication protocol for telemetry and integrated the incoming data into the backend processing pipeline.",
          },
          {
            title: "Computer Vision Processing",
            problem:
              "Vehicle images require automated detection and license plate extraction before the information can be used by the fleet platform.",
            solution:
              "I integrated YOLOv8 for vehicle detection and EasyOCR for license plate recognition as part of the data processing workflow.",
          },
          {
            title: "Combining Multiple Data Sources",
            problem:
              "The platform needs to combine GPS information, telemetry, vehicle data, and computer vision results into a coherent system.",
            solution:
              "I designed the backend architecture to process the different data streams independently while connecting them through the central fleet management system.",
          },
        ],

        screenshots: [
          {
            title: "HaulTrack Dashboard",
            description:
              "Fleet management interface providing an overview of vehicles, tracking information, and operational data.",
          },
        ],
      },

      aiRobotHealth: {
        title: "AI-Based Robot Health Monitoring",

        shortDescription:
          "A real-time robot health monitoring platform combining IoT telemetry, MQTT communication, and AI-based anomaly detection.",

        description:
          "This project is a full-stack IoT and AI platform designed to monitor robot health in real time and detect abnormal behavior or potential failures. The system collects telemetry through MQTT, processes data using backend services, applies rule-based and XGBoost-based anomaly detection, and presents real-time information through dashboards and alerts.",

        category: "AI & IoT",

        features: [
          {
            title: "Real-Time Robot Monitoring",
            description:
              "Monitor robot health and operational telemetry through real-time dashboards.",
          },
          {
            title: "AI Anomaly Detection",
            description:
              "Use machine learning models to identify abnormal robot behavior and potential failures.",
          },
          {
            title: "Rule-Based Detection",
            description:
              "Apply predefined thresholds and business rules to detect critical conditions alongside machine learning predictions.",
          },
          {
            title: "MQTT Telemetry",
            description:
              "Collect robot telemetry through MQTT and process incoming data in the backend.",
          },
          {
            title: "Real-Time Alerts",
            description:
              "Notify maintenance teams when abnormal conditions or potential failures are detected.",
          },
          {
            title: "Role-Based Dashboards",
            description:
              "Provide different dashboards and access levels depending on the user's role.",
          },
          {
            title: "Telemetry Analytics",
            description:
              "Analyze historical and real-time telemetry data to help identify robot health trends.",
          },
          {
            title: "Dockerized Architecture",
            description:
              "Containerize the different application services to simplify deployment and environment management.",
          },
        ],

        challenges: [
          {
            title: "Real-Time Telemetry Processing",
            problem:
              "Robot telemetry needs to be collected and processed continuously while keeping the monitoring dashboard responsive.",
            solution:
              "I used MQTT for telemetry communication and real-time communication technologies to deliver processed information to the frontend.",
          },
          {
            title: "AI-Based Anomaly Detection",
            problem:
              "Detecting abnormal robot behavior requires identifying patterns that may not always be covered by simple threshold-based rules.",
            solution:
              "I integrated an XGBoost-based machine learning approach alongside traditional rule-based detection to identify potential anomalies.",
          },
          {
            title: "End-to-End IoT Architecture",
            problem:
              "The system needs to connect physical robot telemetry, backend processing, machine learning, real-time communication, and frontend visualization.",
            solution:
              "I designed an end-to-end architecture connecting MQTT telemetry ingestion, backend processing, AI analysis, real-time events, and monitoring dashboards.",
          },
        ],

        screenshots: [
          {
            title: "Admin Dashboard",
            description:
              "Centralized dashboard for monitoring robot health, telemetry, alerts, and overall system activity.",
          },
          {
            title: "Engineer Management",
            description:
              "Management interface for maintenance engineers and their access to the robot monitoring platform.",
          },
        ],
      },

      elearning: {
        title: "E-Learning Platform",

        shortDescription:
          "A web-based learning platform built with Angular and Spring Boot for managing educational content and users.",

        description:
          "This project is a full-stack e-learning platform developed with Angular on the frontend and Spring Boot on the backend. The application provides a structured environment for managing users, educational content, and courses while demonstrating the integration of a modern frontend with a Java-based REST API.",

        category: "Full-Stack",

        features: [
          {
            title: "Course Management",
            description:
              "Create and manage courses and organize educational content within the platform.",
          },
          {
            title: "User Management",
            description:
              "Manage platform users and their access to the learning environment.",
          },
          {
            title: "Learning Content",
            description:
              "Provide a structured environment for organizing and accessing educational resources.",
          },
          {
            title: "Angular Frontend",
            description:
              "Build a responsive frontend application using Angular and TypeScript.",
          },
          {
            title: "REST API",
            description:
              "Expose backend functionality through a Spring Boot REST API connected to the application database.",
          },
        ],

        challenges: [
          {
            title: "Frontend-Backend Integration",
            problem:
              "The Angular frontend needs to communicate reliably with the Spring Boot backend while handling application data and user interactions.",
            solution:
              "I implemented a REST-based communication layer between Angular and Spring Boot to keep the frontend and backend responsibilities clearly separated.",
          },
          {
            title: "Managing Educational Data",
            problem:
              "Courses, users, and learning content create relationships that need to be stored and retrieved consistently.",
            solution:
              "I used MySQL with the Spring Boot backend to structure and manage the application's educational data.",
          },
          {
            title: "Building a Maintainable Frontend",
            problem:
              "As the number of screens and features grows, frontend code can become difficult to maintain.",
            solution:
              "I structured the Angular application into reusable components and organized the frontend around clear feature responsibilities.",
          },
        ],

        screenshots: [],
      },
    },
  },
  contact: {

    label: "Contact",

    title: "Let's build something",

    titleHighlight: "useful.",



    availability: "Open to new opportunities",



    getInTouch: "Get in touch",

    opportunityTitle: "Have an idea or opportunity?",



    opportunityDescription:

      "Whether you're looking for a Full-Stack Developer, building a web application, or exploring an AI-focused project, feel free to reach out.",



    opportunityDescriptionSecond:

      "I'm always interested in discussing new projects, collaborations, and interesting technical challenges.",



    contactMe: "Contact me",



    email: "Email",

    whatsapp: "WhatsApp",

    github: "GitHub",

    linkedin: "LinkedIn",



    messageMe: "Message me",



    bottomStatement: "Building products, solving problems, and always",

    bottomHighlight: "learning something new.",

  },
  footer: {
  rights: "All rights reserved.",
  github: "GitHub profile",
  linkedin: "LinkedIn profile",
  email: "Email Syrine Elayeb",
},
experience: {

  label: "Experience",



  title: "Where I've",

  titleHighlight: "built and learned.",



  description:

    "My professional experience has given me the opportunity to work across frontend, backend, databases, real-time systems, AI, and IoT.",



  items: [

    {

      key: "quetraTechHaulTrack",

      description:

        "Worked on HaulTrack, an intelligent fleet management platform for real-time vehicle tracking, telemetry processing, and AI-powered data analysis.",

    },

    {

      key: "quetraTechRoboHealth",

      description:

        "Developed RoboHealth, an AI-based robot health monitoring platform for predictive maintenance. Built and evaluated an XGBoost anomaly detection model using industrial robot telemetry.",

    },

    {

      key: "leaderPos",

      description:

        "Developed an e-learning platform with a modern Angular frontend and Spring Boot backend for managing educational content and users.",

    },

  ],



  highlight: {

    label: "Growing through experience",

    description:

      "From building web platforms to working with real-time systems, AI, and IoT, each experience has expanded the way I approach software engineering.",

    fullStack: "Full-Stack",

    aiIot: "AI & IoT",

  },

},
};