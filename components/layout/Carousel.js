import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import { useEffect, useState } from "react";
import { getImgsCarousel } from "pages/api/carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const Carousel = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);

  //   agregar un skeleton
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
    <div className="slide-container group">
      <Fade
        pauseOnHover={true}
        transitionDuration={500}
        prevArrow={<IoIosArrowBack className="prev" />}
        nextArrow={<IoIosArrowForward className="next" />}
      >
        {imagesCarousel?.map((slide, index) => {
          return (
            <div key={index}>
              <div
                className="flex flex-col justify-center pl-24 h-[400px] bg-cover "
                style={{
                  backgroundImage: `url(${slide.images})`,
                }}
              >
                <h1
                  className="text-7xl text-white uppercase font-bold "
                  style={{ textShadow: "0 0 2px #333" }}
                >
                  {slide.title}
                </h1>
                <p className="text-2xl text-white  font-bold ml-1 ">
                  {slide.title}
                </p>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};
