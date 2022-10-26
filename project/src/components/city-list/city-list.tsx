import CityCard from '../city-card/city-card';

type OfferType = {
  id: number;
  price: number;
  type: string;
  title: string;
  img: string;
}


type CityListTypes = {
  offers: OfferType[];
}

function CityList({offers}: CityListTypes): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item: OfferType) => (
          <CityCard {...item} key={item.id} />
        ))
      }
    </div>
  );
}

export default CityList;
