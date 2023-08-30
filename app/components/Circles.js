import Image from "next/image";

const Circles = () => {
  return (
    <div className="mix-blend-color-dodge rotate-180 absolute w-[200px] xl:w-[800px] bottom-0 right-0 opacity-50">
      <Image
        src="/top-left-img1-3.png"
        width={500}
        height={500}
        alt="bottom-right-iimage"
      />
    </div>
  );
};

export default Circles;
