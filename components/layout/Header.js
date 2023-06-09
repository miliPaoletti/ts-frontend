import { ModalConsult } from "components/ui/Modals/ModalConsult";
import { ALL, HEADER, PATHNAMES } from "components/utils/constants";
import { useDataForConsult } from "hooks/useDataForConsult";
import Link from "next/link";
import Logo from "../Icons/Logo";
import { useTracker } from "components/tracker/useTracker";
import {
  CLICK_BUSCAR_BUTTON,
  CLICK_HOME_BUTTON,
  CLICK_LOGO,
} from "components/tracker/constants";

function Header() {
  const { dataForConsult } = useDataForConsult();
  const { handlePreClickAction: clickLogo } = useTracker(CLICK_LOGO);
  const { handlePreClickAction: clickHome } = useTracker(CLICK_HOME_BUTTON);
  const { handlePreClickAction: clickSearch } = useTracker(CLICK_BUSCAR_BUTTON);
  return (
    <header>
      <div className="header">
        <Link href={PATHNAMES.home}>
          <a
            onClick={() => {
              clickLogo();
            }}
          >
            <Logo />
          </a>
        </Link>
        <div className="text-black-950">
          <ul className="flex space-x-6 text-sm sm:text-lg font-bold">
            <Link href={PATHNAMES.home}>
              <a
                onClick={() => {
                  clickHome();
                }}
              >
                <li className="hidden sm:block">{HEADER.home}</li>
              </a>
            </Link>
            <Link
              href={{
                pathname: PATHNAMES.search,
                query: { destination: ALL, month: ALL },
              }}
            >
              <a
                onClick={() => {
                  clickSearch();
                }}
              >
                <li>{HEADER.search}</li>
              </a>
            </Link>
            <ModalConsult
              dataForConsult={dataForConsult}
              trigger={<li>{HEADER.contact}</li>}
            />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
