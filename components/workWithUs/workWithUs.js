import WorkWithUsForm from "./workWithUsForm";
import { FormTest } from "./workWithUsForm";

export const WorkWithUs = () => {
  return (
    <div className="bg-search-img bg-no-repeat bg-cover bg-center h-screen">
      <div className="container-general">
        <section className="w-full flex items-center justify-end">
          <FormTest />
        </section>
      </div>
    </div>
  );
};
