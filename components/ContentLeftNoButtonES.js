import Image from "next/image";

export default function ContentLeftNoButtonES({ data }) {
  return (
    <main className="main-padding font-main-regular flex flex-col lg:flex-row main-padding-vertical gap-x-20">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <data.headline_variant
          className="text-[4rem] font-bold text-center lg:text-left leading-[4rem] mb-10"
          dangerouslySetInnerHTML={{ __html: data.headline }}
        ></data.headline_variant>
        <div
          className="flow-text"
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></div>
      </div>
      <div className="w-full lg:w-1/2 pt-20 flex items-center justify-center">
        <div className="imageContainer relative w-full md:w-[700px] lg:w-[900px] cursor-pointer">
          <Image
            src={data.image}
            alt="media_references"
            layout="fill"
            className="image_"
            priority
          />
        </div>
      </div>
    </main>
  );
}
