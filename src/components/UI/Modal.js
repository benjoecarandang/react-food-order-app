import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import tw, { styled } from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Backdrop = (props) => {
  return <StyledBackdrop />;
};

const ModalOverlay = (props) => {
  return (
    <StyledModal>
      <div className="relative w-10/12 my-6 mx-auto max-w-5xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
          <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            {props.title && <h3 className="text-2xl font-l">{props.title}</h3>}
            <button
              className="text-sm text-black float-right ml-auto p-2"
              onClick={props.onCartHide}
            >
              <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
            </button>
          </div>

          {props.children}

          {props.enableClose && (
            <div className="flex items-center justify-end p-5 border-t border-solid border-slate-200 rounded-b">
              <StyledButton
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.onCartHide}
              >
                Close
              </StyledButton>
            </div>
          )}
        </div>
      </div>
    </StyledModal>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("modal-root");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} onCartHide={props.onCartHide}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

const StyledModal = styled.div(
  tw`
    justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
  `
);

const StyledBackdrop = styled.div(
  tw`
    opacity-25 fixed inset-0 z-40 bg-black
  `
);

const StyledButton = tw.button`
    text-white
    bg-gradient-to-br
    from-pink-500
    to-yellow-500
    hover:bg-gradient-to-bl
    focus:ring-4
    focus:outline-none
    focus:ring-pink-200
    dark:focus:ring-pink-800
    font-medium rounded-full
    text-sm pl-6
    pr-7
    py-2.5
    text-center
`;

export default Modal;
