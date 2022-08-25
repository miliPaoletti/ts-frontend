import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const WrapperPrimary = ({ list }) => {
  let img_container = "";
  let img_style = "";
  img_container = "h-[100px] sm:h-[150px] md:h-[350px] w-full relative";
  // img_container = "h-[300px] sm:h-[300px] md:h-[200px] lg:h-[300px] w-full relative";
  img_style = "w-full h-full object-cover absolute object-center	";

  return (
    <SRLWrapper>
      <div className="space-x-3 flex">
        {list?.map((item, index) =>
          index < 3 ? (
            <a href={item} key={item} className={`${img_container}`}>
              <img src={item} alt="" className={`${img_style}`} />
            </a>
          ) : (
            <a href={item} key={item} className={`${img_container} hidden`}>
              <img src={item} alt="" className={`${img_style}`} />
            </a>
          )
        )}
      </div>
    </SRLWrapper>
  );
};

export default WrapperPrimary;
