import type { Translation } from "./types";

export const fr: Translation = {
  nav: {
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    contact: "Contact",
  },

  actions: {
    linkedin: "LinkedIn",
    downloadCV: "CV",
    letsTalk: "Discutons",
    viewWork: "Voir mes projets",
  },

  language: "Langue",

  hero: {

    label: "Développeuse Full-Stack",



    title:

      "Je crée des applications web modernes qui répondent à de vrais besoins.",



    description:

      "Je suis Syrine Elayeb, développeuse Full-Stack spécialisée dans la création d'applications évolutives avec React, Node.js, NestJS et des technologies backend modernes, avec un fort intérêt pour l'IA et l'IoT.",



    roles: [

      "Développeuse Full-Stack",

      "Ingénieure Full-Stack en IA",

      "Ingénieure Logiciel IoT",

    ],
  },
  about: {
  label: "À propos de moi",
  title: "Bonjour, je suis Syrine.",

  paragraphs: [
    "Je suis développeuse Full-Stack titulaire d'un Master en Internet des Objets, passionnée par la création de produits numériques pratiques et fiables.",

    "Je travaille aussi bien sur le frontend que sur le backend, avec une expérience en React, Next.js, Node.js, NestJS, Spring Boot et avec différentes bases de données modernes. J'aime transformer les idées en applications propres et maintenables.",

    "Je m'intéresse également à l'IA et à l'IoT, notamment lorsqu'ils peuvent être combinés avec le développement logiciel pour résoudre des problèmes concrets.",
  ],

  facts: {
    focus: "Domaine principal",
    focusValue: "Développement Full-Stack",

    interests: "Intérêts",
    interestsValue: "IA · IoT · Backend",

    basedIn: "Basée en",
    basedInValue: "Tunisie",
  },
  },
  skills: {
    label: "Compétences",
    title: "Les technologies que j'utilise pour",
    titleHighlight: "créer des produits.",

    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de données",
      aiIot: "IA & IoT",
      toolsDevops: "Outils & DevOps",
    },

    approachLabel: "Mon approche",
    approachTitle: "Le développement Full-Stack avec",
    approachHighlight: "une curiosité qui va au-delà de la stack.",
    approachDescription:
      "J'aime intervenir sur l'ensemble du cycle de développement — de la conception des interfaces et des API au travail avec les données, l'automatisation, l'IA et les systèmes connectés.",

    tags: {
      fullStack: "Full-Stack",
      ai: "IA",
      iot: "IoT",
    },
  },
  projects: {
    label: "Projets",

    title: "Une sélection de",
    titleHighlight: "projets techniques.",

    description:
      "Une sélection d'applications et de systèmes que j'ai développés en Full-Stack, en IA et en IoT.",

    closingDescription:
      "J'aime transformer des problèmes réels en solutions logicielles concrètes, en combinant des interfaces réfléchies avec des systèmes backend fiables, les données, l'IA et les technologies connectées.",

    backToProjects: "Retour aux projets",

    actions: {
      viewProject: "Voir le projet",
      watchDemo: "Voir la démonstration",
      viewApp: "Voir l'application",
    },

    sections: {
      overview: "Vue d'ensemble",
      about: "À propos du projet",

      features: "Fonctionnalités",
      featuresTitle: "Ce que j'ai développé.",

      challenges: "Défis",
      challengesTitle: "Les problèmes que j'ai résolus.",
      challengesDescription:
        "Quelques-uns des défis techniques rencontrés lors du développement de",

      problem: "Le problème",
      approach: "Mon approche",

      screenshots: {
        label: "Aperçu du projet",
        title: "Un aperçu plus détaillé du projet.",
        description:
          "Découvrez quelques-unes des interfaces et fonctionnalités clés du projet.",
      },
    },


    items: {
      nawat: {
        title: "Nawat",

        shortDescription:
          "Une plateforme de gestion de mariage conçue pour aider les couples à organiser leur mariage tout en offrant une expérience interactive aux invités.",

        description:
          "Nawat est une plateforme Full-Stack de gestion de mariage actuellement en cours de développement. Elle vise à centraliser l'organisation du mariage pour les couples tout en offrant aux invités une expérience simple et interactive. La plateforme couvre plusieurs aspects essentiels de l'organisation, notamment les invités, les invitations digitales, la gestion de la wishlist, les tâches, les événements, le partage par QR code et les notifications. Cette présentation met principalement en avant l'interface d'administration et l'architecture de l'application déjà mise en place.",

        category: "Full-Stack",

        features: [
          {
            title: "Gestion du mariage",
            description:
              "Gérer les informations du mariage, les détails de préparation et la configuration générale depuis une interface centralisée.",
          },
          {
            title: "Gestion des invités",
            description:
              "Ajouter, organiser, rechercher, filtrer et gérer les invités ainsi que leurs informations.",
          },
          {
            title: "Invitations digitales",
            description:
              "Créer et gérer des invitations de mariage digitales à partir de modèles personnalisables ou de designs importés.",
          },
          {
            title: "Wishlist & cadeaux",
            description:
              "Créer une wishlist avec des cadeaux, des catégories, des prix, des liens, des couleurs et des informations de disponibilité.",
          },
          {
            title: "Tâches du mariage",
            description:
              "Organiser les préparatifs avec des tâches, des priorités, des statuts, des assignations et un suivi de progression.",
          },
          {
            title: "Événements",
            description:
              "Créer et gérer les événements liés au mariage avec leur date, leur heure, leur lieu et leurs informations.",
          },
          {
            title: "Partage par QR code",
            description:
              "Utiliser des QR codes pour permettre aux invités d'accéder rapidement aux informations et fonctionnalités liées au mariage.",
          },
          {
            title: "Notifications",
            description:
              "Informer les utilisateurs des activités et mises à jour importantes liées au mariage.",
          },
        ],

        challenges: [
          {
            title: "Gestion de plusieurs rôles utilisateurs",
            problem:
              "La plateforme doit gérer différents types d'utilisateurs, notamment les couples et les invités, avec des permissions et des responsabilités différentes.",
            solution:
              "J'ai conçu l'application autour d'un système d'accès basé sur les rôles afin de séparer les différentes expériences utilisateurs tout en conservant une architecture backend centralisée.",
          },
          {
            title: "Conception d'un backend évolutif",
            problem:
              "L'application contient plusieurs fonctionnalités interconnectées comme les mariages, les invités, les invitations, les wishlists, les tâches, les événements et les notifications.",
            solution:
              "J'ai structuré le backend NestJS en modules fonctionnels et utilisé Prisma avec PostgreSQL afin de maintenir des relations claires entre les différentes entités.",
          },
          {
            title: "Notifications en temps réel",
            problem:
              "Les utilisateurs doivent recevoir les mises à jour pertinentes sans avoir à actualiser constamment l'application.",
            solution:
              "J'ai intégré une communication en temps réel pour les notifications et l'ai combinée avec une gestion backend dédiée afin d'offrir une expérience plus réactive.",
          },
        ],

        screenshots: [
          {
            title: "Tableau de bord Nawat",
            description:
              "Tableau de bord centralisé permettant aux couples d'avoir une vue d'ensemble de l'organisation de leur mariage et de suivre les informations importantes.",
          },
        ],
      },

      haultrack: {
        title: "HaulTrack",

        shortDescription:
          "Une plateforme intelligente de gestion de flotte combinant le suivi GPS en temps réel, la télémétrie des véhicules et le traitement de données basé sur l'IA.",

        description:
          "HaulTrack est une plateforme intelligente de gestion de flotte conçue pour surveiller les véhicules en temps réel et traiter à la fois les données de télémétrie et les données visuelles. Le système combine un backend Node.js et Express avec MongoDB, Redis, MQTT et des technologies de vision par ordinateur afin de fournir un suivi de flotte en temps réel, la détection des véhicules et la reconnaissance des plaques d'immatriculation.",

        category: "Full-Stack · IA · IoT",

        features: [
          {
            title: "Suivi GPS en temps réel",
            description:
              "Suivre la position des véhicules en temps réel et fournir aux opérateurs des informations actualisées sur leur localisation.",
          },
          {
            title: "Traitement de la télémétrie",
            description:
              "Recevoir et traiter les données de télémétrie des véhicules afin de surveiller les informations opérationnelles importantes.",
          },
          {
            title: "Mise en cache GPS avec Redis",
            description:
              "Utiliser Redis comme couche de cache pour les données GPS en temps réel et améliorer l'accès aux positions fréquemment mises à jour.",
          },
          {
            title: "Détection des véhicules par IA",
            description:
              "Utiliser YOLOv8 pour détecter automatiquement les véhicules à partir de données visuelles.",
          },
          {
            title: "Reconnaissance des plaques",
            description:
              "Combiner la vision par ordinateur avec EasyOCR afin d'identifier et de traiter les informations des plaques d'immatriculation.",
          },
          {
            title: "Gestion de flotte",
            description:
              "Fournir une interface centralisée permettant de surveiller les véhicules et de gérer les informations liées à la flotte.",
          },
        ],

        challenges: [
          {
            title: "Traitement des données GPS en temps réel",
            problem:
              "Les positions des véhicules changent continuellement et doivent être traitées efficacement sans surcharger inutilement la base de données principale.",
            solution:
              "J'ai utilisé Redis comme couche de cache rapide pour les données GPS en temps réel tout en conservant les informations persistantes dans MongoDB.",
          },
          {
            title: "Gestion des communications de télémétrie",
            problem:
              "Les véhicules transmettent continuellement des données de télémétrie qui doivent être reçues et traitées de manière fiable.",
            solution:
              "J'ai utilisé MQTT comme protocole de communication pour la télémétrie et intégré les données reçues dans le pipeline de traitement du backend.",
          },
          {
            title: "Traitement par vision par ordinateur",
            problem:
              "Les images des véhicules nécessitent une détection automatique ainsi qu'une extraction des plaques avant que les informations puissent être exploitées par la plateforme.",
            solution:
              "J'ai intégré YOLOv8 pour la détection des véhicules et EasyOCR pour la reconnaissance des plaques d'immatriculation.",
          },
          {
            title: "Combinaison de plusieurs sources de données",
            problem:
              "La plateforme doit combiner les informations GPS, la télémétrie, les données des véhicules et les résultats de vision par ordinateur dans un système cohérent.",
            solution:
              "J'ai conçu l'architecture backend afin de traiter les différents flux de données indépendamment tout en les reliant au système central de gestion de flotte.",
          },
        ],

        screenshots: [
          {
            title: "Tableau de bord HaulTrack",
            description:
              "Interface de gestion de flotte offrant une vue d'ensemble des véhicules, des informations de suivi et des données opérationnelles.",
          },
        ],
      },

      aiRobotHealth: {
        title: "Surveillance de la santé des robots par IA",

        shortDescription:
          "Une plateforme de surveillance des robots en temps réel combinant la télémétrie IoT, la communication MQTT et la détection d'anomalies basée sur l'IA.",

        description:
          "Ce projet est une plateforme Full-Stack IoT et IA conçue pour surveiller la santé des robots en temps réel et détecter les comportements anormaux ou les défaillances potentielles. Le système collecte les données de télémétrie via MQTT, traite les données avec des services backend, applique une détection basée sur des règles et sur XGBoost, puis présente les informations en temps réel à travers des tableaux de bord et des alertes.",

        category: "IA & IoT",

        features: [
          {
            title: "Surveillance des robots en temps réel",
            description:
              "Surveiller l'état et les données opérationnelles des robots à travers des tableaux de bord en temps réel.",
          },
          {
            title: "Détection d'anomalies par IA",
            description:
              "Utiliser des modèles de machine learning pour identifier les comportements anormaux et les défaillances potentielles.",
          },
          {
            title: "Détection basée sur des règles",
            description:
              "Appliquer des seuils et des règles prédéfinies afin de détecter les conditions critiques en complément des prédictions du modèle.",
          },
          {
            title: "Télémétrie MQTT",
            description:
              "Collecter les données de télémétrie des robots via MQTT et traiter les données entrantes au niveau du backend.",
          },
          {
            title: "Alertes en temps réel",
            description:
              "Notifier les équipes de maintenance lorsqu'une anomalie ou une défaillance potentielle est détectée.",
          },
          {
            title: "Tableaux de bord selon les rôles",
            description:
              "Fournir différents tableaux de bord et niveaux d'accès en fonction du rôle de l'utilisateur.",
          },
          {
            title: "Analyse de la télémétrie",
            description:
              "Analyser les données de télémétrie historiques et en temps réel afin d'identifier les tendances liées à la santé des robots.",
          },
          {
            title: "Architecture Dockerisée",
            description:
              "Conteneuriser les différents services de l'application afin de simplifier le déploiement et la gestion des environnements.",
          },
        ],

        challenges: [
          {
            title: "Traitement de la télémétrie en temps réel",
            problem:
              "Les données de télémétrie des robots doivent être collectées et traitées en continu tout en maintenant une interface de surveillance réactive.",
            solution:
              "J'ai utilisé MQTT pour la communication de télémétrie et des technologies de communication temps réel pour transmettre les informations traitées au frontend.",
          },
          {
            title: "Détection d'anomalies basée sur l'IA",
            problem:
              "La détection des comportements anormaux nécessite d'identifier des modèles qui ne peuvent pas toujours être détectés uniquement avec des seuils prédéfinis.",
            solution:
              "J'ai intégré une approche de machine learning basée sur XGBoost en complément de la détection par règles afin d'identifier les anomalies potentielles.",
          },
          {
            title: "Architecture IoT de bout en bout",
            problem:
              "Le système doit connecter la télémétrie des robots, le traitement backend, le machine learning, la communication en temps réel et la visualisation frontend.",
            solution:
              "J'ai conçu une architecture de bout en bout reliant la collecte MQTT, le traitement backend, l'analyse IA, les événements temps réel et les tableaux de bord de surveillance.",
          },
        ],

        screenshots: [
          {
            title: "Tableau de bord administrateur",
            description:
              "Tableau de bord centralisé permettant de surveiller la santé des robots, la télémétrie, les alertes et l'activité globale du système.",
          },
          {
            title: "Gestion des ingénieurs",
            description:
              "Interface de gestion des ingénieurs de maintenance et de leurs accès à la plateforme de surveillance des robots.",
          },
        ],
      },

      elearning: {
        title: "Plateforme E-Learning",

        shortDescription:
          "Une plateforme d'apprentissage en ligne développée avec Angular et Spring Boot pour gérer les contenus pédagogiques et les utilisateurs.",

        description:
          "Ce projet est une plateforme E-Learning Full-Stack développée avec Angular pour le frontend et Spring Boot pour le backend. L'application fournit un environnement structuré permettant de gérer les utilisateurs, les contenus pédagogiques et les cours, tout en démontrant l'intégration d'un frontend moderne avec une API REST développée en Java.",

        category: "Full-Stack",

        features: [
          {
            title: "Gestion des cours",
            description:
              "Créer et gérer les cours et organiser les contenus pédagogiques au sein de la plateforme.",
          },
          {
            title: "Gestion des utilisateurs",
            description:
              "Gérer les utilisateurs de la plateforme et leurs accès à l'environnement d'apprentissage.",
          },
          {
            title: "Contenus pédagogiques",
            description:
              "Fournir un environnement structuré pour organiser et consulter les ressources pédagogiques.",
          },
          {
            title: "Frontend Angular",
            description:
              "Développer une application frontend responsive avec Angular et TypeScript.",
          },
          {
            title: "API REST",
            description:
              "Exposer les fonctionnalités backend via une API REST Spring Boot connectée à la base de données de l'application.",
          },
        ],

        challenges: [
          {
            title: "Intégration frontend-backend",
            problem:
              "Le frontend Angular doit communiquer de manière fiable avec le backend Spring Boot tout en gérant les données et les interactions utilisateur.",
            solution:
              "J'ai mis en place une communication basée sur une API REST entre Angular et Spring Boot afin de séparer clairement les responsabilités du frontend et du backend.",
          },
          {
            title: "Gestion des données pédagogiques",
            problem:
              "Les cours, les utilisateurs et les contenus pédagogiques créent plusieurs relations qui doivent être stockées et récupérées de manière cohérente.",
            solution:
              "J'ai utilisé MySQL avec le backend Spring Boot afin de structurer et gérer les données pédagogiques de l'application.",
          },
          {
            title: "Création d'un frontend maintenable",
            problem:
              "Lorsque le nombre d'écrans et de fonctionnalités augmente, le code frontend peut devenir difficile à maintenir.",
            solution:
              "J'ai structuré l'application Angular avec des composants réutilisables et organisé le frontend autour de responsabilités fonctionnelles clairement définies.",
          },
        ],

        screenshots: [],
      },
    },
  },
  experience: {
  label: "Expérience",

  title: "Là où j'ai",
  titleHighlight: "construit et appris.",

  description:
    "Mon expérience professionnelle m'a permis de travailler sur le frontend, le backend, les bases de données, les systèmes temps réel, l'IA et l'IoT.",

  items: [
    {
      key: "quetraTechHaulTrack",
      description:
        "J'ai travaillé sur HaulTrack, une plateforme intelligente de gestion de flotte permettant le suivi des véhicules en temps réel, le traitement de la télémétrie et l'analyse de données basée sur l'IA.",
    },
    {
      key: "quetraTechRoboHealth",
      description:
        "J'ai développé RoboHealth, une plateforme de surveillance de la santé des robots basée sur l'IA pour la maintenance prédictive. J'ai construit et évalué un modèle de détection d'anomalies basé sur XGBoost à partir de données de télémétrie de robots industriels.",
    },
    {
      key: "leaderPos",
      description:
        "J'ai développé une plateforme E-Learning avec un frontend Angular moderne et un backend Spring Boot pour la gestion des contenus pédagogiques et des utilisateurs.",
    },
  ],

  highlight: {
    label: "Évoluer grâce à l'expérience",

    description:
      "De la création de plateformes web au travail avec des systèmes temps réel, l'IA et l'IoT, chaque expérience a enrichi ma manière d'aborder le développement logiciel.",

    fullStack: "Full-Stack",
    aiIot: "IA & IoT",
  },
},
contact: {
  label: "Contact",

  title: "Construisons quelque chose",
  titleHighlight: "d'utile.",

  availability: "Ouverte aux nouvelles opportunités",

  getInTouch: "Me contacter",

  opportunityTitle: "Vous avez une idée ou une opportunité ?",

  opportunityDescription:
    "Que vous recherchiez une développeuse Full-Stack, que vous construisiez une application web ou que vous exploriez un projet axé sur l'IA, n'hésitez pas à me contacter.",

  opportunityDescriptionSecond:
    "Je suis toujours intéressée par les nouveaux projets, les collaborations et les défis techniques stimulants.",

  contactMe: "Mes coordonnées",

  email: "Email",
  whatsapp: "WhatsApp",
  github: "GitHub",
  linkedin: "LinkedIn",

  messageMe: "M'envoyer un message",

  bottomStatement: "Créer des produits, résoudre des problèmes et toujours",

  bottomHighlight: "apprendre quelque chose de nouveau.",
},
footer: {
  rights: "Tous droits réservés.",
  github: "Profil GitHub",
  linkedin: "Profil LinkedIn",
  email: "Envoyer un email à Syrine Elayeb",
},
};

