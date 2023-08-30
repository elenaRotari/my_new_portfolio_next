import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0  w-[200px] xl:w-[800px] opacity-30 mix-blend-color-dodge">
      <Image
        src="/top-left-img1-3.png"
        width={500}
        height={500}
        alt="Top Left Image"
      />
    </div>
  );
};

export default TopLeftImg;
