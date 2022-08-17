import "../styles/globals.css";
import CookieConsent from "../components/CookieConsent";
import Navigation from "../components/Navigation";
import Cookies from "universal-cookie";
import Head from "next/head";
import { useEffect, useState } from "react";
import { CommerceProvider } from "../contexts/CommerceContext";
import { DataProvider } from "../contexts/DataContext";
import { InterfaceProvider } from "../contexts/InterfaceContext";
import Toast from "../components/Toast";

function MyApp({ Component, pageProps }) {
  const cookies = new Cookies();
  const [entry, setEntry] = useState(true);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (cookies.get("dev_login") === "true") {
      setEntry(true);
    }
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const checkLogin = () => {
    if (
      credentials.username === "test","test1" &&
      credentials.password === "test","test1"
    ) {
      cookies.set("dev_login", true);
      setEntry(true);
    }
  };

  return entry ? (
    <InterfaceProvider>
      <CommerceProvider>
        <DataProvider>
          <Toast />
          <CookieConsent />
          <Navigation />
          <Component {...pageProps} />
        </DataProvider>
      </CommerceProvider>
    </InterfaceProvider>
  ) : (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,400;0,500;1,200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="bg-black flex-col gap-y-10 w-screen h-screen absolute top-0 left-0 z-[100] flex items-center justify-center"
        style={{ fontFamily: "Kanit" }}
      >
        <div className="flex flex-row items-center scale-[1.5]">
          <p className="text-white text-[2rem] md:text-[32px] xl:text-[25px]">
            Snowstorms
          </p>
          <div className="bg-[#00E0FF] h-1 w-1 relative top-[5px] left-0.5"></div>
        </div>
        <input
          placeholder="Benutzername"
          className="py-2 px-4 w-64 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-liteGray rounded-md"
          type="username"
          name="username"
          id="username"
          value={credentials.username || ""}
          onChange={handleChange}
        />
        <input
          placeholder="Passwort"
          className="py-2 px-4 w-64 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-liteGray rounded-md"
          type="password"
          name="password"
          id="password"
          value={credentials.password || ""}
          onChange={handleChange}
        />
        <button
          className="bg-[#00E0FF] px-4 py-4 rounded-md"
          onClick={checkLogin}
        >
          Anmelden
        </button>
      </div>
    </>
  );
}

export default MyApp;
