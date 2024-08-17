import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/hritxx" },
  { icon: <FaLinkedin />, path: "www.linkedin.com/in/hriteek-roy-4215091a4" },
  { icon: <FaTwitter />, path: "https://twitter.com/RoyHriteek" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/_hriteek007/" },
];

const Social = ({ contsinerStyles, iconStyles }) => {
  return (
    <div className={contsinerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
