import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {OfferType} from '../../types/offer-type';
import {useEffect, useRef} from 'react';
import {useMap} from '../../hooks/use-map';

type MapProps = {
  className: string;
  offers: OfferType[];
  selectedCard?: number | null;
}

function Map ({className, offers, selectedCard}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 39]
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [20, 39],
  });

  useEffect(() => {
    if (map && offers !== undefined) {
      offers.forEach((point) => {
        leaflet
          .marker({
            lat: point.city.location?.latitude,
            lng: point.city.location?.longitude,
          }, {
            icon: (point.id === selectedCard)
              ? currentCustomIcon
              : defaultCustomIcon,
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
    >

    </section>
  );
}

export default Map;
