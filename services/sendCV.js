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
  const formData = new FormData();

  formData.append("attachment", cv);
  formData.append("name", name);
  formData.append("mail", email);
  formData.append("position", `${position} - ${other_position}`);

  formData.append("token", process.env.NEXT_PUBLIC_EMAIL_TOKEN ?? "");
  if (consult !== "") {
    formData.append("request", consult);
  }
  return fetch(`${MAIL_ROUTE}/sendMailWithAttachments`, {
    method: "POST",
    body: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    if (!res.ok) throw new Error("Response is NOT ok");
    return true;
  });
}