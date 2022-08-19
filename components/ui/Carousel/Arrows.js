import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Arrows = ({ prevSlide, nextSlide, onMouseEnter, onMouseOver }) => {
  return (
    <div>
      <IoIosArrowBack
        onClick={prevSlide}
        className="prev"
        onMouseEnter={onMouseEnter}
        onMouseOver={onMouseOver}
      />

      <IoIosArrowForward
        onClick={nextSlide}
        className="next"
        onMouseEnter={onMouseEnter}
        onMouseOver={onMouseOver}
      />
    </div>
  );
};

export default Arrows;
