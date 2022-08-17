export default function Footer() {
  return (
    <footer className="text-[0.8rem] w-screen max-w-[800px] mx-auto justify-between flex flex-row items-center h-20 text-black font-main-regular">
      <a href="https://discord.gg/r5C5ddrNX9">
      <p className="cursor-pointer">Discord</p>
      </a>
      <a href="/AGB">
      <p className="cursor-pointer">Conditions</p>
      </a>
      <a href="/datenschutz">
      <p className="cursor-pointer">Privacy</p>
      </a>
      <a href="/impressum">
      <p className="cursor-pointer">Imprint</p>
      </a>
    </footer>
  );
}
