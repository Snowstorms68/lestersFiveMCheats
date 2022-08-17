import { useEffect, useContext } from "react";
import { InterfaceContext } from "../contexts/InterfaceContext";

export default function Toast({ expanded, message, color }) {
  const { status } = useContext(InterfaceContext);

  useEffect(() => {
    console.log("status triggered: ", status);
  }, [status]);

  return (
    <div
      className={`${
        status.color === "error" ? "bg-error" : "bg-success"
      } absolute py-5 text-white z-[999999] duration-300 left-1/2 -translate-x-1/2 w-full max-w-[400px] border border-black font-main-regular flex flex-col justify-center items-center ${
        status.expanded ? "top-2" : "-top-20"
      }`}
    >
      {status.message}
    </div>
  );
}
