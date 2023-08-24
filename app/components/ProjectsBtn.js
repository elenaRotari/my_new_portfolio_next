import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[280px] h-[280px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={131}
          height={141}
          alt={"projects-btn  "}
          className=" w-full h-full max-w-[131px] max-h-[141px] absolute top-[65px] animate-spin-slow"
        />
        <HiArrowRight className="text-4xl text-accent  absolute group-hover:translate-x-4 transition-all duration-500  " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
