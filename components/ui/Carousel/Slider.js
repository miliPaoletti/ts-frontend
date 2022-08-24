import { useEffect, useState } from "react";
import Arrows from "components/ui/Carousel/Arrows";
import SliderContent from "components/ui/Carousel/SliderContent";

const Slider = (props) => {
  const len = props.sliderImage?.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused === false) {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, len]);

  const nextSlide = () => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    setIsPaused(true);
  };
  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
    setIsPaused(true);
  };
  return (
    <div className="slider-container group">
      <SliderContent
        activeIndex={activeIndex}
        sliderImage={props.sliderImage}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
      <Arrows
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
    </div>
  );
};

export default Slider;