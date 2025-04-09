export type CustomInfo = {
  card_image: string;
  carousel_image: string | null;
  [key: string]:
    | {
        description: string;
        images: string[];
      }
    | string
    | null;
};

export type duration = {
  nights: number; // -1 or a value
  days: number;
};

export type DESTINATION_PROPS = {
  boarding: string[];
  created_ts: number;
  custom_info: CustomInfo;
  departures: string[];
  destinations_names: string[];
  duration: duration;
  expiration_ts: number;
  lowest_price: {
    currency: string;
    price: string;
    taxes: string;
  };
  meal_regimen: string;
  provider: string;
  title: string;
  ts: number;
  views: number;
  visibility: boolean;
  includes: string | string[];
  promotions: string;
  tours: string[] | null | undefined;
};

export type DestinationType = {
  id: string;
  data: DESTINATION_PROPS;
};

export const INIT_DATA = {
  boarding: [],
  created_ts: 0,
  custom_info: {
    card_image: "",
    carousel_image: "",
  },
  departures: [],
  destinations_names: [],
  expiration_ts: 0,
  includes: [],
  lowest_price: {
    currency: "",
    price: "",
    taxes: "",
  },
  meal_regimen: "",
  provider: "",
  ts: 0,
  tours: [],
  duration: {
    days: 0,
    nights: 0,
  },

  promotions: "0",
  title: "",
  visibility: true,
  views: 0,
};
