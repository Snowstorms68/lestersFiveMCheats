import CallToAction from "./Elements/CallToAction";

export default function Soon({}) {
  return (
    <main className="mt-32 w-screen xl:h-screen c2:h-auto main-padding main-padding-vertical flex flex-col items-center justify-center font-main-regular z-10 -top-20 relative">
      <h1 className="text-[4rem] font-bold text-center leading-[4rem]">
        Cooming Soon!
        <br /> Diese Seite ist noch in arbeit <br /> schaue später nochmal vorbei.
      </h1>
      <p className="my-10 text-[2rem]">
        {/* <strong>
          <u>Pre-Order-Rabatten</u>
        </strong>
        . */}
      </p>
      <a href="/"><CallToAction text="Back Home" discord={false} /></a>
    </main>
  );
}
