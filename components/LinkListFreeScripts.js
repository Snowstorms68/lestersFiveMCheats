
import CallToAction from "./Elements/CallToAction";
export default function LinkListFreeScripts({ data }) {
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
          text="8.0"
          link="https://discord.gg/qWPmfCryvj"
          additionalCSS={"mt-10"}
        />
        <CallToAction
          text="8.1"
          link="https://wa.me/+4915213647487"
          additionalCSS={"mt-10"}
        />
      </div>
    </main>
  );
}
