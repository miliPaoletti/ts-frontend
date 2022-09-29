import Slider from "components/ui/Carousel/Slider";
import { getImgsCarousel } from "pages/api/carousel";
import { useEffect, useState } from "react";

export const SliderIndex = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);

  useEffect(() => {
    // get the images for the carousel
    getImgsCarousel().then(setImagesCarousel);
  }, []);

  return (
    <div className="slider-container group">
      <Slider images={imagesCarousel} />
    </div>
  );
};
