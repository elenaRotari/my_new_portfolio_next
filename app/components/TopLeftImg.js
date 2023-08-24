import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-[-50px] top-[-30px]  w-[200px] xl:w-[800px] opacity-40">
      <Image
        src="/top-left-img.png"
        width={500}
        height={500}
        alt="Top Left Image"
      />
    </div>
  );
};

export default TopLeftImg;
