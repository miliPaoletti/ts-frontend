import TitleDestination from "components/ui/Titles/TitleDestination";
import { Wrapper } from "components/ui/WrapperImages/Wrapper";
import { isKeyInObject } from "components/utils/renderHelpers";

export default function DestinationInfo({
  destinationNames,

  dataImages,
}) {
  return (
    <div className=" w-[100%] lg:w-[75%] block py-5 px-5">
      {destinationNames.map((destination, index) => {
        let getImages = [];
        let getDescription = "";
        let data = isKeyInObject(dataImages, destination);
        if (data) {
          getImages = data["images"];
          getDescription = data["description"];
        }

        return (
          <div key={index} className="space-y-5">
            <TitleDestination text={destination} />{" "}
            <Wrapper images={getImages} />
            <div className="text-justify whitespace-pre-wrap">
              {getDescription}
            </div>
          </div>
        );
      })}
    </div>
  );
}
