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

export const getData = (destinations) => {
  let listDestinations = [];

  for (let destination in destinations) {
    const dest = destinations[destination];
    const destino = dest["data"];
    const key = dest["id"];
    const imageCard = destino["custom_info"];

    const durationDest = destino.duration;
    const promotionDest = destino.promotions;

    let first_image = IMG_DEFAULT;

    if (imageCard !== undefined) {
      if (imageCard["card_image"] !== null) {
        first_image = imageCard["card_image"];
      }
    }

    let duration = CONSULT;
    if (durationDest !== undefined) {
      duration = durationDest.days;
    }

    let months_local = sortByMonth(destino.departures);
    let months = getStyledData(months_local);

    listDestinations.push(
      <MediumCard
        img={first_image}
        key={key}
        title={destino.title}
        months={months}
        promotions={getPromotionsValue(promotionDest)}
        currency={getCurrency(destino.lowest_price["currency"])}
        price={destino.lowest_price["price"]}
        taxes={destino.lowest_price["taxes"]}
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
        views={destino.views}
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
    <span className="capitalize" key={index}>
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

export const sortPricesAsc = (list_destinations) => {
  return list_destinations?.sort((a, b) => a.props["price"] - b.props["price"]);
};

export const sortPricesDesc = (list_destinations) => {
  return list_destinations?.sort((a, b) => b.props["price"] - a.props["price"]);
};

const sortByPromotions = (list_destinations) => {
  return list_destinations?.sort(
    (a, b) => b.props["promotions"] - a.props["promotions"]
  );
};

export const sortByViews = (list_destinations) => {
  return list_destinations?.sort((a, b) => b.props["views"] - a.props["views"]);
};

export const sortByPromotionsAndViews = (list_destinations) => {
  return sortByPromotions(sortByViews(list_destinations));
};

export const filterListDestDolars = (list_destinations) => {
  return list_destinations.filter((dest) => dest.props["currency"] === "U$D");
};

export const filterListDestPesos = (list_destinations) => {
  return list_destinations.filter((dest) => dest.props["currency"] === "$");
};

export const getPromotionsValue = (promotionDest) => {
  let promotion = 0;
  if (promotionDest !== undefined) {
    if (promotionDest.includes("segundo pasajero")) {
      let amount = promotionDest.split(" ")[3].slice(0, -1);
      promotion = 100 - amount;
    }
  }
  return promotion;
};

export function isKeyInObject(obj, key) {
  let val = {};
  Object.keys(obj).some((v) => {
    if (v == key) {
      return (val = obj[v]);
    }
  });
  return val;
}
