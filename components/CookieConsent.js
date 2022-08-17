import TagManager from "react-gtm-module";
import { useEffect, useState } from "react";
import config from "../model/Model.json";

export default function CookieConsent(props) {
  const [cookiesActive, setCookiesActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (getCookie(config.main_config.cookie_name) !== undefined) {
      document.body.style.overflow = "scroll";
      setCookiesActive(getCookie(config.main_config.cookie_name).value);
      console.log(cookiesActive);
    } else {
      document.body.style.overflow = "hidden";
      setCookiesActive(undefined);
    }
  }, []);

  const getCookie = function (cookieName) {
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].toString().replace(" ", "").split("=");
      if (cookie[0] === cookieName) {
        return { name: cookie[0], value: cookie[1] };
      }
    }
    return undefined;
  };

  const setCookie = function (cookieName, cookieVal) {
    document.cookie = cookieName + "=" + cookieVal + ";";
    document.body.style.overflow = "scroll";
    setCookiesActive(true);
  };

  const handleScroll = function (event) {
    if (getCookie(config.main_config.cookie_name)) {
      if (getCookie(config.main_config.cookie_name).value === "true") {
        const mainConfig = config.main_config;
        if (mainConfig.gtm !== "") {
          TagManager.initialize({ gtmId: mainConfig.gtm });
        }
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  return (
    <>
      {cookiesActive === undefined && (
        <div
          className="flex items-end justify-center fixed bottom-0 w-screen h-screen font-main-regular z-[9999999999]"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        >
          <div
            className="relative bg-[#fff] bottom-56 md:bottom-10 w-[90vw] md:w-[500px] lg:w-[960px] h-[400px] md:h-[200px] lg:h-[100px]  
          rounded-md flex flex-col lg:flex-row items-center"
          >
            <p className="md:hidden uppercase pt-6 pb-4 font-bold">
              {" "}
              Diese Website verwendet Cookies
            </p>
            <div className="flex flex-row">
              <p className="text-[#a0a0a0] text-[0.7rem] px-10 text-center lg:text-left lg:pl-4 lg:pr-20 w-full relative top-3 lg:-top-2">
                Diese Seite nutzt Website Tracking-Technologien von Dritten, um
                ihre Dienste anzubieten, stetig zu verbessern und Werbung
                entsprechend der Interessen der Nutzer anzuzeigen. Ich bin damit
                einverstanden und kann meine Einwilligung jederzeit mit Wirkung
                für die Zukunft widerrufen oder ändern.
              </p>
            </div>
            <div className="flex flex-col md:flex-row relative top-8 lg:-top-2">
              <button
                className="hidden md:block border border-[#c3c3c3] px-4 h-[60px] py-3 rounded-md mx-4 w-[130px]
              transition-all duration-300"
                onClick={() => setCookie(config.main_config.cookie_name, false)}
              >
                Verweigern
              </button>
              <button
                className="bg-[#00E0FF] px-3 py-2 rounded-md mr-0 mb-2.5 md:mr-4 font-medium w-[240px] h-[60px] 
                        transition-all duration-300 text-white hover:text-white hover:bg-[#0FA7BC]"
                onClick={() => setCookie(config.main_config.cookie_name, true)}
              >
                Akzeptieren
              </button>
              <button
                className="block mx-auto  md:hidden border border-[#c3c3c3] px-4 py-3 rounded-md  w-[240px] 
              transition-all duration-300"
                onClick={() => setCookie(config.main_config.cookie_name, false)}
              >
                Verweigern
              </button>
            </div>
            <div className="absolute bottom-10 md:bottom-1.5 md:right-4 flex md:flex-row font-main-regular text-[0.7rem]">
              <a href="/imprint">
                <p>Impressum</p>
              </a>
              <p className="px-2">|</p>
              <a href="/policy">
                <p>Datenschutz</p>
              </a>
            </div>
            <div className="absolute  bottom-4 md:bottom-1.5 md:left-4 flex flex-row font-main-regular text-[0.7rem]">
              <a href="https://snowstorms.online" target="_blank">
                <p>Powered by Snowstorms - Console Cheat Service</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
