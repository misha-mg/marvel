import "./comics-hero.css";
import avengers from "./avengers.png";
import aLogo from "./a-logo.png";

export function ComicsHero() {
  return (
    <>
      <div className="comics-hero-wrapper wrapper">
        <div className="comics-hero block">
          <img className="comics-hero__avengers" src={avengers} alt="" />
          <h2>
            New comics every week!<br></br> Stay tuned!
          </h2>
          <img className="comics-hero__logo" src={aLogo} alt="" />
        </div>
      </div>
    </>
  );
}
