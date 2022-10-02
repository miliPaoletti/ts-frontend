import { ModalConsult } from "components/ui/Modals/ModalConsult";
import { ALL, HEADER, PATHNAMES } from "components/utils/constants";
import { useDataForConsult } from "hooks/useDataForConsult";
import Link from "next/link";
import Logo from "../Icons/Logo";

function Header() {
  const { dataForConsult } = useDataForConsult();

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
              <a>
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
