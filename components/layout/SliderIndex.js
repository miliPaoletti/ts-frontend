import Slider from "components/ui/Carousel/Slider";
import { IMG_DEFAULT } from "components/utils/constants";
import { getImgsCarousel } from "pages/api/carousel";
import { useEffect, useState } from "react";

export const SliderIndex = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);

  useEffect(() => {
    // get the images for the carousel
    getImgsCarousel().then((images) => {
      if (images.length <= 1) {
        let obj = {};
        obj["images"] = IMG_DEFAULT;
        setImagesCarousel([obj]);
      } else {
        setImagesCarousel(images);
      }
    });
   }, []);

  return (
    <div className="slider-container group">
      <Slider images={imagesCarousel} />
    </div>
  );
};
