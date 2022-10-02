import SliderDestination from "components/layout/destination/SliderDestination";
import useWrapper from "hooks/useWrapper";
import Image from "next/image";
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
          {images.length > 1 && (
            <BsFillArrowLeftSquareFill onClick={showPrev} />
          )}
          <div className="h-fit lg:h-[90%]">
            <Image
              src={imageToShow}
              layout="fill"
              objectFit="contain"
              alt="Imagen"
              className="remove-selection "
            />
          </div>
          {images.length > 1 && (
            <BsFillArrowRightSquareFill onClick={showNext} />
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  );
};
