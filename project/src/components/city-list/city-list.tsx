import {useState} from 'react';
import React from 'react';
import CityCard from '../city-card/city-card';
import {OfferType} from '../../types/offer-type';
// import {MouseEvent} from 'react';

type CityListTypes = {
  offers: OfferType[];
  onListItemHover: (city: string) => void;
}

function CityList({offers, onListItemHover}: CityListTypes): JSX.Element {

  // const listItemHoverHandler = (evt: MouseEvent<HTMLLIElement>) => {
  //   console.log(evt);
  //   onListItemHover(evt);
  // };

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
            // onMouseOver={(evt) => listItemHoverHandler(evt.target.value.id)}
            onMouseAction={handleMouseAction}
          />
        ))
      }
    </div>
  );
}

export default CityList;
