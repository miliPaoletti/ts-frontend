import SmallText from "components/ui/Titles/SmallText";
import { MdWatchLater } from "react-icons/md";
import Link from "next/link";
import { CONSULT } from "components/utils/constants";
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
}) {
  return (
    <Link
      href={{ pathname: pathname, query: { destinationId: destinationId } }}
    >
      <a className="rounded-xl overflow-hidden hover:shadow-lg mb-11 md:mx-5 bg-white hover:scale-105 transition transform duration-200 ease-out border border-[#dce0e0] cursor-pointer relative">
        {promotions ? (
          <div className="absolute top-[15px]  right-[15px] bg-yellow-500 text-white rounded-lg py-2 px-4 text-center">
            <div className="font-bold text-xl">
              50% <span className="text-base font-bold">OFF</span>
            </div>
            <div className="text-[11px] font-bold">2do pasajero</div>
          </div>
        ) : (
          ""
        )}
        <picture>
          <source srcSet={img} type="image" />
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[300px] lg:h-[250px] xl:h-[300px] object-cover"
            src={img}
            alt={title}
          />
        </picture>
        <div className="px-6 py-4 h-[150px]">
          <div className="font-bold text-2xl sm:text-3xl xl:text-2xl 2xl:text-3xl mb-2 capitalize">
            {title}
          </div>
          <div className="text-base sm:text-xl xl:text-base 2xl:text-xl mb-2  ">
            {months}
          </div>
        </div>
        <div className="flex px-6 pb-2 justify-between">
          <div className="text-2xl mb-2 uppercase font-bold ">
            <SmallText text="desde" />
            <div className="text-orange-950">
              {currency} {price}
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
      </a>
    </Link>
  );
}

export default MediumCard;
