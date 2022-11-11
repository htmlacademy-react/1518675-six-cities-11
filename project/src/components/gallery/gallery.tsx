import {MAX_OFFER_IMAGES} from '../../const';

type GalleryProps = {
  images: string[];
}

function Gallery(props: GalleryProps): JSX.Element {
  console.log(props);
  console.log(props.images);

  const imageItem = props.images.slice(0, MAX_OFFER_IMAGES).map((item) => (
    <div className="property__image-wrapper" key={item}>
      <img className="property__image" src={item} alt="Photo studio"/>
    </div>
  ));

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">

        {imageItem}

      </div>
    </div>
  );
}

export default Gallery;
