import Image from "next/image";
export default function OtherContent() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:mt-20">
      <OtherContentItem
        title="Reviving Retro PCs"
        body="What happens when old PCs are given modern upgrades?"
        sno="01"
        img="/assets/images/image-retro-pcs.jpg"
        alt="retro pcs"
      />
      <OtherContentItem
        title="Top 10 Laptops of 2022"
        body="Our best picks for various needs and budgets."
        sno="02"
        img="/assets/images/image-top-laptops.jpg"
        alt="laptop pic"
      />
      <OtherContentItem
        title="The Growth of Gaming"
        body="How the pandemic has sparked fresh opportunities."
        sno="03"
        img="/assets/images/image-gaming-growth.jpg"
        alt="retro pcs"
      />
    </div>
  );
}

interface prop {
  sno: string;
  title: string;
  body: string;
  img: string;
  alt: string;
}

function OtherContentItem({ sno, title, body, img, alt }: prop) {
  return (
    <div className="flex mb-5 sm:w-[22rem]">
      <Image
        src={img}
        height={1000}
        width={1000}
        alt={alt}
        className="w-1/4 sm:w-24 mr-5"
      />
      <div className="flex flex-col justify-between">
        <p className="text-grayishBlue text-4xl font-extrabold mb-2">{sno}</p>
        <p className="text-lg font-bold mb-2 hover:text-softRed">{title}</p>
        <p className="text-black">{body}</p>
      </div>
    </div>
  );
}
