import { useRouter } from "next/router";

export default function Custom500() {
  const router = useRouter();
  return (
    <div className="flex items-center h-screen w-screen justify-center bg-gray-200">
      <div className="text-center space-y-11">
        <p className="text-3xl">Se produjo un error. Intentalo nuevamente</p>
        <button
          className="button-primary"
          onClick={() => {
            router.push("/");
          }}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
