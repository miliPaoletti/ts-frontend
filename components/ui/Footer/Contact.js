import Link from "next/link";

const Contact = ({ icon, text, href, apply, onClick }) => {
  return (
    //   {/* TODO: check if data is undefined */}
    <Link
      className="flex items-center space-x-2"
      href={href ?? ""}
      rel="noreferrer"
      target={apply ? "_blank" : ""}
      onClick={onClick}
    >
      {icon}
      <span className="text-md md:text-lg">{text}</span>
    </Link>
  );
};

export default Contact;
