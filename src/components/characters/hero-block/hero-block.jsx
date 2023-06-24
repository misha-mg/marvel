import "./hero-block.css";
import thumbnail from "./thumbnail.png";
import shield from "./shield.png";
import mjolnir from "./mjolnir.png";

export function Hero() {
  return (
    <>
      <div className="hero-block__wrapper wrapper">
        <div className="hero-block block">
          <div className="hero-block__character">
            <div className="hero-block__img">
              <img src={thumbnail} alt="" />
            </div>
            <div className="hero-block__info">
              <h3>THOR</h3>
              <p>
                As the Norse God of thunder and lightning, Thor wields one of
                the greatest weapons ever made, the enchanted hammer Mjolnir.
                While others have described Thor as an over-muscled, oafish
                imbecile, he's quite smart and compassionate...
              </p>
              <div className="hero-block__buttons">
                <button className="HOMEPAGE hero-block__button">
                  HOMEPAGE
                </button>
                <button className="WIKI hero-block__button">WIKI</button>
              </div>
            </div>
          </div>
          <div className="hero-block__random">
            <h3>
              Random character for today!<br></br> Do you want to get to know
              him better?
            </h3>
            <h3>Or choose another one</h3>
            <button className="hero-block__button">TRY IT</button>
            <img className="shield" src={shield} alt="" />
            <img className="mjolnir" src={mjolnir} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
