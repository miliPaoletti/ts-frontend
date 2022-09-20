import useWrapper from "hooks/useWrapper";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
export const Wrapper = ({ images }) => {
  const {
    imageToShow,
    lightboxDisplay,
    showNext,
    showPrev,
    hideLightBox,
    showImage,
  } = useWrapper(images);

  let img_container = "";
  let img_style = "";
  img_container =
    "h-[100px] sm:h-[150px] md:h-[350px] w-full relative cursor-pointer";
  // img_container = "h-[300px] sm:h-[300px] md:h-[200px] lg:h-[300px] w-full relative";
  img_style = "w-full h-full object-cover absolute object-center	";
  const imageCards = images?.map((image, index) =>
    index < 2 ? (
      <div
        onClick={() => showImage(image, index)}
        key={image}
        className={`${img_container}`}
      >
        <picture>
          <source srcSet={image} type="image" />
          <img className={`${img_style}`} src={image} alt="" />
        </picture>
      </div>
    ) : (
      <div
        onClick={() => showImage(image, index)}
        key={image}
        className={`${img_container} hidden`}
      >
        <picture>
          <source srcSet={image} type="image" />
          <img className={`${img_style}`} src={image} alt="" />
        </picture>
      </div>
    )
  );
  return (
    <div className="remove-selection ">
      <div className="flex space-x-5 remove-selection">{imageCards}</div>
      {lightboxDisplay ? (
        <div className="lightbox remove-selection" onClick={hideLightBox}>
          <RiCloseCircleFill className="icon-close" onClick={hideLightBox} />
          <BsFillArrowLeftSquareFill onClick={showPrev} />

          <picture className="lightbox-img remove-selection">
            <source srcSet={imageToShow} type="image" />
            <img
              className="remove-selection"
              src={imageToShow}
              alt={imageToShow}
            />
          </picture>

          <BsFillArrowRightSquareFill onClick={showNext} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
