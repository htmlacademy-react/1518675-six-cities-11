import {OfferType} from '../types/offer-type';
import {CommentType} from '../types/comment-type';

const offers: OfferType[] = [
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/18.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/4.jpg',
      'https://11.react.pages.academy/static/hotel/20.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/7.jpg',
      'https://11.react.pages.academy/static/hotel/18.jpg',
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/8.jpg',
      'https://11.react.pages.academy/static/hotel/2.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/17.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/3.jpg',
      'https://11.react.pages.academy/static/hotel/11.jpg'
    ],
    title: 'Loft Studio in the Central Area',
    isFavorite: false,
    isPremium: false,
    rating: 2.6,
    type: 'apartment',
    bedrooms: 4,
    maxAdults: 7,
    price: 495,
    goods: [
      'Fridge',
      'Towels',
      'Coffee machine',
      'Air conditioning',
      'Laptop friendly workspace',
      'Breakfast',
      'Baby seat',
      'Washer',
      'Washing machine',
      'Dishwasher'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.37854,
      longitude: 4.894976,
      zoom: 16
    },
    id: 1
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/13.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/8.jpg',
      'https://11.react.pages.academy/static/hotel/18.jpg',
      'https://11.react.pages.academy/static/hotel/10.jpg',
      'https://11.react.pages.academy/static/hotel/1.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/4.jpg',
      'https://11.react.pages.academy/static/hotel/2.jpg',
      'https://11.react.pages.academy/static/hotel/7.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/16.jpg',
      'https://11.react.pages.academy/static/hotel/11.jpg',
      'https://11.react.pages.academy/static/hotel/19.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg'
    ],
    title: 'Beautiful & luxurious apartment at great location',
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 237,
    goods: [
      'Air conditioning',
      'Laptop friendly workspace',
      'Breakfast',
      'Dishwasher',
      'Baby seat',
      'Towels',
      'Washer',
      'Fridge',
      'Coffee machine'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 50.844556999999995,
      longitude: 4.346697,
      zoom: 16
    },
    id: 2
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/3.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/1.jpg',
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/9.jpg',
      'https://11.react.pages.academy/static/hotel/3.jpg',
      'https://11.react.pages.academy/static/hotel/11.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/7.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/16.jpg',
      'https://11.react.pages.academy/static/hotel/8.jpg',
      'https://11.react.pages.academy/static/hotel/2.jpg',
      'https://11.react.pages.academy/static/hotel/20.jpg'
    ],
    title: 'House in countryside',
    isFavorite: false,
    isPremium: false,
    rating: 3.1,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 171,
    goods: [
      'Dishwasher',
      'Breakfast',
      'Baby seat',
      'Washer',
      'Laptop friendly workspace',
      'Fridge',
      'Coffee machine',
      'Air conditioning',
      'Towels'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 50.867557,
      longitude: 4.357697,
      zoom: 16
    },
    id: 3
  },
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/17.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/17.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/16.jpg',
      'https://11.react.pages.academy/static/hotel/2.jpg',
      'https://11.react.pages.academy/static/hotel/20.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/8.jpg',
      'https://11.react.pages.academy/static/hotel/4.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/19.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/9.jpg'
    ],
    title: 'Beautiful & luxurious apartment at great location',
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
    type: 'house',
    bedrooms: 2,
    maxAdults: 7,
    price: 349,
    goods: [
      'Laptop friendly workspace',
      'Air conditioning',
      'Washer',
      'Breakfast'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16
    },
    id: 4
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/11.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/20.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/4.jpg',
      'https://11.react.pages.academy/static/hotel/13.jpg',
      'https://11.react.pages.academy/static/hotel/3.jpg',
      'https://11.react.pages.academy/static/hotel/8.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/19.jpg',
      'https://11.react.pages.academy/static/hotel/9.jpg',
      'https://11.react.pages.academy/static/hotel/17.jpg',
      'https://11.react.pages.academy/static/hotel/10.jpg',
      'https://11.react.pages.academy/static/hotel/16.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
    type: 'house',
    bedrooms: 3,
    maxAdults: 3,
    price: 471,
    goods: [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer',
      'Air conditioning',
      'Baby seat'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 53.573341000000006,
      longitude: 9.994654,
      zoom: 16
    },
    id: 5
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/17.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/9.jpg',
      'https://11.react.pages.academy/static/hotel/4.jpg',
      'https://11.react.pages.academy/static/hotel/16.jpg',
      'https://11.react.pages.academy/static/hotel/19.jpg',
      'https://11.react.pages.academy/static/hotel/17.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/1.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/14.jpg',
      'https://11.react.pages.academy/static/hotel/7.jpg',
      'https://11.react.pages.academy/static/hotel/20.jpg',
      'https://11.react.pages.academy/static/hotel/18.jpg'
    ],
    title: 'Amazing and Extremely Central Flat',
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 170,
    goods: [
      'Breakfast',
      'Washer',
      'Air conditioning',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: {
      latitude: 53.563341,
      longitude: 9.975654,
      zoom: 16
    },
    id: 6
  },
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13
      }
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/13.jpg',
    images: [
      'https://11.react.pages.academy/static/hotel/5.jpg',
      'https://11.react.pages.academy/static/hotel/2.jpg',
      'https://11.react.pages.academy/static/hotel/10.jpg',
      'https://11.react.pages.academy/static/hotel/12.jpg',
      'https://11.react.pages.academy/static/hotel/1.jpg',
      'https://11.react.pages.academy/static/hotel/4.jpg',
      'https://11.react.pages.academy/static/hotel/19.jpg',
      'https://11.react.pages.academy/static/hotel/15.jpg',
      'https://11.react.pages.academy/static/hotel/9.jpg',
      'https://11.react.pages.academy/static/hotel/3.jpg',
      'https://11.react.pages.academy/static/hotel/18.jpg',
      'https://11.react.pages.academy/static/hotel/17.jpg',
      'https://11.react.pages.academy/static/hotel/6.jpg',
      'https://11.react.pages.academy/static/hotel/20.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: true,
    rating: 2.9,
    type: 'hotel',
    bedrooms: 3,
    maxAdults: 7,
    price: 316,
    goods: [
      'Dishwasher',
      'Laptop friendly workspace',
      'Breakfast',
      'Towels',
      'Air conditioning',
      'Baby seat',
      'Washer',
      'Fridge'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    location: {
      latitude: 52.36354,
      longitude: 4.911976,
      zoom: 16
    },
    id: 7
  }
];

const comments: CommentType[] = [
  {
    id: 1,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 2,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2022-09-24T13:58:46.511Z'
  },
  {
    id: 2,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/3.jpg'
    },
    rating: 3,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2022-09-24T13:58:46.511Z'
  },
  {
    id: 3,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://11.react.pages.academy/static/avatar/9.jpg'
    },
    rating: 4,
    comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2022-09-24T13:58:46.511Z'
  }
];

export {offers, comments};
