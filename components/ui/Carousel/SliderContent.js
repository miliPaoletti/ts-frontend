const SliderContent = ({
  activeIndex,
  sliderImage,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <section
      className="pt-0 relative opacity-imgs"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {sliderImage?.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides  active  " : "inactive"}
        >
          <picture>
            <source srcSet={slide.images} type="image" />
            <img
              className={
                index === activeIndex ? "slide-image animation " : "slide-image"
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
      ))}
    </section>
  );
};

export default SliderContent;
