import Link from "next/link";

type ContactProps = {
  icon: React.ReactNode;
  text: string;
  href?: string;
  apply?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

type ContactBaseProps = Pick<ContactProps, "icon" | "text">;
const content = ({ icon, text }: ContactBaseProps) => {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-md md:text-lg">{text}</span>
    </div>
  );
};

const Contact = ({ icon, text, href, apply = true, onClick }: ContactProps) => {
  if (!href) {
    return content({ icon, text });
  } else {
    return (
      <Link href={href} rel="noreferrer" passHref>
        <a
          target={apply ? "_blank" : "_self"}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={onClick}
        >
          {content({ icon, text })}
        </a>
      </Link>
    );
  }
};

export default Contact;
