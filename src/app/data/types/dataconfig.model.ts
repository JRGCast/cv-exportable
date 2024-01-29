export interface MainData {
  name: string;
  summary: string;
  location: string;
  country: string;
  locationLink: string;
  about: string;
  contact: {
    mail: string;
    phone: string;
    social: Array<{
      name: string;
      url: string;
      icon: string;
    }>;
  };
  workExps: Array<{
    companyName: string;
    url: string;
    remoteOrNot: boolean;
    start: Date; // YYYY-MM
    end: string | Date; // YYYY-MM
    jobTitle: string;
    description: string;
    stacks: string[];
  }>;
  skills: string[];
  education: any[];
  certifications: Array<{
    entityName: string;
    url: string;
    courseName: string;
    conclusionDate: Date;
    skillsLeaned: string[];
  }>;
  idioms: Array<{ language: string; code: string; level: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic' }>;
  projects: any[];
}
