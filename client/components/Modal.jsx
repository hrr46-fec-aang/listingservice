import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import CampCard from './CampCard.jsx';
import EssCard from './EssCard.jsx';
import AmntCard from './AmntCard.jsx';

const ModalDiv = styled.div`
  width: 430px;
  position: relative;
  margin-top: 30px;
  margin-right: auto;
  margin-bottom: 30px;
  margin-left: auto;
`;

const ModalBox = styled.div`
  padding: 25px;
  border: 1px solid #ebebeb;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  border-radius: 0px;
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
`;

const ModalHeader = styled.div`
  padding-bottom: 0;
  height: auto;
  border-bottom: none;
  padding: 15px;
`;

const ModalBody = styled.div`
  position: relative;
  padding: 15px;
`;

const Modal = ({ handleClose, disp, children }) => {
  const showHideClassName = disp ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <ModalDiv>
        <ModalBox>
          <ModalHeader>
            <button onClick={handleClose}>X</button>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalBox>

      </ModalDiv>
    </div>
  );
};

export default Modal;