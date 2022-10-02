import Image from "next/image";

const SliderContent = ({
  activeIndex,
  sliderImage,
  onMouseEnter,
  onMouseLeave,
  showImage,
  sliderStyles,
}) => {
  return (
    <section
      className={`pt-0 relative ${
        sliderStyles ? "cursor-pointer" : "opacity-imgs"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() =>
        showImage && showImage(sliderImage[activeIndex]["images"], activeIndex)
      }
    >
      {sliderImage?.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === activeIndex
                ? `active ${sliderStyles ? sliderStyles : "slides"}`
                : "inactive"
            }
          >
            <Image
              src={slide.images}
              layout="fill"
              objectFit="cover"
              alt="Imagen"
              className={
                index === activeIndex ? "slide-image animation " : "slide-image"
              }
            />
            <div className="slider-text-container">
              <p className="slide-title" style={{ textShadow: "0 0 2px #333" }}>
                {slide.title}
              </p>
              <p className="slide-text">{slide.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SliderContent;
