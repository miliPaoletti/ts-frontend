interface Api {
  [key: string]: {
    description: string;
    images: string[];
  };
}

export type customInfo = Api & {
  card_image: string;
  carousel_image: string;
};

export type Destinations = {
  id: string;
  data: {
    tours: string[];
    boarding: string[];
    custom_info: customInfo;

    created_ts: number;
    departures: string[];
    ts: number;
    visibility: boolean;
    promotions: string;
    title: string;
    meal_regimen: string;
    views: number;
    destinations_names: string[];
    expiration_ts: number;
    provider: string;
    duration: { nights: number; days: number };
    lowest_price: { price: string; currency: string; taxes: string };
  };
};
