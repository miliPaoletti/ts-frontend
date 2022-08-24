import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex items-center h-screen w-screen justify-center bg-gray-200">
      <div className="text-center space-y-11">
        <p className="text-3xl">Página no disponible</p>
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
