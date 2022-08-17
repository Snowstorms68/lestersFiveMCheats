import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactForm(props) {
  const router = useRouter();
  const [toSend, setToSend] = useState({
    from_name: "",
    from_tel: "",
    from_mail: "",
    from_message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSend),
    }).then((res) => {});

    router.push({
      pathname: "/",
      query: { r: "r" },
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <form onSubmit={onSubmit} className="contact-form">
        <div className="flex flex-col xl:flex-row">
          <div>
            <div className="font-main-regular">
              <input
                type="text"
                className="w-full border-2 p-2 c3xl:p-4  c4xl:pt-5 bg-transparent"
                required
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="font-main-regular mt-6">
              <input
                type="text"
                className="w-full border-2 p-2 c3xl:p-4 c4xl:pt-5 bg-transparent"
                required
                name="from_mail"
                value={toSend.from_mail}
                onChange={handleChange}
                placeholder="E-Mail"
              />
            </div>
            <div className="font-main-regular mt-6">
              <input
                type="text"
                className="w-full border-2 p-2 c3xl:p-4 c4xl:pt-5 bg-transparent"
                required
                name="from_tel"
                value={toSend.from_tel}
                onChange={handleChange}
                placeholder="Telefon"
              />
            </div>
            <div>
              <button
                className="hidden w-full cursor-pointer xl:block"
                type="submit"
              >
                <p
                  className="text-secondary c3xl:text-[1.2rem] c4xl:text-[1.5rem] font-main-regular font-bold mt-6 text-[50px] text-left w-full border-2 
                p-2.5 c3xl:p-3.5 c3xl:pl-5 c4xl:p-2.5 c4xl:pl-6 c4xl:pt-3 c4xl:pb-3 pl-4 border-white"
                >
                  Abschicken
                </p>
              </button>
            </div>
          </div>
          <div className="font-main-regular mt-6 xl:mt-0 xl:pl-6 xl:flex-grow">
            <textarea
              type="text"
              className="w-full border-2 pt-2 pl-1 c3xl:p-4 c4xl:pt-5 h-[300px] xl:h-full xl:w-full bg-transparent"
              required
              name="from_message"
              value={toSend.from_message}
              onChange={handleChange}
              placeholder="Nachricht"
            />
          </div>
        </div>
        <button className="w-full cursor-pointer xl:hidden" type="submit">
          <p className="text-secondary font-main-regular my-4 text-[14px] font-extrabold text-left w-full border-2 pl-4 p-2.5  border-white">
            Abschicken
          </p>
        </button>
        <p className="font-main-regular text-justify  flow-text">
          <input required type="checkbox" className="mr-4 xl:mt-6" />
          Ich stimme zu,das meine Angaben aus dem Kontaktformular zur
          Beantwortung meiner Anfrage erhoben und verarbeitet werden. Nach dem
          Abschluss der Bearbeitung der Anfrage werden die Daten gelöscht. Die
          Einwiligung kann jederzeit für die Zukunft per E-Mail widerufenwerden.
        </p>
      </form>
    </div>
  );
}
