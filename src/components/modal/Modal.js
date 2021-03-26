import React from "react";
import { useHistory, Link } from "react-router-dom";
import KeyPress from "../KeyPress";
import "./Modal.css";

function Modal({ heading, BASE_URL }) {
  let history = useHistory();

  function onBtnClick(e) {
    e.stopPropagation();
    history.goBack();
  }

  KeyPress("Escape", () => {
    history.goBack();
  });

  return (
    <>
      <div className="modal-wrapper" onClick={(e) => onBtnClick(e)}>
        <div className="modal-container">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-heading">
              <h3 className="modal-heading-text">{heading}</h3>
              <button onClick={(e) => onBtnClick(e)} className="modal-close">
                &times;
              </button>
            </div>
            {
              <div className="display">
                <span>route to modal :</span>
                <Link to="/modal1">
                  <a>{BASE_URL}</a>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
