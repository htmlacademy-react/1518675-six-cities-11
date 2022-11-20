import CityCard from '../city-card/city-card';
import {OfferType} from '../../types/offer-type';

type CityListTypes = {
  offers: OfferType[];
  onCardHover: (id: number | null) => void;
}

function CityList({offers, onCardHover}: CityListTypes): JSX.Element {

  return (
    <div className="cities__places-list places__list">
      {
        offers.map((item: OfferType) => (
          <CityCard
            offer={item}
            cardType="main"
            key={item.id}
            onMouseAction={onCardHover}
          />
        ))
      }
    </div>
  );
}

export default CityList;
