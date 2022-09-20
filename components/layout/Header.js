import { ModalConsult } from "components/ui/Modals/ModalConsult";
import Link from "next/link";
import Logo from "../Icons/Logo";

function Header() {
  return (
    <header>
      <div className="header">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="text-black-950">
          <ul className="flex space-x-6 text-sm sm:text-lg font-bold">
            <Link href="/">
              <a>
                <li className="hidden sm:block">Home</li>
              </a>
            </Link>
            <Link
              href={{
                pathname: "search",
                query: { destination: "todos", month: "todos" },
              }}
            >
              <a>
                <li>Buscar</li>
              </a>
            </Link>
            <ModalConsult dataForConsult="" trigger={<li>Contacto</li>} />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
