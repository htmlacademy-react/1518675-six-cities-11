import {useState} from 'react';

import CityCard from '../city-card/city-card';
import {OfferType} from '../../types/offer-type';

type CityListTypes = {
  offers: OfferType[];
}

function CityList({offers}: CityListTypes): JSX.Element {

  const [, setActiveId] = useState<number | null>(null);

  const handleMouseAction = (activeId: number | null) => {
    setActiveId(activeId);
  };

  return (
    <div className="cities__places-list places__list">
      {
        offers.map((item: OfferType) => (
          <CityCard
            offer={item}
            cardType="main"
            key={item.id}
            onMouseAction={handleMouseAction}
          />
        ))
      }
    </div>
  );
}

export default CityList;
