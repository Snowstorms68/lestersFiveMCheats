import data from "../model/Model.json";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { useState, useContext } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { DataContext } from "../contexts/DataContext";
import { InterfaceContext } from "../contexts/InterfaceContext";
import Login from "./UserActions/Login";
import Register from "./UserActions/Register";

export default function Navigation() {
  const pages = data.pages;

  const { registerUser, login } = useContext(DataContext);
  const { setToast } = useContext(InterfaceContext);

  const [toggle, toggleNavbar] = useState(false);
  const [activeReg, setActiveReg] = useState(false);
  const [regDone, setRegDone] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const [registerMask, setRegisterMask] = useState({
    username: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const disableScroll = function () {
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const handleChange = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    setRegisterMask({ ...registerMask, [fieldName]: value });
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    if (registerMask.password !== registerMask.repeat_password) {
      console.log("Password not equal");
      setToast("Passwort nicht identisch...", "error");
      return;
    }
    const response = await registerUser(registerMask);
    if (response.status) return setToast(response.status, "error");
    if (response.length) setRegDone(true);
    setRegisterMask({
      username: "",
      email: "",
      password: "",
      repeat_password: "",
    });
  };

  return (
    <>
      <nav className="hidden xl:flex navi w-screen h-20 bg-white shadow-md z-50 fixed top-0 left-0 flex-row justify-between items-center px-20 font-main-regular">
        <Link href={"/"}>
          <div className="imageContainer relative w-64 cursor-pointer">
            <Image
              src={logo}
              alt="media_references"
              layout="fill"
              className="image_"
              priority
            />
          </div>
        </Link>
        <div className="flex flex-row items-start xl:gap-x-3 gap-x-10 h-full">
          {pages.map(
            (page, key) =>
              page.is_in_nav && (
                <Link href={page.href}>
                  <div className="flex flex-col dropdown-parent hover:bg-[#f3f4f5] duration-300 cursor-pointer">
                    <div className="flex flex-row items-center px-10  gap-x-2">
                      <p className="leading-[80px] text-[1.1rem]">
                        {page.title}
                      </p>
                      {page.children && page.children.length && (
                        <MdKeyboardArrowDown className="" />
                      )}
                    </div>
                    {page.children &&
                      page.children.map((item, key) => (
                        <Link href={item.href}>
                          <div className="dropdown-child pl-7 py-2 bg-[#f3f4f5] duration-300 opacity-0 hover:bg-[#e7e7e7]">
                            {item.title}
                          </div>
                        </Link>
                      ))}
                  </div>
                </Link>
              )
          )}
          <div className="flex flex-row items-center pl-20">
          </div>
        </div>
      </nav>
      <Login
        activeLogin={activeLogin}
        setActiveLogin={setActiveLogin}
        login={login}
      />
      <Register
        activeReg={activeReg}
        submitRegister={submitRegister}
        regDone={regDone}
        setRegDone={setRegDone}
        setActiveReg={setActiveReg}
        registerMask={registerMask}
        handleChange={handleChange}
        setActiveLogin={setActiveLogin}
      />
      <nav
        className={`xl:hidden font-main-regular ${
          !toggle ? "bg-transparent pointer-events-none" : "bg-white"
        } xl:hidden duration-300 shadow-md flex flex-col items-center justify-start h-screen w-screen fixed top-0 left-0 z-50`}
      >
        <div
          className={`w-full flex flex-row items-center justify-between px-10 duration-300 bg-white`}
        >
          <button
            className={`pointer-events-auto relative -top-1 hamburger hamburger--emphatic ${
              toggle ? "is-active" : ""
            }`}
            onClick={() => toggleNavbar(!toggle)}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className="flex flex-row items-center relative -top-2 z-50 pointer-events-auto">
          </div>
        </div>
        <div
          className={`flex flex-col w-full gap-y-16 items-center justify-center h-full opacity-100 ${
            !toggle && "opacity-0"
          }`}
        >
          {pages.map(
            (page, key) =>
              page.is_in_nav && (
                <div
                  className={`cursor-pointer font-main-regular duration-300 ${
                    !toggle && "opacity-0"
                  }`}
                  key={key}
                  onClick={() => toggleNavbar(false)}
                >
                  <Link href={page.href}>
                    <p className="text-black head-text font-bold uppercase hover:text-secondary duration-300">
                      {page.title}
                    </p>
                  </Link>
                </div>
              )
          )}
        </div>
      </nav>
    </>
  );
}
