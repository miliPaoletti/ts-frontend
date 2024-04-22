import { URL_MAIL_DEV } from "components/utils/constants";

const MAIL_ROUTE = `${
  process.env.NEXT_PUBLIC_MAILROUTE === undefined
    ? URL_MAIL_DEV
    : `${process.env.NEXT_PUBLIC_MAILROUTE}`
}`;

export default async function registerCV({
  name,
  cv,
  position,
  other_position,
  email,
  consult,
}) {
  const data = {
    nombre: name,
    attachments: cv,
    posicion: `${position} - ${other_position}`,
    email: email,
    consulta: consult,
    accessKey: "d8da0cbe-c64d-4388-86a6-b78acdabd109",
  };

  const formData = new FormData();

  formData.append("file", cv);
  formData.append(data);
  const data1 = new URLSearchParams(formData);
  // formData.append("test", "StringValueTest");

  // return true;
  const res = await fetch("https://formsubmit.co/milagros.paoletti@gmail.com", {
    method: "POST",
    body: data1,
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log(res);
  const json = await res.json();
  console.log(json);
  return;
}
