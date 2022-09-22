import { useCallback, useEffect, useState } from "react";

const useWrapper = (images) => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const showImage = (image, index) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);
    setCurrentIndex(index);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = useCallback(
    (event) => {
      event.stopPropagation();
      if (images.length !== 0) {
        const totalLength = images?.length;
        if (currentIndex + 1 >= totalLength) {
          // last element
          setCurrentIndex(0);
          const newUrl = images[0]["images"];
          setImageToShow(newUrl);
          // cargo la primera imagen
          return;
        }

        const newIndex = currentIndex + 1;
        const newUrl = images.filter((item) => {
          return images.indexOf(item) === newIndex;
        });

        const newItem = newUrl[0]["images"];
        setImageToShow(newItem);
        setCurrentIndex(newIndex);
      }
    },
    [currentIndex, images]
  );

  const showPrev = useCallback(
    (event) => {
      event.stopPropagation();

      if (images.length !== 0) {
        const totalLength = images?.length;

        if (currentIndex === 0) {
          // first element
          setCurrentIndex(totalLength - 1);
          const newUrl = images[totalLength - 1]["images"];
          setImageToShow(newUrl);
          return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = images.filter((item) => {
          return images.indexOf(item) === newIndex;
        });

        const newItem = newUrl[0]["images"];
        setImageToShow(newItem);
        setCurrentIndex(newIndex);
      }
    },
    [currentIndex, images]
  );

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "ArrowRight") {
        showNext(event);
      }

      if (event.key === "ArrowLeft") {
        showPrev(event);
      }
      if (event.key === "Escape") {
        //Do whatever when esc is pressed
        hideLightBox();
      }
    },
    [showPrev, showNext]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [handleKeyPress]); // Empty array ensures that effect is only run on mount and unmount

  return {
    imageToShow,
    lightboxDisplay,
    showNext,
    showPrev,
    hideLightBox,
    showImage,
  };
};

export default useWrapper;
