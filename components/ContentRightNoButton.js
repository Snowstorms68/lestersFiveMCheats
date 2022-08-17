import Image from "next/image";
import CallToAction from "./Elements/CallToAction";
export default function ContentRightNoButton({ data }) {
  return (
    <main className="main-padding font-main-regular flex flex-col lg:flex-row main-padding-vertical gap-x-20">
      <div className="w-full lg:w-1/2 pt-20 flex items-center justify-center">
        <div className="imageContainer relative w-full md:w-[400px] lg:w-[600px] cursor-pointer">
          <Image
            src={data.image}
            alt="media_references"
            layout="fill"
            className="image_"
            priority
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <data.headline_variant
          className="text-[4rem] font-bold text-center lg:text-left leading-[4rem] mb-10"
          dangerouslySetInnerHTML={{ __html: data.headline }}
        ></data.headline_variant>
        <div
          className="flow-text"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></div>
        <CallToAction
          text="Discord"
          link="https://discord.gg/r5C5ddrNX9"
          discord={true}
          additionalCSS={"mt-10"}
        />
      </div>
    </main>
  );
}
