import Image from "next/image";

export default function Banner({ image, title }) {
  return (
    <div className="relative slider-container w-100">
      <div className="opacity-imgs h-full w-full">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={image}
          className="remove-selection z-0 "
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
