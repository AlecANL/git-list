import React from 'react';
import { ModalStyled } from './modal.styled';
import { RepositoryContext, TContextType } from '../../context/app-context';
import { handleLoadingPage } from '../../reducers/repositories/repositories.actions';

const Modal: React.FC = () => {
  const [searchUser, setSearchUser] = React.useState('');
  const { setCurrentUser, dispatch, isShowModal, setShowModal } =
    React.useContext(RepositoryContext) as TContextType;

  const inputRef = React.useRef<HTMLFormElement>();
  function handleShowModal() {
    setShowModal(!isShowModal);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchUser(event.currentTarget.value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = searchUser.trim().toLowerCase();
    const regex = /^[A-Za-z0-9 ]+$/;
    if (!regex.test(value)) {
      inputRef.current.classList.add('is-error');
      return;
    }
    inputRef.current.classList.remove('is-error');
    setCurrentUser(searchUser);
    setShowModal(!isShowModal);
    dispatch(handleLoadingPage(true));
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
        <form onSubmit={handleSubmit} ref={inputRef}>
          <input
            type="text"
            value={searchUser}
            onChange={handleInputChange}
            placeholder="search any user..."
          />
          <p>Whoops enter a valid name</p>
        </form>
        <button className="btn is-grey">Search</button>
      </div>
    </ModalStyled>
  );
};

export { Modal };
