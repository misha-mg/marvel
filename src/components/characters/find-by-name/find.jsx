import "./find.css";

function Sucсess() {
  return (
    <>
      <div className="success-block status-block">
        <h3 className="success">There is! Visit NAME page?</h3>
        <button className="button-find">TO PAGE</button>
      </div>
    </>
  );
}
function Failed() {
  return (
    <>
      <div className="status-block">
        <h3 className="failed">This field is required</h3>
      </div>
    </>
  );
}
function NotFound() {
  return (
    <>
      <div className="status-block">
        <h3 className="not-found">
          The character was not found. Check the name and try again
        </h3>
      </div>
    </>
  );
}

export function Find() {
  return (
    <>
      <div className="find-wrapper">
        <div className="find">
          <div className="find__header">
            <h3>Or find a character by name:</h3>
          </div>
          <div className="info__input">
            <input type="text" placeholder="Enter name" />
            <button className="button-find">FIND</button>
          </div>
          {/* <NotFound></NotFound> */}
        </div>
      </div>
    </>
  );
}
