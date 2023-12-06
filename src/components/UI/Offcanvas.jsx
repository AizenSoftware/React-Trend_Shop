import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="w-screen h-screen bg-black/70 z-30 top-0 left-0 fixed"
      onClick={props.onClose}
    />
  );
};
const OffCanvas = (props) => {
  return (
    <div className="fixed right-0 h-screen bg-white z-40 w-80 shadow-lg px-1">
      {/* Content */}
      <div className="mr-4">{props.children}</div>
    </div>
  );
};

const Offcanvas = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      <Backdrop onClose={props.onClose} />
      {ReactDOM.createPortal(
        <OffCanvas>{props.children}</OffCanvas>,
        portalElement
      )}
    </>
  );
};

export default Offcanvas;
