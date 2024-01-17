import { cleanUTCDateObj } from '../utils/functions';
import { MainData } from './types/dataconfig.model';

export const mainData: MainData = {
  name: 'João R. G. Castaldi',
  summary: 'Full Stack developer focused on problem solving.',
  location: 'Brasília',
  country: 'Brazil',
  locationLink: '',
  about:
    "Former lawyer turned into a Full Stack developer. My legal background helped me become a communicator, detail analyst, an empathetic person and overall a problem solver. I'm commited to adapt on every environment and deliver my best work, both alone and as part of a team. Currently I'm working mostly with Angular, TypeScript, Java and Spring Boot, and I have 2 years of experience working remotely with these techs",
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
  workExps: [
    {
      companyName: 'GI/Ford Motors',
      url: '',
      start: cleanUTCDateObj('2022-02-17'),
      end: '',
      jobTitle: 'Software Analyst',
      remoteOrNot: true,
      description:
        'Developed multiple projects from scratch and updated legacy, both front and backend (mainly on frontend). Got recognized as a go-to person on Angular',
      stacks: ['Angular', 'PrimeNG', 'ChartJS', 'Java', 'Spring Boot'],
    },
    {
      companyName: 'GI/Ford Motors',
      url: '',
      start: cleanUTCDateObj('2022-02-17'),
      end: '',
      jobTitle: 'Software Analyst',
      remoteOrNot: true,
      description:
        'Developed multiple projects from scratch and updated legacy, both front and backend (mainly on frontend). Got recognized as a go-to person on Angular',
      stacks: ['Angular', 'PrimeNG', 'ChartJS', 'Java', 'Spring Boot'],
    },
  ],
  skills: ['React', 'Node.js', 'Jest', 'Angular', 'TypeScript', 'Java', 'Spring Boot', 'Karma/Jasmine'].sort(),
  education: [{}],
  certifications: [{}],
  idioms: [{}],
};

mainData.locationLink = `https://www.google.com/maps/place/${mainData.location}`;
