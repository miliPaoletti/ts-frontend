import { useRouter } from "next/router";
import { FormTest } from "./workWithUsForm";

export const ThankYou = () => {
  const router = useRouter();
  return (
    <div className="bg-search-img bg-no-repeat bg-cover bg-center h-screen py-8 ">
      <div className="flex items-center h-full justify-center w-full ">
        <div className="bg-black-900/90 rounded-2xl p-8 space-y-6 w-full md:w-96">
          <h1 className="text-4xl font-bold text-white text-center">
            ¡Gracias!
          </h1>
          <p className="text-white text-lg">
            Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto
            contigo lo antes posible.
          </p>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="button-primary  w-full"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};
