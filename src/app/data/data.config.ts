export const mainData = {
  name: 'João R. G. Castaldi',
  summary:
    'Full Stack developer focused on problem solving.',
  location: 'Brasília',
  country: 'Brasil',
  locationLink: '',
  about: 'Former lawyer turned into a Full Stack developer. My legal background helped me become a communicator, detail analyst, an empathetic person and overall a problem solver. I\'m commited to adapt on every environment to deliver the best work as a team. Currently I\'m working mostly with Angular, TypeScript, Java and Spring Boot. I have 2 years of experience working remotely with those stacks',
  contact: {
    mail: 'joao.ralph1@gmail.com',
    phone: '+55 (61)98242-3750',
    social: [
      {
        name: 'GitHub',
        url: '',
        icon: 'github',
      },
      {
        name: 'LinkedIn',
        url: '',
        icon: 'linkedin',
      },
    ],
  },
};

mainData.locationLink = `https://www.google.com/maps/place/${mainData.location}`;
