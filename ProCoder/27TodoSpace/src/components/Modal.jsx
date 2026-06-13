import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

const Modal = ({ showModal, onClose, children }) => {

  useEffect(() => {
    if (!showModal) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", handleEscape);
    };
  }, [showModal, onClose]);


  if (!showModal) return null;
  return createPortal(
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-[#F8F5EF] shadow-2xl border border-amber-200 model-enter"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="rounded-full p-1 text-amber-700 hover:bg-amber-100 transition"
          >
            <IoMdClose className="text-3xl" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
