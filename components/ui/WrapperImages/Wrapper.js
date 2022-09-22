import SliderDestination from "components/layout/destination/SliderDestination";
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
  return images.length > 0 ? (
    <div className="remove-selection ">
      <SliderDestination images={images} showImage={showImage} />
      {lightboxDisplay ? (
        <div className="lightbox remove-selection" onClick={hideLightBox}>
          <RiCloseCircleFill className="icon-close" onClick={hideLightBox} />
          <BsFillArrowLeftSquareFill onClick={showPrev} />
          <div className="h-fit lg:h-[90%]">
            <picture className="lightbox-img remove-selection">
              <source srcSet={imageToShow} type="image" />
              <img
                className="remove-selection w-full h-full"
                src={imageToShow}
                alt={imageToShow}
              />
            </picture>
          </div>
          <BsFillArrowRightSquareFill onClick={showNext} />
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  );
};
