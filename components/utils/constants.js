export const CONSULT = "Consultar";
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
    : `/${process.env.NEXT_PUBLIC_BASE_PATH}/default_img.jpg`
}`;

export const SEARCH_IMG = "search_img.jpeg";
export const RESULTS_SEARCH = 6;
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";
export const URL_WHATSAPP = `https://wa.me/5492494563653`;
export const MEDIUM_CARD = "mediumCard";
export const INFO_NOT_UPLOADED =
  "El destino elegido aún no tiene información cargada. Envíe su consulta y le responderemos a la brevedad.";
export const FORM = "FORM";
export const INFO_WHATSAPP = "O consultanos por ";
export const STATIC_FORMS_URL_DEV = "";
export const DESTINATION = "DESTINATION";
export const URL = "URL";
export const PRICE = "PRICE";
export const NIGHTS = "NIGHTS";
export const DESTINATIONS_NAMES = "DESTINATIONS NAMES";
export const REGIMEN = "REGIMEN";
export const BOARDING = "BOARDING";
export const PROVIDER = "PROVIDER";
export const MONTHS = "MONTHS";
export const DAYS = "DAYS";

export const TITLE_INDEX = {
  text: "Destinos ",
  text2: "Destacados",
};

export const TITLE_DESTINATIONS_RELATED = {
  text: "Destinos ",
  text2: "Relacionados",
};

export const FOOTER = {
  title: "Información de contacto",
};

const email = "info@turismoserrano.com";

export const COMPANY_DATA = {
  name: "Turismo Serrano",
  description:
    "Turismo Serrano es una agencia de viajes y turismo fundada el 1 de diciembre de 1991. Conformamos una empresa familiar especializada tanto en salidas grupales propias como en salidas nacionales e internacionales. Contamos con un equipo de trabajo eficiente, honesto y comprometido con la prestación de un servicio integral y personalizado. Con el objetivo de cubrir las necesidades de nuestros clientes, brindamos asesoría efectiva en la obtención de billetes aéreos y de micro, seguros de asistencia médica, alquiler de vehículos, alquiler de departamentos temporarios y guiadas exclusivas.",
  address: "San Martin 186 - Tandil - Argentina",
  number: "(54 249) 443 1894",
  linkRadioMega: "http://megatandil.com.ar",
  radioMega: "MegaStereo (100.9) - Miércoles 12hs",
  linkRadioEco: "https://www.eleco.com.ar/tandilfm",
  radioEco: "Tandil FM - El Eco - Viernes 9hs",
  linkEcoTv: "https://www.eleco.com.ar/ecotv",
  ecoTv: "Tandil Despierta (Eco Tv) - Viernes 9hs",
  linkIg: "https://www.instagram.com/turismo.serrano/",
  ig: "turismo.serrano",
  linkFb: "https://www.facebook.com/Turismo-Serrano-EVT-179888245394193/",
  fb: "Turismo Serrano (E.V.T)",
  legajo: "Legajo 7320",
  openHours: "Atención al Público Lun a Vie: 10 a 17hs",
  workWithUs: "Trabaja con nosotros",
  email: email,
  linkLocation:
    "https://www.google.com/maps/dir//turismo+serrano/@1.1965479,-71.241989,3z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95911f9bdb035e47:0x9efcc38df263ae10!2m2!1d-59.1425245!2d-37.3284937",
  linkNumber: "tel:542494431894",
  linkEmail: `mailto:${email}`,
};

export const HEADER = {
  home: "inicio",
  search: "buscar",
  contact: "contacto",
};

export const BUSCAR = "buscar";

export const PATHNAMES = {
  search: "search",
  destination: "destination",
  home: "/",
  error404: "404",
};

export const NOTIFICATIONS = {
  loading: "Enviando consulta...",
  success: "Tu consulta fue enviada correctamente",
  fail: "Hubo un error al enviar la consulta",
};

export const SEARCH_PAGE = {
  textBanner: "¿Buscás otro destino?",
  firstInput: "Destino",
  secondInput: "Mes",
  multipleDest: "Destinos",
  multipleDest2: "encontrados",
  singleDest: "Destino",
  singleDest2: "encontrado",
  showMore: "Mostrar más",
};

export const DROPDOWN = {
  orderBy: "Ordenar por",
  populars: "Populares",
  asc: "Precio asc",
  desc: "Precio desc",
};

export const FORM_DATA = {
  title: "  Consultanos sobre tu próximo destino",
  name: "Nombre",
  phone: "Número de teléfono",
  passengers: "Cantidad de pasajeros",
  email: "Correo electrónico",
  consult: "Consulta",
  send: "Enviar",
  validations: {
    emailRequired: "Email requerido",
    emailInvalid: "Dirección de correo inválida",
    nameRequired: "Nombre requerido",
    phoneRequired: "Número de teléfono requerido",
    passengersRequired: "Cantidad de pasajeros requerida",
    consultRequired: "Por favor, escriba su consulta",
  },
};

export const FORM_WORK_WITH_US_DATA = {
  title: "Trabaja con nosotros!",
  name: "Nombre",
  email: "Correo electrónico",
  consult: "Cuentanos por que te queres unir a nuestro equipo",
  cv: "Adjuntar Curriculum",
  position: "Posición",
  other_position: "Indique el puesto",
  send: "Enviar",
  validations: {
    emailRequired: "Email requerido",
    emailInvalid: "Dirección de correo inválida",
    nameRequired: "Nombre requerido",
    cvRequired: "CV requerido",
    positionRequired: "Puesto requerido",
    otherPositionRequired: "Especifique el puesto",
  },
};
