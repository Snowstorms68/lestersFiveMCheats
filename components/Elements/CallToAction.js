import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {FaCode} from "react-icons/fa";
import {FaUsb} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";

export default function CallToAction({ text, link, additionalCSS, discord, whatsapp, code, usb, shop  }) {
  return (
    <div
      className={`flow-text custom-btn flex flex-row gap-x-2 items-center justify-center text-white bg-black py-3 px-10 text-center font-main-regular cursor-pointer border border-black 
      hover:bg-transparent hover:text-black duration-300 ${additionalCSS}`}
    >
      <a href={link}>
      <p>{text}</p>
      </a>
      {discord && <FaDiscord className="mt-[3px] discord-icon" />}
      {whatsapp && <FaWhatsapp className="mt-[3px] whatsapp-icon" />}
      {code && <FaCode className="mt-[3px] code-icon" />}
      {usb && <FaUsb className="mt-[3px] usb-icon" />}
      {shop && <FaShoppingCart className="mt-[3px] shop-icon" />}
    </div>
  );
}
