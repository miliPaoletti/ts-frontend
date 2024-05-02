import Template from "components/layout/Template";
import { ThankYou } from "components/workWithUs/ThankYou";
import { WorkWithUs } from "components/workWithUs/workWithUs";
import { FormTest } from "components/workWithUs/workWithUsForm";

export default function ThankYouPage() {
  return <Template content={<ThankYou />} title="Gracias por contactarnos" />;
}
