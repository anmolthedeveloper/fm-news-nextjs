import Image from "next/image";
export default function HeaderContent({ isActive }: any) {
  return (
    <div className="my-5">
      <Image
        quality={100}
        src={"/assets/images/image-web-3-desktop.jpg"}
        height={1000}
        width={1000}
        alt="main image"
        className={"w-[100vw] hidden sm:block"}
      />
      <Image
        quality={100}
        src={"/assets/images/image-web-3-mobile.jpg"}
        height={1000}
        width={1000}
        alt="main image"
        className={"w-[100vw] sm:hidden"}
      />
      <h1 className="text-5xl font-extrabold my-5">
        The Bright Future of Web 3.0?
      </h1>
      <p className="text-darkGrayishBlue">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <p className="uppercase mt-5 px-10 py-4 text-white font-bold bg-softRed inline-block tracking-[.2em]">
        Read more
      </p>
    </div>
  );
}
