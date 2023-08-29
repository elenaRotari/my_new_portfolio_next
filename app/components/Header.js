import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute w-full h-[100px] z-30 flex items-center px-8 xl:px-0 xl:h-[100px] lg:h-[100px]">
      <div className="container mx-auto h-[100%]">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              width={200}
              height={50}
              alt="logo"
              priority={true}
              className="flex h-[80px] lg:h-[120px] xl:h-[170px] "
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
