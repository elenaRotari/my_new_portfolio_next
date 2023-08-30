// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },

  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// next
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((item, index) => {
          return (
            <Link
              href={item.path}
              key={index}
              className={`
              hover:text-accent transition-all duration-600 items-center flex relative group `}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex ">
                <div className=" relative flex text-accent items-center p-[10px] ">
                  <div className="text-[16px] leading-none font-semibold capitalize ">
                    {item.name}
                  </div>

                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{item.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
