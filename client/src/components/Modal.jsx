import React from "react";

const Modal = ({ setModal, modal, children }) => {
  return (
    <div
      className={
        modal
          ? "bg-black/70 w-full absolute top-0 left-0 bottom-0 flex justify-center items-center z-10"
          : "hidden"
      }
      onClick={() => setModal(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
