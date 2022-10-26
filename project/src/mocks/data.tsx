import {OfferKind} from '../const';

type OfferType = {
  id: number;
  price: number;
  type: string;
  title: string;
  img: string;
}

const offers: OfferType[] = [
  {
    id: 1,
    price: 2400,
    type: OfferKind.Apartment,
    title: 'Beautiful & luxurious apartment at great location',
    img: 'img/apartment-01.jpg'
  },
  {
    id: 2,
    price: 760,
    type: OfferKind.PrivateRoom,
    title: 'Wood and stone place',
    img: 'img/apartment-02.jpg'
  },
  {
    id: 3,
    price: 120,
    type: OfferKind.Apartment,
    title: 'Nice, cozy, warm big bed apartment',
    img: 'img/apartment-03.jpg'
  },{
    id: 4,
    price: 380,
    type: OfferKind.PrivateRoom,
    title: 'Canal View Prinsengracht',
    img: 'img/apartment-03.jpg'
  }
];

export {offers};
