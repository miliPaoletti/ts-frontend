import { URL_WHATSAPP } from "./constants";

export const createWspMessage = (destination) => {
  const mensaje = `Hola, quisiera consultar sobre el siguiete paquete: ${destination.url}`;
  return `${URL_WHATSAPP}/?text=${encodeURIComponent(mensaje)}`;
};
