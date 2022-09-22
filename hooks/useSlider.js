import { useCallback, useEffect, useState } from "react";

export const useSlider = (images) => {
  const len = images?.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused === false) {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, len]);

  const nextSlide = useCallback(() => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    setIsPaused(true);
  }, [activeIndex, len]);

  const prevSlide = useCallback(() => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
    setIsPaused(true);
  }, [activeIndex, len]);

  return {
    activeIndex,
    setIsPaused,
    prevSlide,
    nextSlide,
  };
};
