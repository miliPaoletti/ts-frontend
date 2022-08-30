import { FORM, URL_WHATSAPP } from "components/utils/constants";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = ({ page }) => {
  return (
    <div
      className={`${
        page === FORM ? "text-xl p-2" : "bottom-10 left-10 p-3 text-4xl"
      } rounded-full bg-green-400 sticky w-fit z-[9999] hover:bg-green-500 transition transform duration-200 ease-out`}
    >
      <Link href={URL_WHATSAPP}>
        <a rel="noreferrer" target="_blank">
          <BsWhatsapp className=" text-white" />
        </a>
      </Link>
    </div>
  );
};

export default Whatsapp;
