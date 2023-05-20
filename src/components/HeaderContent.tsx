import Image from "next/image";
export default function HeaderContent({ isActive }: any) {
  return (
    <div className="sm:flex sm:flex-col sm:mr-8">
      <Image
        quality={100}
        src={"./assets/images/image-web-3-desktop.jpg"}
        height={1000}
        width={1000}
        alt="main image"
        className={"w-[100vw] hidden sm:block"}
      />
      <Image
        quality={100}
        src={"./assets/images/image-web-3-mobile.jpg"}
        height={1000}
        width={1000}
        alt="main image"
        className={"w-[100vw] sm:hidden mt-5"}
      />
      <div className="sm:flex sm:justify-between sm:mt-7">
        <h1 className="text-5xl font-extrabold my-5 sm:my-0 sm:w-80">
          The Bright Future of Web 3.0?
        </h1>
        <div className="sm:flex sm:flex-col sm:justify-between sm:w-[27rem]">
          <p className="text-darkGrayishBlue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <p className="uppercase mt-5 px-10 py-3 text-white font-bold bg-softRed w-48 tracking-[.2em]89 text-center hover:bg-black">
            Read more
          </p>
        </div>
      </div>
    </div>
  );
}
