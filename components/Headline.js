export default function Headline(props) {
  return (
    <>
      {props.variant !== "" ? (
        <props.variant className="text-white font-main-black head-text font-black uppercase text-center">
          {props.text}
        </props.variant>
      ) : (
        <p className="text-white font-main-black head-text font-black uppercase text-center">
          {props.text}
        </p>
      )}
    </>
  );
}
