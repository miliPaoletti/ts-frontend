import { URL_MAIL_DEV } from "components/utils/constants";

const MAIL_ROUTE = `${
  process.env.NEXT_PUBLIC_MAILROUTE === undefined
    ? URL_MAIL_DEV
    : `${process.env.NEXT_PUBLIC_MAILROUTE}`
}`;

export default function registerForm(
  { name, phoneNumber, passengers, email, consult },
  dataForConsult
) {
  const data = {
    name: name,
    phone_number: phoneNumber,
    passengers: passengers,
    mail: email,
    request: consult,
    DESTINATION: dataForConsult?.DESTINATION,
    URL: dataForConsult?.URL,
    PRICE: dataForConsult?.PRICE,
    NIGHTS: dataForConsult?.NIGHTS,
    DESTINATIONS_NAMES: dataForConsult?.DESTINATIONS_NAMES,
    REGIMEN: dataForConsult?.REGIMEN,
    BOARDING: dataForConsult?.BOARDING,
    PROVIDER: dataForConsult?.PROVIDER,
    MONTHS: dataForConsult?.MONTHS,
    DAYS: dataForConsult?.DAYS,

  };
  return fetch(`${MAIL_ROUTE}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Response is NOT ok");

    return true;
  });
}
