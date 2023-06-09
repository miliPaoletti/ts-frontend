import { BsInstagram } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdRadio } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import SocialMediaLink from "components/ui/Links/SocialMediaLink";
import { COMPANY_DATA } from "components/utils/constants";
import {
  CLICK_FB_LINK,
  CLICK_IG_LINK,
  CLICK_LOCATION,
  CLICK_NUMBER,
  CLICK_RADIO_LINK,
} from "components/tracker/constants";
import { useTracker } from "components/tracker/useTracker";

const AboutUs = () => {
  const { handlePreClickAction: clickIg } = useTracker(CLICK_IG_LINK);
  const { handlePreClickAction: clickFb } = useTracker(CLICK_FB_LINK);
  const { handlePreClickAction: clickRadio } = useTracker(CLICK_RADIO_LINK);
  const { handlePreClickAction: clickLocation } = useTracker(CLICK_LOCATION);
  const { handlePreClickAction: clickNumber } = useTracker(CLICK_NUMBER);
  return (
    <section className="about-us">
      <div className="container-general z-40 pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 align-center">
          <div className="space-y-5 px-11">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center">
              Sobre Nosotros
            </h1>
            <div className="text-md sm:text-lg font-medium xl:text-xl text-justify">
              {COMPANY_DATA.description}
            </div>
          </div>
          <div className="z-40 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="space-y-1 md:space-y-2 lg:space-y-4 px-11 ">
              <SocialMediaLink
                icon={<MdLocationOn />}
                text={COMPANY_DATA.address}
                href={COMPANY_DATA.linkLocation}
                apply={true}
                onClick={() => clickLocation()}
              />
              <SocialMediaLink
                icon={<MdPermPhoneMsg />}
                text={COMPANY_DATA.number}
                apply={false}
                href={COMPANY_DATA.linkNumber}
                onClick={() => {
                  clickNumber();
                }}
              />

              <SocialMediaLink
                href={COMPANY_DATA.linkRadioMega}
                icon={<MdRadio />}
                text={COMPANY_DATA.radioMega}
                apply={true}
                onClick={() => {
                  clickRadio({ radio: COMPANY_DATA.radioMega });
                }}
              />
              <SocialMediaLink
                href={COMPANY_DATA.linkEcoTv}
                icon={<MdDesktopWindows />}
                text={COMPANY_DATA.ecoTv}
                apply={true}
                onClick={() => {
                  clickRadio({ radio: COMPANY_DATA.ecoTv });
                }}
              />
              <SocialMediaLink
                href={COMPANY_DATA.linkRadioEco}
                icon={<MdRadio />}
                text={COMPANY_DATA.radioEco}
                apply={true}
                onClick={() => {
                  clickRadio({ radio: COMPANY_DATA.radioEco });
                }}
              />

              <SocialMediaLink
                href={COMPANY_DATA.linkIg}
                icon={<BsInstagram />}
                text={COMPANY_DATA.ig}
                own_style="text-orange-950"
                apply={true}
                onClick={() => {
                  clickIg();
                }}
              />

              <SocialMediaLink
                href={COMPANY_DATA.linkFb}
                icon={<FaFacebookSquare />}
                text={COMPANY_DATA.fb}
                own_style="text-blue-400"
                apply={true}
                onClick={() => {
                  clickFb();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
