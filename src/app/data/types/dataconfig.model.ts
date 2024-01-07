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
}
