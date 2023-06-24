import "./cards.css";
import hero1 from "./hero1.jpg";

export function Card() {
  return (
    <>
      <div className="cards__card">
        <img src={hero1} alt="" />
        <h3>HERO</h3>
      </div>
    </>
  );
}
