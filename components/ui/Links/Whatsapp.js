import { URL_WHATSAPP } from "components/utils/constants";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  return (
    <div className="rounded-full bg-green-400 sticky bottom-10 left-10 w-fit p-3  z-[9999]">
      <Link href={URL_WHATSAPP}>
        <a rel="noreferrer" target="_blank">
          <BsWhatsapp className="text-4xl text-white" />
        </a>
      </Link>
    </div>
  );
};

export default Whatsapp;
