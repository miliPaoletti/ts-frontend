import Arrows from "components/ui/Carousel/Arrows";
import SliderContent from "components/ui/Carousel/SliderContent";
import { useSlider } from "hooks/useSlider";

const Slider = ({ images, showImage, sliderStyles }) => {
  const { activeIndex, setIsPaused, prevSlide, nextSlide } = useSlider(images);
  return (
    <>
      <SliderContent
        activeIndex={activeIndex}
        sliderImage={images}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        showImage={showImage}
        sliderStyles={sliderStyles}
      />
      <Arrows
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
    </>
  );
};

export default Slider;
