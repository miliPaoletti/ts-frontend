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
      className={`pt-0 relative  ${
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
                ? `active  ${sliderStyles ? sliderStyles : "slides"}`
                : "inactive"
            }
          >
            <picture>
              <source srcSet={slide.images} type="image" />
              <img
                className={
                  index === activeIndex
                    ? "slide-image animation "
                    : "slide-image"
                }
                src={slide.images}
                alt=""
              />
            </picture>

            <p className="slide-title" style={{ textShadow: "0 0 2px #333" }}>
              {slide.title}
            </p>
            <p className="slide-text">{slide.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default SliderContent;
