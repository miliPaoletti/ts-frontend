import Arrows from "components/ui/Carousel/Arrows";
import SliderContent from "components/ui/Carousel/SliderContent";
import { useSlider } from "hooks/useSlider";

const SliderDestination = ({ images, showImage }) => {
  const { activeIndex, setIsPaused, prevSlide, nextSlide } = useSlider(images);

  const sliderStyles = "h-[300px] md:h-[400px]";
  return (
    <div className="slider-destination group ">
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
    </div>
  );
};

export default SliderDestination;
