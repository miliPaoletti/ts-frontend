export default function registerForm(
  { name, phoneNumber, passengers, email, consult },
  dataForConsult
) {
  const data = {
    $nombre: name,
    $email: email,
    $cantidad_de_pasajeros: passengers,
    $numbero_de_telefono: phoneNumber,
    $consulta: consult,
    $destino_consultado: dataForConsult?.DESTINATION,

    $URL: dataForConsult?.URL,
    $precio: dataForConsult?.PRICE,
    $destinos_incluidos: dataForConsult?.DESTINATIONS_NAMES,
    $regimen: dataForConsult?.REGIMEN,
    $embarque: dataForConsult?.BOARDING,
    $proveedor: dataForConsult?.PROVIDER,
    $meses: dataForConsult?.MONTHS,
    $dias: dataForConsult?.DAYS,
    accessKey: process.env.NEXT_PUBLIC_STATIC_FORM_ACCESS_KEY,
  };

  return fetch(`https://api.staticforms.xyz/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Response is NOT ok");

    return true;
  });
}
