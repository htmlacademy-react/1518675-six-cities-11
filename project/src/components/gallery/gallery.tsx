import {MAX_OFFER_IMAGES} from '../../const';

type GalleryProps = {
  images: string[];
}

function Gallery({images}: GalleryProps): JSX.Element {

  const imageItems = images.slice(0, MAX_OFFER_IMAGES).map((item) => (
    <div className="property__image-wrapper" key={item}>
      <img className="property__image" src={item} alt="Photo studio"/>
    </div>
  ));

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {imageItems}
      </div>
    </div>
  );
}

export default Gallery;
