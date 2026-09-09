import type { ProjectKey } from "@/data/projects";
export interface ProjectTranslation {
  title: string;

  shortDescription: string;

  description: string;

  category: string;

  features: {
    title: string;
    description: string;
  }[];

  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];

  screenshots: {
    title: string;
    description?: string;
  }[];
}

export interface Translation {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };

  actions: {
    linkedin: string;
    downloadCV: string;
    letsTalk: string;
    viewWork: string;
  };

  language: string;

  hero: {
    label: string;
    title: string;
    description: string;
    roles: string[];
  };
  about: {
  label: string;
  title: string;

  paragraphs: string[];

  facts: {
    focus: string;
    focusValue: string;

    interests: string;
    interestsValue: string;

    basedIn: string;
    basedInValue: string;
  };
};

  skills: {
    label: string;
    title: string;
    titleHighlight: string;

    groups: {
      frontend: string;
      backend: string;
      databases: string;
      aiIot: string;
      toolsDevops: string;
    };

    approachLabel: string;
    approachTitle: string;
    approachHighlight: string;
    approachDescription: string;

    tags: {
      fullStack: string;
      ai: string;
      iot: string;
    };
  };

  projects: {

    label: string;

    title: string;

    titleHighlight: string;



    description: string;

    closingDescription: string;

    backToProjects: string;



    actions: {

      viewProject: string;

      watchDemo: string;

      viewApp: string;

    };


  sections: {
    overview: string;
    about: string;

    features: string;
    featuresTitle: string;

    challenges: string;
    challengesTitle: string;
    challengesDescription: string;

    problem: string;
    approach: string;

    screenshots: {
      label: string;
      title: string;
      description: string;
    };
  };




    items: Record<ProjectKey, ProjectTranslation>;

  };
  experience: {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;

  items: {
    key: string;
    description: string;
  }[];

  highlight: {
    label: string;
    description: string;
    fullStack: string;
    aiIot: string;
  };
};
contact: {

  label: string;

  title: string;

  titleHighlight: string;



  availability: string;

  getInTouch: string;

  opportunityTitle: string;

  opportunityDescription: string;

  opportunityDescriptionSecond: string;



  contactMe: string;



  email: string;

  whatsapp: string;

  github: string;

  linkedin: string;



  messageMe: string;



  bottomStatement: string;

  bottomHighlight: string;

};
footer: {
  rights: string;
  github: string;
  linkedin: string;
  email: string;
};
}