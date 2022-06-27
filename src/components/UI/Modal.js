import React from "react";
import tw, { styled } from "twin.macro";

const Modal = (props) => {
  return (
    <>
      {props.isShown && (
        <>
          <StyledModal onClick={props.onClose}>
            <div className="relative w-8/12 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-l">Cart Items</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-regular outline-none focus:outline-none"
                    onClick={props.onClose}
                  >
                    <span className="bg-transparent text-black text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  {props.children}
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <StyleButton
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.onClose}
                  >
                    Close
                  </StyleButton>
                </div>
              </div>
            </div>
          </StyledModal>
          <StyledBackdrop></StyledBackdrop>
        </>
      )}
    </>
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
)

const StyleButton = tw.button`
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
