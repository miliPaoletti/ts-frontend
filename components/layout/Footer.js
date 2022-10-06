import { MdEmail } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import Contact from "components/ui/Footer/Contact";
import TitleFooter from "components/ui/Titles/TitleFooter";
import SocialMediaLink from "components/ui/Links/SocialMediaLink";
import Link from "next/link";
import Logo from "../Icons/Logo";
import { COMPANY_DATA, FOOTER, PATHNAMES } from "components/utils/constants";

function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 space-y-5 cursor-default ">
        <div className="flex flex-col justify-center items-center space-y-5 ">
          <div className="flex px-3 sm:px-12 ">
            <Link href={PATHNAMES.home}>
              <a>
                <Logo className="logo" />
              </a>
            </Link>
          </div>
          <div>{COMPANY_DATA.legajo}</div>
        </div>

        <div className="flex flex-col space-y-2 items-center lg:items-start justify-end ">
          <TitleFooter text={FOOTER.title} />
          <Contact
            text={COMPANY_DATA.address}
            icon={<MdLocationOn className="icon-footer" />}
            href={COMPANY_DATA.linkLocation}
            apply={true}
          />
          <Contact
            text={COMPANY_DATA.openHours}
            icon={<MdWatchLater className="icon-footer" />}
          />
          <Contact
            text={COMPANY_DATA.number}
            icon={<MdPermPhoneMsg className="icon-footer" />}
            href={COMPANY_DATA.linkNumber}
            apply={false}
          />
          <Contact
            text={COMPANY_DATA.email}
            icon={<MdEmail className="icon-footer" />}
            href={COMPANY_DATA.linkEmail}
          />

          <div className="flex space-x-4 pt-3 ">
            <SocialMediaLink
              href={COMPANY_DATA.linkIg}
              icon={<BsInstagram />}
              text={COMPANY_DATA.ig}
              own_style="text-orange-950"
              footer={true}
            />

            <SocialMediaLink
              href={COMPANY_DATA.linkFb}
              icon={<FaFacebookSquare />}
              text={COMPANY_DATA.fb}
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
