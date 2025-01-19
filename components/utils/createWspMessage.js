import { URL_WHATSAPP } from "./constants";

export const createWspMessage = (destination) => {
  const mensaje = `Hola, quisiera obtener más información sobre el destino ${destination.title}`;
  return `${URL_WHATSAPP}/?text=${encodeURIComponent(mensaje)}`;
};
