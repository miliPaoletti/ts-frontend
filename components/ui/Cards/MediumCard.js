import SmallText from "components/ui/Titles/SmallText";
import { MdWatchLater } from "react-icons/md";
import Link from "next/link";
import { CONSULT, IMG_DEFAULT, MEDIUM_CARD } from "components/utils/constants";
import { ModalConsult } from "../Modals/ModalConsult";
import { updateViews } from "pages/api/updateViews";
import Image from "next/image";
export function MediumCard({
  img,
  title,
  months,
  days,
  price,
  promotions,
  currency,
  pathname,
  destinationId,
  provider,
  taxes,
}) {
  let content = (
    <>
      {promotions !== 0 ? (
        <div className="absolute top-[15px]  right-[15px] bg-yellow-500 text-white rounded-lg py-2 px-4 text-center">
          <div className="font-bold text-xl">
            {promotions}% <span className="text-base font-bold">OFF</span>
          </div>
          <div className="text-[11px] font-bold">2do pasajero</div>
        </div>
      ) : (
        ""
      )}
      <Image
        src={img}
        layout="responsive"
        objectFit="cover"
        alt={img}
        width={100}
        height={70}
      />
      <div className="px-6 py-4 h-[150px]">
        <div className="font-bold text-2xl sm:text-3xl xl:text-2xl 2xl:text-3xl mb-2 capitalize">
          {title}
        </div>
        <div className="text-base sm:text-xl xl:text-base 2xl:text-xl mb-2 ">
          {months}
        </div>
      </div>
      <div className="flex px-6 pb-2 justify-between">
        <div className="text-2xl mb-2 uppercase font-bold ">
          <SmallText text="desde" />
          <div className="text-orange-950">
            {currency} {price}{" "}
            {taxes && <span className="lowercase text-sm">+ imp</span>}
          </div>
        </div>
        {days == CONSULT ? (
          ""
        ) : (
          <div className="text-lg md:text-xl mb-2 capitalize flex items-end">
            <div className="flex items-center lowercase">
              <MdWatchLater className="text-gray-950 mr-1" /> {days} días
            </div>
          </div>
        )}
      </div>
    </>
  );

  const dataForConsult = `Destino: ${title},
      ID_DESTINO: ${destinationId}
      PRECIO: ${currency} - ${price}
      DAYS: ${days},
      PROVIDER: ${provider}
     `;

  return img === IMG_DEFAULT ? (
    <ModalConsult
      dataForConsult={dataForConsult}
      trigger={content}
      section={MEDIUM_CARD}
    />
  ) : (
    <Link
      href={{ pathname: pathname, query: { destinationId: destinationId } }}
    >
      <a
        className="medium-card"
        onClick={() => {
          updateViews(destinationId);
        }}
      >
        {content}
      </a>
    </Link>
  );
}

export default MediumCard;
