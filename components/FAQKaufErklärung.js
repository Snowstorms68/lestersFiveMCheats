import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
export default function FAQScriptSetup({ data }) {
  const [faqList, setFaqList] = useState(data.faq_list);

  return (
    <main className="main-padding relative flex flex-col items-center font-main-regular main-padding-vertical">
      <p
        className="text-black  mb-24 relative z-20 text-[3rem] font-bold text-center leading-[3rem]"
        dangerouslySetInnerHTML={{ __html: data.headline }}
      ></p>
      {faqList.map((item, key) => (
        <div
          key={key}
          className={`flex flex-col py-4 px-8 mb-12 cursor-pointer duration-300 overflow-hidden relative z-20 border-4 border-black
          ${
            item.expanded ? "max-h-[1000px]" : "max-h-[100px] md:max-h-[65px]"
          }`}
          onClick={() => {
            item.expanded = !item.expanded;
            setFaqList([...faqList]);
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left font-bold text-[1.2rem]  w-full">
              {item.question}
            </p>
            <AiOutlinePlus className="text-[2rem] relative top-[-2px]" />
          </div>
          <p className="mt-10 text-black font-secondary-regular flow-text mb-5 text-center lg:text-left">
            {item.answer}
          </p>
        </div>
      ))}
    </main>
  );
}
