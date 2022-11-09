import {MutableRefObject, useEffect, useState} from 'react';
// import {Offer} from '../types/point-type';
import {Map, TileLayer} from 'leaflet';
// import {OfferType} from '../types/offer-type';
import {DefaultLocation} from '../const';

// import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

// type UseMapType = {
//   mapRef: MutableRefObject<HTMLElement | null>;
//   offer: Offer;
// }

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  // offers: OfferType[]
): Map | null {
  const [map, setMap] = useState(null);

  // const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: DefaultLocation.Latitude,
          lng: DefaultLocation.Longitude,
        },
        zoom: 10,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);

      // isRenderedRef.current = true;
    }
  }, [mapRef]);

  return map;
}

export {useMap};
