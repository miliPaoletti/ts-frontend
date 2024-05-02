import { URL_MAIL_DEV } from "components/utils/constants";

const MAIL_ROUTE = `${
  process.env.NEXT_PUBLIC_MAILROUTE === undefined
    ? URL_MAIL_DEV
    : `${process.env.NEXT_PUBLIC_MAILROUTE}`
}`;
export default function registerForm(
  { name, phoneNumber, passengers, email, consult, cv },
  dataForConsult
) {
  const data = {
    name: name,
    mail: email,
    passengers: passengers === "" ? undefined : passengers,
    phone_number: phoneNumber === "" ? undefined : phoneNumber,
    request: consult,
    destination: dataForConsult?.DESTINATION,
    cv: cv,
    url: dataForConsult?.URL,
    price: dataForConsult?.PRICE,
    destination_names: dataForConsult?.DESTINATIONS_NAMES,
    regimen: dataForConsult?.REGIMEN,
    boarding: dataForConsult?.BOARDING,
    provider: dataForConsult?.PROVIDER,
    months: dataForConsult?.MONTHS,
    days: dataForConsult?.DAYS,
    token: process.env.NEXT_PUBLIC_EMAIL_TOKEN ?? "",
  };

  return fetch(`${MAIL_ROUTE}/sendMail`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Response is NOT ok");

    return true;
  });
}
