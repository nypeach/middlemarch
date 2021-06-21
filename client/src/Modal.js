import React from 'react';
import './Modal.css';


const Modal = (props) => {


  return (
    <div className="qanda-modal-wrapper">
      <div className="qanda-modal-backdrop" onClick={props.toggle()} />
      <div className="qanda-modal-box">
        Some Modal Text Here Just to Test
        <i className="far fa-times-circle fa-2x" onClick={props.toggle()}></i>
      </div>
    </div>
  )
}

export default Modal;