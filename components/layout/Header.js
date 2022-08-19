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
      </div>
    </header>
  );
}

export default Header;
