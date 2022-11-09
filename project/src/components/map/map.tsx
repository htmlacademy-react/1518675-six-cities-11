import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {OfferType} from '../../types/offer-type';
import {useEffect, useRef} from 'react';
import {useMap} from '../../hooks/use-map';
import {MarkerIcon} from '../../const';
// import {Point} from '../../types/point-type';

// type DefaultLocationType = {
//   latitude: string;
//   longitude: string;
// }
// type UseMapProps = {
//   mapRef: MutableRefObject<HTMLElement | null>;
//   city: City;
// }

type MapProps = {
  className: string;
  offers?: OfferType[];
  // selectedPoint: Point | undefined;
}

function Map ({className, offers}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: MarkerIcon.Default,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: MarkerIcon.Current,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map && offers !== undefined) {
      offers.forEach((point) => {
        leaflet
          .marker({
            lat: point.city.location?.latitude,
            lng: point.city.location?.longitude,
          }, {
            // icon: (point.city.name === selectedPoint.city)
            //   ? currentCustomIcon
            //   : defaultCustomIcon,
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section
      ref={mapRef}
      id='map'
      className={`${className} map`}
      style={{width: '400px'}}
    >

    </section>
  );
}

export default Map;
