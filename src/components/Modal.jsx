import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useModal from "../hooks/useModal";
import { useRef } from "react";
import PropTypes from 'prop-types';

export default function Modal({ modalHandler, children }) {
  const ref = useRef()
  const nameRef = useRef();
  const emailRef = useRef();
  

  const submitHandler = async (e) => {
    e.preventDefault();
  
  }
  useModal(modalHandler, ref)
  return (
    <>
      {createPortal(
        <div className="w-full h-full fixed bg-slate-400/70 z-30 top-0 flex justify-center items-center font-LexendDeca" ref={ref}>
          {children}
        </div>,
        document.getElementById("register")
      )}
    </>
  );
}

Modal.propTypes = {
  modalHandler: PropTypes.func
}