import "./header.css";

export function Header() {
  return (
    <>
      <div className="header-wrapper wrapper">
        <div className="header block">
          <div className="header__logo">
            <h2>
              <span style={{ color: "#9F0013" }}>Marvel</span> information
              portal
            </h2>
          </div>
          <div className="header__menu">
            <h2>
              <a style={{ color: "#9F0013" }}>Characters</a> / <a>Comics</a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
