import LenisScroll from "./LenisScroll";

function Parrallax() {
  return (
    <div>
      <div className="h-screen bg-blue-300"></div>
      <LenisScroll />
      <div className="h-screen bg-green-300"></div>
    </div>
  );
}

export default Parrallax;
