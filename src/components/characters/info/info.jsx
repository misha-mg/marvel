import { Find } from "../find-by-name/find";
import "./info.css";
import loki from "./loki.png";

export function Info() {
  return (
    <>
      <div className="info-wrapper">
        <div className="info">
          <div className="info__header">
            <div className="info__img">
              <img src={loki} alt="" />
            </div>
            <div className="info__name">
              <h3>LOKI</h3>
              <button className="info__button info__button_red">
                HOMEPAGE
              </button>
              <button className="info__button">WIKI</button>
            </div>
          </div>
          <div className="info__subtitle">
            <span>
              In Norse mythology, Loki is a god or jötunn (or both). Loki is the
              son of Fárbauti and Laufey, and the brother of Helblindi and
              Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
              wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is
              the father of Nari and/or Narfi and with the stallion Svaðilfari
              as the father, Loki gave birth—in the form of a mare—to the
              eight-legged horse Sleipnir. In addition, Loki is referred to as
              the father of Váli in the Prose Edda.
            </span>
          </div>
          <div className="info__comics">
            <h3>Comics:</h3>
            <div className="info__comics-line">
              <span>All-Winners Squad: Band of Heroes (2011) #3</span>
            </div>
            <div className="info__comics-line">
              <span>Alpha Flight (1983) #50</span>
            </div>
            <div className="info__comics-line">
              <span>Amazing Spider-Man (1999) #503</span>
            </div>
            <div className="info__comics-line">
              <span>Amazing Spider-Man (1999) #504</span>
            </div>
            <div className="info__comics-line">
              <span>
                AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
              </span>
            </div>
            <div className="info__comics-line">
              <span>
                Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
              </span>
            </div>
            <div className="info__comics-line">
              <span>
                Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade
                Paperback)
              </span>
            </div>
            <div className="info__comics-line">
              <span>All-Winners Squad: Band of Heroes (2011) #3</span>
            </div>
            <div className="info__comics-line">
              <span>Vengeance (2011) #4</span>
            </div>
            <div className="info__comics-line">
              <span>Avengers (1963) #1</span>
            </div>
          </div>
        </div>
        <Find></Find>
      </div>
    </>
  );
}
