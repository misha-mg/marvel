import "./comics-card.css";

import uw from "./UW.png";
import xMen from "./x-men.png";

export function ComicsCard(props) {
  console.log(props.name);
  return (
    <>
      <div className="comics-card">
        <img src={props.name === "uw" ? uw : xMen} alt="" />
        <h3>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
        <span>9.99$</span>
      </div>
    </>
  );
}
