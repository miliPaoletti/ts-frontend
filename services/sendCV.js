import { URL_MAIL_DEV } from "components/utils/constants";

const MAIL_ROUTE = `${
  process.env.NEXT_PUBLIC_MAILROUTE === undefined
    ? URL_MAIL_DEV
    : `${process.env.NEXT_PUBLIC_MAILROUTE}`
}`;

export default function registerCV({
  name,
  cv,
  position,
  other_position,
  email,
  consult,
}) {
  const data = {
    nombre: name,
    cv: cv,
    posicion: `${position} - ${other_position}`,
    mail: email,
    consulta: consult,
  };
  console.log(data);
  return true;
  //   return fetch(`${MAIL_ROUTE}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => {
  //     if (!res.ok) throw new Error("Response is NOT ok");

  //     return true;
  //   });
}
