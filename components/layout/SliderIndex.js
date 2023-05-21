import Slider from "components/ui/Carousel/Slider";
import { getImgsCarousel } from "pages/api/carousel";
import { useEffect, useState } from "react";
import { SEARCH_IMG } from "../utils/constants";
export const SliderIndex = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);

  useEffect(() => {
    // get the images for the carousel
    getImgsCarousel().then((images) => {
      if (images.length < 1) {
        let obj = {};
        obj["images"] = `${
          process.env.NEXT_PUBLIC_BASE_PATH === undefined
            ? `${SEARCH_IMG}`
            : `${process.env.NEXT_PUBLIC_BASE_PATH}/${SEARCH_IMG}`
        }`;
        setImagesCarousel([obj]);
      } else {
        // Avoid showing carousel entry if the image was updated incorrectly.
        const imagesWithoutNull = images.filter(
          (image) => image.images !== null
        );
        setImagesCarousel(imagesWithoutNull);
      }
    });
  }, []);

  return (
    <div className="slider-container group">
      <Slider images={imagesCarousel} timeInterval={7000} />
    </div>
  );
};
