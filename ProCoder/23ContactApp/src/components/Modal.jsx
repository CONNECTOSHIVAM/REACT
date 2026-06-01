import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="bg-white rounded-lg min-h-[200px] w-[400px] max-w-[90%] shadow-lg">
        <div className="flex justify-end p-3">
          <AiOutlineClose
            onClick={onClose}
            className="text-2xl cursor-pointer"
          />
        </div>

        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;