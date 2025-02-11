export type DestinationType = {
  id: string;
  data: {
    boarding: string[];
    created_ts: number;
    custom_info: {
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
    departures: string[];
    destinations_names: string[];
    duration: {
      nights: number; // -1 or a value
      days: number;
    };
    expiration_ts: number;
    lowest_price: {
      currency: string;
      price: string;
    };
    meal_regimen: string;
    provider: string;
    title: string;
    ts: number;
    views: number;
    visibility: boolean;
  };
};
