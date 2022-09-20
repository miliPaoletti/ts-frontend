import { BsInstagram } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdRadio } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import SocialMediaLink from "components/ui/Links/SocialMediaLink";

const AboutUs = () => {
  return (
    <div className="">
      <section className="about-us  text-white cursor-default md:text-center lg:text-left">
        <div className="container-general z-40 pb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 align-center">
            <div className="space-y-5 px-11">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
                Turismo Serrano
              </h1>
              <div className="text-md sm:text-lg font-medium xl:text-xl text-justify">
                Turismo Serrano es una agencia de viajes y turismo fundada el 1
                de diciembre de 1991. Conformamos una empresa familiar
                especializada en salidas grupales propias tanto como salidas
                nacionales e internacionales. Contamos con un equipo de trabajo
                eficiente, honesto y comprometido con la prestación de un
                servicio integral y personalizado. Con el objetivo de cubrir las
                necesidades de nuestros clientes, brindamos asesoría efectiva en
                la obtención de billetes aéreos y de micro, seguros de
                asistencia médica, alquiler de vehículos, alquiler de
                departamentos temporarios y guiadas exclusivas.
              </div>
            </div>
            <div className="z-40 flex justify-center lg:justify-end mt-10 lg:mt-0">
              <div className="space-y-1 md:space-y-2 lg:space-y-4 px-11 ">
                <SocialMediaLink
                  icon={<MdLocationOn />}
                  text="San Martin 186 - Tandil - Argentina"
                />
                <SocialMediaLink
                  icon={<MdPermPhoneMsg />}
                  text="(54 249) 443 1894)"
                />

                <SocialMediaLink
                  href="http://megatandil.com.ar"
                  icon={<MdRadio />}
                  text="MegaStereo (100.9) - Jueves 12hs"
                />
                <SocialMediaLink
                  href="https://www.eleco.com.ar/tandilfm"
                  icon={<MdRadio />}
                  text="Tandil FM - El Eco "
                />
                <SocialMediaLink
                  href="https://www.eleco.com.ar/ecotv"
                  icon={<MdDesktopWindows />}
                  text="Tandil Despierta (Eco Tv) - Viernes 9hs"
                />

                <SocialMediaLink
                  href="https://www.instagram.com/turismo.serrano/"
                  icon={<BsInstagram />}
                  text="turismo.serrano"
                  own_style="text-orange-950"
                />

                <SocialMediaLink
                  href="https://www.facebook.com/Turismo-Serrano-EVT-179888245394193/"
                  icon={<MdFacebook />}
                  text="Turismo Serrano (E.V.T)"
                  own_style="text-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
