import Link from "next/link";
import React from "react";

type SocialMediaProps = {
  href: string;
  text: string;
  icon: React.ReactNode;
  own_style?: string;
  footer?: boolean;
  apply: boolean;
  onClick: () => void;
};

const SocialMediaLink = ({
  href,
  text,
  icon,
  own_style,
  footer,
  apply,
  onClick,
}: SocialMediaProps) => {
  return (
    <Link
      href={href}
      rel="noreferrer"
      target={apply ? "_blank" : ""}
      className={`about-us-container ${href ? " cursor-pointer" : ""} `}
      onClick={onClick}
    >
      <div className={`about-us-icons ${own_style}`}>{icon}</div>
      {!footer && <span className="about-us-text">{text}</span>}
    </Link>
  );
};

export default SocialMediaLink;
