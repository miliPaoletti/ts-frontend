import { MdEmail } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import Contact from "components/ui/Footer/Contact";
import TitleFooter from "components/ui/Titles/TitleFooter";
import SocialMediaLink from "components/ui/Links/SocialMediaLink";
import Link from "next/link";
import Logo from "../Icons/Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 space-y-5 cursor-default ">
        <div className="flex flex-col justify-center items-center space-y-5 ">
          <div className="flex px-3 sm:px-12 ">
            <Link href="/">
              <a>
                <Logo className="logo" />
              </a>
            </Link>
          </div>
          <div> Legajo 7320</div>
        </div>

        <div className="flex flex-col space-y-2 items-center lg:items-start justify-end ">
          <TitleFooter text="Información de contacto" />
          <Contact
            text="San Martin 186 - Tandil - Argentina"
            icon={<MdLocationOn className="icon-footer" />}
          />
          <Contact
            text="Atención al Público Lun a Vie: 10 a 17"
            icon={<MdWatchLater className="icon-footer" />}
          />
          <Contact
            text="(54 249) 443 1894"
            icon={<MdPermPhoneMsg className="icon-footer" />}
          />
          <Contact
            text="info@turismoserrano.com"
            icon={<MdEmail className="icon-footer" />}
          />

          <div className="flex space-x-4 pt-3 ">
            <SocialMediaLink
              href="https://www.instagram.com/turismo.serrano/"
              icon={<BsInstagram />}
              text="turismo.serrano"
              own_style="text-orange-950"
              footer={true}
            />

            <SocialMediaLink
              href="https://www.facebook.com/Turismo-Serrano-EVT-179888245394193/"
              icon={<MdFacebook />}
              text="Turismo Serrano (E.V.T)"
              own_style="text-blue-400"
              footer={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
