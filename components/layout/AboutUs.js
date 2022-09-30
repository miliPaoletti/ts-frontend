import { BsInstagram } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdRadio } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import SocialMediaLink from "components/ui/Links/SocialMediaLink";
import { COMPANY_DATA } from "components/utils/constants";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container-general z-40 pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 align-center">
          <div className="space-y-5 px-11">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
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
              />
              <SocialMediaLink
                icon={<MdPermPhoneMsg />}
                text={COMPANY_DATA.number}
                apply={false}
                href={COMPANY_DATA.linkNumber}
              />

              <SocialMediaLink
                href={COMPANY_DATA.linkRadioMega}
                icon={<MdRadio />}
                text={COMPANY_DATA.radioMega}
                apply={true}
              />
              <SocialMediaLink
                href={COMPANY_DATA.linkRadioEco}
                icon={<MdRadio />}
                text={COMPANY_DATA.radioEco}
                apply={true}
              />
              <SocialMediaLink
                href={COMPANY_DATA.linkEcoTv}
                icon={<MdDesktopWindows />}
                text={COMPANY_DATA.ecoTv}
                apply={true}
              />

              <SocialMediaLink
                href={COMPANY_DATA.linkIg}
                icon={<BsInstagram />}
                text={COMPANY_DATA.ig}
                own_style="text-orange-950"
                apply={true}
              />

              <SocialMediaLink
                href={COMPANY_DATA.linkFb}
                icon={<MdFacebook />}
                text={COMPANY_DATA.fb}
                own_style="text-blue-400"
                apply={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
