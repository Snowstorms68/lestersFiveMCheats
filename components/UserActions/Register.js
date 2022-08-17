export default function Register({
  activeReg,
  submitRegister,
  regDone,
  setRegDone,
  setActiveReg,
  setActiveLogin,
  registerMask,
  handleChange,
}) {
  return (
    <>
      <div
        className={`absolute bg-[#0c0c0c35] z-50 w-screen h-screen left-0 top-0 duration-300 ${
          !activeReg ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => {
          setActiveReg(false);
          setRegDone(false);
        }}
      ></div>
      <div
        className={`${
          !activeReg ? "opacity-0 pointer-events-none" : "opacity-100"
        } duration-300 font-main-regular w-[500px] absolute left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 z-50 bg-white shadow-lg flex flex-col justify-center items-center py-10 px-10`}
      >
        <p className="font-bold head-text">Registrieren</p>
        <form
          onSubmit={submitRegister}
          className={`mt-10 flex flex-col gap-y-5 duration-300 overflow-hidden ${
            regDone ? "max-h-0" : "max-h-[900px]"
          }`}
        >
          <input
            className="border border-[#e9e9e9] p-2 w-[300px]"
            placeholder={"Username"}
            type="username"
            name="username"
            required
            value={registerMask.username}
            onChange={handleChange}
          />
          <input
            className="border border-[#e9e9e9] p-2 w-[300px]"
            placeholder={"E-Mail"}
            type="email"
            name="email"
            required
            value={registerMask.email}
            onChange={handleChange}
          />
          <input
            className="border border-[#e9e9e9] p-2 w-[300px]"
            placeholder={"Passwort"}
            type="password"
            name="password"
            required
            value={registerMask.password}
            onChange={handleChange}
          />
          <input
            className="border border-[#e9e9e9] p-2 w-[300px]"
            placeholder={"Passwort bestätigen"}
            type="password"
            name="repeat_password"
            required
            value={registerMask.repeat_password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="text-white bg-black py-3 px-10 text-center  cursor-pointer border border-black 
      hover:bg-transparent hover:text-black duration-300 w-[300px]"
          >
            Jetzt registrieren
          </button>
          <p className="text-center ">
            Bereits registriert?{" "}
            <u
              className="cursor-pointer duration-300 hover:text-[#3f3f3f]"
              onClick={() => {
                setActiveLogin(true);
                setActiveReg(false);
              }}
            >
              Hier
            </u>{" "}
            anmelden
            <p className="duration-300 text-center cursor-pointer hover:text-[#3f3f3f]">
              Passwort vergessen?
            </p>
          </p>
        </form>
        <div
          className={`text-center flex flex-col gap-y-5 duration-300 overflow-hidden ${
            !regDone ? "max-h-0" : "max-h-[900px]"
          }`}
        >
          <p>
            Vielen Dank für deine Registrierung!
            <br />
            Wir haben Dir eine Mail zur Bestätigung an deine Mail Adresse
            gesendet.
            <br />
            <u
              className="cursor-pointer"
              onClick={() => {
                setActiveReg(false);
                setRegDone(false);
              }}
            >
              Schließen
            </u>
          </p>
        </div>
      </div>
    </>
  );
}
