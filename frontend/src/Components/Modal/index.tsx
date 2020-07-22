import React from "react";

import "./style.css";
const Modal: React.FC = ({ children }) => {
  return (
    <div id="component-modal">
      <div className="content-modal">{children}</div>
    </div>
  );
};

export default Modal;
