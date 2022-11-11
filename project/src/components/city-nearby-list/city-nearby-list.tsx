import {ReactNode} from 'react';

type CityNearbyListProps = {
  children: ReactNode;
}

function CityNearbyList({children}: CityNearbyListProps) {

  return (
    <div className="near-places__list places__list">

      {children}

    </div>
  );
}

export default CityNearbyList;
