export default function Buttons({ text }) {
  return (
    <button className="text-white uppercase text-sm px-0.32 py-0.8 border border-white border-solid transition-all ease-in duration-300 hover:text-black hover:bg-white  ">
      {text}
    </button>
  );
}
