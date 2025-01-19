import { FORM, URL_WHATSAPP } from "components/utils/constants";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = ({ page, onClick }) => {
  // TODO: CHECK IF WE WANT TO PUT A DEFAULT MESSAGE WHEN CLICKING ON THE WHATSAPP BUTTON
  const mensaje = "";
  const enlace = `${URL_WHATSAPP}/?text=${encodeURIComponent(mensaje)}`;
  return (
    <div
      className={`${
        page === FORM
          ? "text-xl p-"
          : "bottom-16 left-[80%] md:left-[90%] lg:left-[92%] p-3 text-4xl"
      } rounded-full bg-green-400 sticky w-fit z-[9999] hover:bg-green-500 transition transform duration-200 ease-out`}
    >
      <Link href={enlace}>
        <a rel="noreferrer" target="_blank" onClick={onClick}>
          <BsWhatsapp className=" text-white" />
        </a>
      </Link>
    </div>
  );
};

export default Whatsapp;
