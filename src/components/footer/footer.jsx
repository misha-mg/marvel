import "./footer.css";
import bg from "./footer-bg.png";

export function Footer() {
  return (
    <>
      <div className="footer-wrapper wrapper">
        <div className="footer block">
          <div className="footer__button_wrapper">
            <button className="footer__button">LOAD MORE</button>
          </div>

          <div className="footer__fake"></div>
          {/* <img className="footer__bg" src={bg} alt="" /> */}
        </div>
      </div>
    </>
  );
}
