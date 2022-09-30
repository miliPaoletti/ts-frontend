const MAIL_ROUTE = `${
  process.env.NEXT_PUBLIC_MAILROUTE === undefined
    ? "https://ts-contact-us-app-dev.onrender.com"
    : `${process.env.NEXT_PUBLIC_MAILROUTE}`
}`;

export default function registerForm(
  { name, phoneNumber, passengers, email, consult },
  dataForConsult
) {
  const textCons = `${consult}
  ---------
  Datos de la consulta:  ${dataForConsult}`;
  const data = {
    name: name,
    phone_number: phoneNumber,
    passengers: passengers,
    mail: email,
    text: textCons,
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
