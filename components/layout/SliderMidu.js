import Image from "next/image";
import { getImgsCarousel } from "pages/api/carousel";
import { useEffect, useState } from "react";

export const SlideMidu = () => {
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
    <section className="p-0 section-slider relative">
      <div className="slider scrollbar-hide md:h-[500px]">
        {imagesCarousel.map((image, index) => (
          <a className="relative" key={index} name={`img_${image.title}`}>
            <Image src={image.images} alt={image.title} layout="fill" />
            <div className="space-y-5 text-white font-bold absolute top-1/2 translate-y-[-50%] flex flex-col  left-8">
              <h1 className="text-5xl uppercase">{image.title} </h1>
              <p className="text-3xl"> {image.text}</p>
            </div>
          </a>
        ))}
      </div>

      <ul className="markers">
        {imagesCarousel.map((image, index) => (
          <li key={index}>
            <a href={`#img_${image.title}`}></a>
          </li>
        ))}
      </ul>
    </section>
  );
};
