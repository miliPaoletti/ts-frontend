import Slider from "components/ui/Carousel/Slider";

const SliderDestination = ({ images, showImage }) => {
  const sliderStyles = "h-[300px] md:h-[400px] ";
  return (
    <div className="slider-destination group ">
      <Slider
        showImage={showImage}
        images={images}
        sliderStyles={sliderStyles}
      />
    </div>
  );
};

export default SliderDestination;
