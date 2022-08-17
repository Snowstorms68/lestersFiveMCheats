import { AiFillDollarCircle } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io";

export default function Steps({ data }) {
  return (
    <main className="main-padding font-main-regular flex flex-col justify-center items-center main-padding-vertical">
      <data.headline_variant className="text-black  mb-24 relative z-20 text-[3rem] font-bold text-center leading-[3rem]">
        {data.headline}
      </data.headline_variant>
      {data.step_list.map((step, key) => (
        <div
          key={key}
          className="w-full flex flex-row items-center justify-center"
        >
          <div className="w-10 mr-10 font-bold text-[2rem]">{key + 1}.</div>

          <div className="flex flex-col w-[800px] border-l-4 pl-10 relative">
            <div className="absolute w-10 h-1 top-4 left-0 bg-black"></div>
            <p className="font-bold text-[1.4rem] pl-3">{step.step_headline}</p>
            <div
              className="flow-text pl-3"
              dangerouslySetInnerHTML={{ __html: step.step_description }}
            ></div>
          </div>
        </div>
      ))}
    </main>
  );
}
