export const Promotion = ({ promotion, component }) => {
  if (promotion === 0) {
    return;
  }
  if (promotion === -1) {
    return (
      <div
        className={`bg-yellow-500 text-white text-center font-[Rubik]
        ${
          component === "card"
            ? "shadow-md z-10 absolute right-[15px] rounded-b-lg py-2 px-4"
            : "font-semibold text-sm p-2 py-4 rounded-md"
        } `}
      >
        <div className="text-[11px] font-bold">
          {component === "card" ? (
            <>
              Promoción
              <br />
              Disponible
            </>
          ) : (
            "Consultar promoción disponible"
          )}
        </div>
      </div>
    );
  } else {
    if (component === "card") {
      return (
        <div className="shadow-md z-10 absolute right-[15px]  bg-yellow-500 text-white rounded-b-lg py-2 px-4 text-center font-[Rubik]">
          <div className="font-bold text-lg">
            {promotion}% <span className="text-base font-bold">OFF</span>
          </div>
          <div className="text-[11px] font-bold">2do pasajero</div>
        </div>
      );
    } else {
      return (
        <div className="bg-yellow-500 text-white font-semibold text-lg text-center p-2 py-4 font-[Rubik] rounded-md">
          2do pasajero {promotion}% OFF
        </div>
      );
    }
  }
};
