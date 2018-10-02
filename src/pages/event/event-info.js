import config from '../../config';

export const eventInfo = {
  title: 'Halloween Degrish 2k18',
  subtitle: 'A festa mais esperada do ano',
  description: '<p>Pelo quinto ano consecultivo as organizações Degrish promovem  a famigerada Halloween Degrish Party 2018</p><p>Como novidade, esta edição será realizada no espaço Refúgio Cowork</p>',
  flyer: `${config.ASSETS_BASE_URI}/${config.ASSETS_BANNERS_PATH}/escape.jpg`,
  categories: ['balada','música','cultura','louge'],
  location: {
    address: 'Largo da dinha, Rio Vermelho, Salvador - BA',
    coordinates: { lat: -13.011441, lng: -38.491617 },
  },
  place: {
    avatar: 'https://scontent.fssa2-1.fna.fbcdn.net/v/t1.0-9/32105083_1461921467240717_2863832073544663040_n.jpg?_nc_cat=0&oh=3c7f14d76ec0017e7025a183c3df36d5&oe=5BD73AD3',
    name: 'Guhan\'s Cowork House',
    url: '/',
    openAt: '7h as 18h',
    capacity: 300,
    location: {
      address: 'Largo da dinha, Rio Vermelho, Salvador - BA',
      coordinates: { lat: -13.011441, lng: -38.491617 },
    },
  },
  start: new Date(),
  end: new Date("July 12, 2019 01:15:00"),
  followedBy: [ '9', '3', '12' ],
  url: '/',
};