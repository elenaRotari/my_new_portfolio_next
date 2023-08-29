import Link from "next/link";

import {
  FaLinkedin,
  FaFacebookSquare,
  FaXingSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-x-4 text-m lg:text-xl xl:text-2xl   top-[120px]">
      <Link
        href={"https://github.com/elenaRotari"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaGithubSquare />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/elena-rotari-45b330243/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={"https://www.xing.com/profile/Elena_Rotari2/cv"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaXingSquare />
      </Link>
      <Link
        href={"https://www.facebook.com/elena.rotary.16/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <FaFacebookSquare />
      </Link>
    </div>
  );
};

export default Socials;
