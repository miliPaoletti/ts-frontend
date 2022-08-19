import React from "react";

const SocialMediaLink = ({ href, text, icon, own_style, footer }) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className={`about-us-container ${href ? " cursor-pointer" : ""} `}
    >
      <div className={`about-us-icons ${own_style}`}>{icon}</div>
      {!footer && <span className="about-us-text">{text}</span>}
    </a>
  );
};

export default SocialMediaLink;
