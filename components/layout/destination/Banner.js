export default function Banner({ image, title }) {
  return (
    <div className="relative slider-container w-100">
      <div className="opacity-imgs h-full w-full">
        <picture className="h-full w-full">
          <source srcSet={image} type="image" />
          <img
            className="object-cover h-full w-full z-0 remove-selection"
            src={image}
            alt={image}
          />
        </picture>
      </div>
      <p
        className="slide-text-destination "
        style={{ textShadow: "0 0 2px #333" }}
      >
        {title}
      </p>
    </div>
  );
}
