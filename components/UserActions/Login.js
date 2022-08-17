export default function Login({ activeLogin, setActiveLogin, login }) {
  return (
    <>
      <div
        className={`absolute bg-[#0c0c0c35] z-50 w-screen h-screen left-0 top-0 duration-300 ${
          !activeLogin ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => {
          setActiveLogin(false);
        }}
      ></div>
      <div
        className={`${
          !activeLogin ? "opacity-0 pointer-events-none" : "opacity-100"
        } duration-300 font-main-regular w-[500px] absolute left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 z-50 bg-white shadow-lg flex flex-col justify-center items-center py-10 px-10`}
      >
        <p className="font-bold head-text">Anmelden</p>
        <form onSubmit={login} className="mt-10 flex flex-col gap-y-5">
          <input
            className="border border-[#e9e9e9] p-2 w-[300px]"
            placeholder={"E-Mail"}
            type="email"
            required
          />
          <input
            className="border border-[#e9e9e9] p-2 w-[300px]"
            placeholder={"Passwort"}
            type="password"
            required
          />
          <button
            className="text-white bg-black py-3 px-10 text-center  cursor-pointer border border-black 
            hover:bg-transparent hover:text-black duration-300 w-[300px]"
          >
            Anmelden
          </button>

          <p className="text-center duration-300 cursor-pointer hover:text-[#3f3f3f]">
            Passwort vergessen?
          </p>
        </form>
      </div>
    </>
  );
}
