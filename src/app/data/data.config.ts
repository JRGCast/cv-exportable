import { MainData } from './types/dataconfig.model';

export const mainData: MainData = {
  name: 'João R. G. Castaldi',
  summary: 'Full Stack developer focused on problem solving.',
  location: 'Brasília',
  country: 'Brazil',
  locationLink: '',
  about:
    "Former lawyer turned into a Full Stack developer. My legal background helped me become a communicator, detail analyst, an empathetic person and overall a problem solver. I'm commited to adapt on every environment and deliver my best work, both alone and as part of a team. Currently I'm working mostly with Angular, TypeScript, Java and Spring Boot. I have 2 years of experience working remotely with those techs",
  contact: {
    mail: 'joao.ralph1@gmail.com',
    phone: '+55 (61)98242-3750',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/JRGCast',
        icon: 'github',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/joao-ralph-castaldi',
        icon: 'linkedin',
      },
    ],
  },
};

mainData.locationLink = `https://www.google.com/maps/place/${mainData.location}`;
