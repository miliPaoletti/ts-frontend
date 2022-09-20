import Arrows from "components/ui/Carousel/Arrows";
import SliderContent from "components/ui/Carousel/SliderContent";
import { getImgsCarousel } from "pages/api/carousel";
import { useCallback, useEffect, useState } from "react";

const Slider = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);

  const len = imagesCarousel?.length - 1;
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

  const nextSlide = useCallback(() => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    setIsPaused(true);
  }, [activeIndex, len]);

  const prevSlide = useCallback(() => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
    setIsPaused(true);
  }, [activeIndex, len]);

  useEffect(() => {
    getImgsCarousel().then(setImagesCarousel);
  }, []);
  return (
    <div className="slider-container group">
      <SliderContent
        activeIndex={activeIndex}
        sliderImage={imagesCarousel}
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
