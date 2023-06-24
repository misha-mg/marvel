import { Cards } from "../cards/cards";
import { InfoLoading } from "../info-loading/info-loading";
import { Info } from "../info/info";
import "./main.css";

export function Main() {
  return (
    <>
      <div className="main-wrapper wrapper">
        <div className="main block">
          <Cards></Cards>
          <Info></Info>
        </div>
      </div>
    </>
  );
}
