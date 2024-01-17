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
    social: {
      name: string;
      url: string;
      icon: string;
    }[];
  };
  workExps: {
    companyName: string;
    url: string;
    remoteOrNot: boolean;
    start: Date; // YYYY-MM
    end: string | Date; // YYYY-MM
    jobTitle: string;
    description: string;
    stacks: string[];
  }[];
  skills: string[];
  education: any[];
  certifications: any[];
  idioms: any[];
}
