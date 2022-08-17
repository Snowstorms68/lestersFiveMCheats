import CallToAction from "./Elements/CallToAction";

export default function Header({}) {
  return (
    <main className="mt-32 w-screen xl:h-screen c2:h-auto main-padding main-padding-vertical flex flex-col items-center justify-center font-main-regular z-10 -top-20 relative">
      <h1 className="text-[4rem] font-bold text-center leading-[4rem]">
        Du hast Fragen oder
        <br /> verstehst etwas nicht genau? <br /> Dann besuche uns auf unserem
        Discord.
      </h1>
      <p className="my-10 text-[2rem]">
        Betrete jetzt unseren Discord und wir werden Dir helfen
        {/* <strong>
          <u>Pre-Order-Rabatten</u>
        </strong>
        . */}
      </p>
      <a href="https://discord.gg/qWPmfCryvj"><CallToAction text="Join Discord" link="https://www.youtube.com/" discord={true} /></a>
    </main>
  );
}
