import Link from "next/link";
import React from "react";

type SocialMediaLinkProps = {
  href: string;
  text: string;
  icon: React.ReactNode;
  footer?: boolean;
  apply: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const SocialMediaLink = ({
  href,
  text,
  icon,
  footer = false,
  apply,
  onClick,
}: SocialMediaLinkProps) => {
  return (
    <Link href={href} passHref rel="noreferrer">
      <a
        target={apply ? "_blank" : "_self"}
        className={`flex items-center space-x-2 justify-start ${
          href ? " cursor-pointer" : ""
        } `}
        onClick={onClick}
      >
        <div className={"text-xl md:text-3xl"}>{icon}</div>
        {!footer && (
          <span className="text-sm sm:text-base xl:text-xl font-bold">
            {text}
          </span>
        )}
      </a>
    </Link>
  );
};

export default SocialMediaLink;
