import { ComicsCard } from "../comics-card/comics-card";
import "./comics-main.css";

// import uw from "./UW.png";
// import xMen from "./x-men.png";

export function ComicsMain() {
  let arr = [1, 2, 1, 2, 1, 2, 1];

  return (
    <>
      <div className="comics-main-wrapper wrapper">
        <div className="comics-main block">
          {arr.map((el) => {
            return el === 1 ? (
              <ComicsCard name={"uw"}></ComicsCard>
            ) : (
              <ComicsCard name={"xMen"}></ComicsCard>
            );
          })}
          <ComicsCard></ComicsCard>
        </div>
      </div>
    </>
  );
}
