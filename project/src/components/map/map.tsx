type MapProps = {
  className: string;
}

function Map ({className}: MapProps) {

  return (
    <section className={`${className} map`}></section>
  );
}

export default Map;
