import { castArray } from "lodash";
import Image from "next/image";
import CallToAction from "./Elements/CallToAction";
export default function ButtonList({ data }) {
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
        <CallToAction
          text={data.cta_text1}
          link={data.cta_link1}
          code={true}
          additionalCSS={"mt-10"}
        />
        <CallToAction
          text={data.cta_text2}
          link={data.cta_link2}
          code={true}
          additionalCSS={"mt-10"}
        />
        <CallToAction
          text={data.cta_text3}
          link={data.cta_link3}
          usb={true}
          additionalCSS={"mt-10"}
        />
        <CallToAction
          text={data.cta_text4}
          link={data.cta_link4}
          shop={true}
          additionalCSS={"mt-10"}
        />
      </div>
    </main>
  );
}
