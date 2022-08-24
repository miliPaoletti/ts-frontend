import MediumCard from "components/ui/Cards/MediumCard";
import { CONSULT, IMG_DEFAULT, months } from "./constants";

export const getCurrency = (currency) => {
  let local_currency = "";
  if (currency == "pesos") {
    local_currency = "$";
  } else if (currency == "dolares") {
    local_currency = "U$D";
  }
  return local_currency;
};

export const getData = (destinations, destinationImages) => {
  let listDestinations = [];

  for (let destination in destinations) {
    const dest = destinations[destination];
    const destino = dest["data"];
    const key = dest["id"];

    const titleDest = destino["title"];
    const durationDest = destino.duration;
    const promotionDest = destino.promotions;

    let first_image = IMG_DEFAULT;

    if (destinationImages[titleDest] !== undefined) {
      if (destinationImages[titleDest].length > 0) {
        const webInfoDestination = destinationImages[titleDest][0]["data"];

        if (webInfoDestination !== undefined) {
          first_image = webInfoDestination["images"][0];
        }
      }
    }

    let duration = CONSULT;
    if (durationDest !== undefined) {
      duration = durationDest.days;
    }
    let promotion = false;
    if (promotionDest !== undefined) {
      if (
        promotionDest.includes("segundo pasajero") &&
        promotionDest.includes("50%")
      ) {
        promotion = true;
      }
    }

    let months = "";
    if (destino.sheet) {
      months = destino.sheet;
    } else {
      let months_local = sortByMonth(destino.departures);
      months = getStyledData(months_local);
    }

    listDestinations.push(
      <MediumCard
        img={first_image}
        key={key}
        title={destino.title}
        months={months}
        promotions={promotion}
        currency={getCurrency(destino.lowest_price["currency"])}
        price={destino.lowest_price["price"]}
        days={duration}
        cover={destino.includes}
        additional_insurance={destino.additional_insurance}
        boarding={destino.boarding}
        departures={destino.departures}
        meal_regimen={destino.meal_regimen}
        hotels={destino.hotel}
        pathname="/destination"
        destinationId={key}
        provider={destino.provider}
      />
    );
  }
  return listDestinations;
};

export const sortByMonth = (arr) => {
  arr?.sort(function (a, b) {
    return months.indexOf(a.toLowerCase()) - months.indexOf(b.toLowerCase());
  });
  return arr;
};

export const orderObject = (object_to_sort) => {
  const sorted = Object.keys(object_to_sort)
    .sort()
    .reduce((accumulator, key) => {
      accumulator[key] = object_to_sort[key];

      return accumulator;
    }, {});

  return sorted;
};

export const getStyledData = (data) => {
  let len = data.length - 1;

  let dataStyled = data.map((item, index) => (
    <span className="capitalize " key={index}>
      {item}
      {index !== len ? ", " : ""}
    </span>
  ));

  return dataStyled;
};

export const getDeparturesOrder = (departures) => {
  let sorted = sortByMonth(departures);
  let abrev = sorted.map((departure) => {
    return departure.substring(0, 3);
  });
  return getStyledData(abrev);
};
