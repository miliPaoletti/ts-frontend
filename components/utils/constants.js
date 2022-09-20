export const CONSULT = "consultar";
export const ALL = "todos";
export const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const IMG_DEFAULT = `${
  process.env.NEXT_PUBLIC_BASE_PATH === undefined
    ? "default_img.jpg"
    : `${process.env.NEXT_PUBLIC_BASE_PATH}/default_img.jpg`
}`;

export const RESULTS_SEARCH = 6;
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";
export const URL_WHATSAPP_test = "https://wa.me/+5492494563653/text=holi";
// whatsapp://send/?phone=0000000&text=example"
const whatsAppText = "Turismo Serrano. En que podemos ayudarte?";
// ?text=${encodeURIComponent(whatsAppText)}
export const URL_WHATSAPP = `https://wa.me/5492494563653`;
export const MEDIUM_CARD = "mediumCard";
export const INFO_NOT_UPLOADED =
  "La info todavia no esta cargada, envie su consulta y le daremos mas informacion a la brevedad";
export const FORM = "FORM";
export const INFO_WHATSAPP = "O consultanos por whatsapp";
