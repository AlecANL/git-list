import { useSearchUser } from '@customHooks/useSearchUser';
import React from 'react';
import { ModalStyled } from './modal.styled';

const Modal: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>();
  const {
    handleInputChange,
    searchUser,
    handleShowModal,
    handleSubmit,
    handleSearchUser,
  } = useSearchUser();
  // const { handleShowModal, handleSubmit } = useSearchUser();
  // const { handleSearchUser } = useSearchUser();

  return (
    <ModalStyled>
      <button className="btn is-icon close" onClick={handleShowModal}>
        <i className="icon-close"></i>
      </button>
      <div className="modal-content">
        <div className="icon">
          <i className="icon-github"></i>
        </div>
        <form onSubmit={handleSubmit} ref={formRef}>
          <input
            type="text"
            value={searchUser}
            onChange={handleInputChange}
            placeholder="search any user..."
            autoFocus
          />
          <p>Whoops enter a valid name</p>
        </form>
        <button
          onClick={() => handleSearchUser(formRef.current)}
          className="btn is-grey"
        >
          Search
        </button>
      </div>
    </ModalStyled>
  );
};

export { Modal };
