import "./info-loading.css";

export function InfoLoading() {
  return (
    <>
      <div className="info-loading-wrapper">
        <div className="info-loading">
          <h3>Please select a character to see information</h3>
          <div className="info-loading__subtitle">
            <div className="info-loading__sircle"></div>
            <div className="info-loading__text"></div>
          </div>
          <div className="info-loading__blocks">
            <div className="info-loading__block"></div>
            <div className="info-loading__block"></div>
            <div className="info-loading__block"></div>
          </div>
        </div>
      </div>
    </>
  );
}
