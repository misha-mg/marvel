// import "./header.css";

import { ComicsHero } from "./comics-hero/comics-hero";
import { ComicsMain } from "./comics-main/comics-main";

export function Comics() {
  return (
    <>
      <div className="comics-wrapper">
        <ComicsHero></ComicsHero>
        <ComicsMain></ComicsMain>
      </div>
    </>
  );
}
