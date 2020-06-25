import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import CampCard from './CampCard.jsx';
import EssCard from './EssCard.jsx';
import AmntCard from './AmntCard.jsx';


const Modal = ({ handleClose, disp, children }) => {
  const showHideClassName = disp ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>X</button>
      </section>
    </div>
  );
};

export default Modal;