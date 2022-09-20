import Image from "next/image";

export default function Banner({ image, title }) {
  return (
    <div className="relative slider-container w-100">
      <div className="opacity-imgs">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="center z-0 remove-selection"
          alt=""
        />
      </div>
      <p
        className="slide-text-destination "
        style={{ textShadow: "0 0 2px #333" }}
      >
        {title}
      </p>
    </div>
  );
}
