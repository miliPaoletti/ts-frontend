import SmallText from "components/ui/Titles/SmallText";
import { MdWatchLater } from "react-icons/md";
import Link from "next/link";
import { CONSULT, IMG_DEFAULT } from "components/utils/constants";
import { updateViews } from "pages/api/updateViews";
import Image from "next/image";
import { getPrice } from "components/utils/renderHelpers";
import { CLICK_DESTINATION_CARD } from "components/tracker/constants";
import { useTracker } from "components/tracker/useTracker";
import { Promotion } from "./Promotion";
import { createWspMessage } from "components/utils/createWspMessage";
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
  regimen,
  boarding,
  departures,
  meal_regimen,
  destinationNames,
  nights,
}) {
  const { handlePreClickAction: clickCard } = useTracker(
    CLICK_DESTINATION_CARD
  );
  let content = (
    <>
      <Promotion promotion={promotions} component="card" />
      <Image
        src={img}
        layout="responsive"
        objectFit="cover"
        alt={title}
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
          <div className="text-orange-950 font-[Rubik]">
            {getPrice(price, currency)}
            {taxes && <span className="lowercase text-sm">+ imp</span>}
          </div>
        </div>
        {days == CONSULT || days == -1 ? (
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

  const monthsToTrack = () => {
    return months.map((month) => {
      if (month.props.children[0] !== undefined) {
        return month.props.children[0];
      }
    });
  };

  // relevant info for the wsp message
  const destination = {
    title,
    url: `http://localhost:3000/destination/?destinationId=${destinationId}`,
  };
  const redirect =
    img === IMG_DEFAULT
      ? createWspMessage(destination)
      : { pathname: pathname, query: { destinationId: destinationId } };
  const target = img === IMG_DEFAULT ? "_blank" : "_self";
  return (
    <Link href={redirect}>
      <a
        target={target}
        rel="noreferrer"
        className="medium-card"
        onClick={() => {
          updateViews(destinationId);
          clickCard({
            destinationName: title,
            months: monthsToTrack().toString(),
            promotion: promotions !== 0 ? promotions : "without promotion",
          });
        }}
      >
        {content}
      </a>
    </Link>
  );
}

export default MediumCard;
