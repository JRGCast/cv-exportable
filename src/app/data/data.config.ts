export const mainData = {
  name: 'João Ralph Gonçalves Castaldi',
  summary: '',
  location: 'Brasília - DF',
  locationLink: '',
  about: '',
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

mainData.locationLink = `https://www.google.com/maps/place/${mainData.location}`
