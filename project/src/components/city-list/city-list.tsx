import CityCard from '../city-card/city-card';
import {OfferType} from '../../types/offer-type';
import {useState} from 'react';
import {CardType} from '../../const';

type CityListTypes = {
  offers: OfferType[];
}

function CityList({offers}: CityListTypes): JSX.Element {

  const [activeCardMouseHandler, setActiveCardMouseHandler] = useState(false);

  return (
    <div className="cities__places-list places__list">
      {
        offers.map((item: OfferType) => (
          <CityCard
            offer={item}
            cardType={CardType.Main}
            key={item.id}
            activeCardMouseHandler={activeCardMouseHandler}
            setActiveCardMouseHandler={setActiveCardMouseHandler}
          />
        ))
      }
    </div>
  );
}

export default CityList;
