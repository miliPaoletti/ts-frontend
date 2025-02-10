import { MdEmail } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import Contact from "components/ui/Footer/Contact";
import TitleFooter from "components/ui/Titles/TitleFooter";
import SocialMediaLink from "components/ui/Links/SocialMediaLink";
import { COMPANY_DATA, FOOTER, PATHNAMES } from "components/utils/constants";
import { useTracker } from "components/tracker/useTracker";
import {
  CLICK_FB_LINK,
  CLICK_IG_LINK,
  CLICK_LOCATION,
  CLICK_NUMBER,
  CLICK_EMAIL,
} from "components/tracker/constants";
import { ModalCookies } from "components/cookies/ModalCookies";
import React from "react";
import Link from "next/link";
import Logo from "components/Icons/Logo";

function Footer() {
  const { handlePreClickAction: clickFb } = useTracker(CLICK_FB_LINK);
  const { handlePreClickAction: clickIg } = useTracker(CLICK_IG_LINK);
  const { handlePreClickAction: clickLocation } = useTracker(CLICK_LOCATION);
  const { handlePreClickAction: clickNumber } = useTracker(CLICK_NUMBER);
  const { handlePreClickAction: clickEmail } = useTracker(CLICK_EMAIL);
  CLICK_EMAIL;
  return (
    <footer className="footer">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 space-y-5 cursor-default ">
        <div className="flex flex-col justify-center items-center space-y-2 ">
          <div className="flex px-3 sm:px-12 ">
            <Link href={PATHNAMES.home}>
              <Logo className="cursor-pointer h-fit w-[250px]" />
            </Link>
          </div>
          <div>{COMPANY_DATA.legajo}</div>
          <div className="pt-8">
            <ModalCookies
              trigger={<button>Configurar Cookies</button>}
              isFooter={true}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 items-center lg:items-start justify-end ">
          <TitleFooter text={FOOTER.title} />

          <Contact
            text={COMPANY_DATA.address}
            icon={<MdLocationOn className="icon-footer" />}
            href={COMPANY_DATA.linkLocation}
            onClick={() => {
              clickLocation();
            }}
          />
          <Contact
            text={COMPANY_DATA.openHours}
            icon={<MdWatchLater className="icon-footer" />}
            apply={false}
          />
          <Contact
            text={COMPANY_DATA.number}
            icon={<MdPermPhoneMsg className="icon-footer" />}
            href={COMPANY_DATA.linkNumber}
            apply={false}
            onClick={() => {
              clickNumber();
            }}
          />
          <Contact
            text={COMPANY_DATA.email}
            icon={<MdEmail className="icon-footer" />}
            href={COMPANY_DATA.linkEmail}
            onClick={() => {
              clickEmail();
            }}
          />
          <Contact
            href="/trabaja-con-nosotros"
            icon={<MdWork />}
            text={COMPANY_DATA.workWithUs}
          />

          {/* TODO: add typescript to social  media */}
          <div className="flex space-x-4 pt-3 ">
            <SocialMediaLink
              href={COMPANY_DATA.linkIg}
              icon={<BsInstagram color="#ff7700" />}
              text={COMPANY_DATA.ig}
              footer={true}
              onClick={() => {
                clickIg();
              }}
            />

            <SocialMediaLink
              href={COMPANY_DATA.linkFb}
              icon={<FaFacebookSquare color="#42a5f5" />}
              text={COMPANY_DATA.fb}
              footer={true}
              onClick={() => {
                clickFb();
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
