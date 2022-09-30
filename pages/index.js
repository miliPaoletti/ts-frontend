import Index from "components/content/Index";
import Template from "components/layout/Template";
import { COMPANY_DATA } from "components/utils/constants";

export default function Home() {
  return <Template content={<Index />} title={COMPANY_DATA.name} />;
}
