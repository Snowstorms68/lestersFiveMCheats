import Cookies from "universal-cookie";
import { useEffect, useState } from "react";


export default function Premium() {
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

  return (
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
          value={credentials.username  || ""}
          onChange={handleChange}
        />
        <input
          placeholder="Passwort"
          className="py-2 px-4 w-64 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-liteGray rounded-md"
          type="password"
          name="password"
          id="password"
          value={credentials.password  || ""}
          onChange={handleChange}
        />
        <button
          className="bg-[#00E0FF] px-4 py-4 rounded-md"
          onClick={checkLogin}
        >
          Anmelden
        </button>
      </div>
  );
}
