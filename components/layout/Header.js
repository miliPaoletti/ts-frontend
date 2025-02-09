import { ALL, HEADER, PATHNAMES } from "components/utils/constants";
import Link from "next/link";
import Logo from "../Icons/Logo";
import { useTracker } from "components/tracker/useTracker";
import { CLICK_BUSCAR_BUTTON } from "components/tracker/constants";

function Header() {
  const { handlePreClickAction: clickSearch } = useTracker(CLICK_BUSCAR_BUTTON);
  return (
    <header>
      <div className="header">
        <Link href={PATHNAMES.home}>
          <a>
            <Logo />
          </a>
        </Link>
        <div className="text-black-950">
          <ul className="flex space-x-6 text-sm sm:text-lg font-bold">
            <Link href={PATHNAMES.home}>
              <a>
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
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
