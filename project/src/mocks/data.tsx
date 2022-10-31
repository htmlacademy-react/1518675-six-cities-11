import {OfferKind} from '../const';
import {OfferType} from '../types/offer-type';

const offers: OfferType[] = [
  {
    id: 1,
    price: 2400,
    type: OfferKind.Apartment,
    title: 'Beautiful & luxurious apartment at great location',
    img: 'img/apartment-01.jpg',
    rating: 4.6,
    isFavorite: true,
    isPremium: false,
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 2,
    price: 760,
    type: OfferKind.PrivateRoom,
    title: 'Wood and stone place',
    img: 'img/apartment-02.jpg',
    rating: 2.2,
    isFavorite: true,
    isPremium: true,
    city: {
      name: 'Cologne'
    }
  },
  {
    id: 3,
    price: 120,
    type: OfferKind.Apartment,
    title: 'Nice, cozy, warm big bed apartment',
    img: 'img/apartment-03.jpg',
    rating: 4.9,
    isFavorite: false,
    isPremium: false,
    city: {
      name: 'Cologne'
    }
  },{
    id: 4,
    price: 380,
    type: OfferKind.PrivateRoom,
    title: 'Canal View Prinsengracht',
    img: 'img/apartment-03.jpg',
    rating: 3.0,
    isFavorite: true,
    isPremium: false,
    city: {
      name: 'Amsterdam'
    }
  }
];

export {offers};
