import React from 'react';
import { ModalStyled } from './modal.styled';

type TModalProps = {
  showModal: boolean;
  setShowModal: Function;
};
const Modal: React.FC<TModalProps> = ({ showModal, setShowModal }) => {
  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <ModalStyled>
      <button className="btn is-icon close" onClick={handleShowModal}>
        <i className="icon-close"></i>
      </button>
      <div className="modal-content">
        <div className="icon">
          <i className="icon-github"></i>
        </div>
        <input type="text" placeholder="search any user..." />
        <button className="btn is-grey">Search</button>
      </div>
    </ModalStyled>
  );
};

export { Modal };
