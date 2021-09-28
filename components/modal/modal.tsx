import React from 'react';
import { ModalStyled } from './modal.styled';
import { RepositoryContext, TContextType } from '../../context/app-context';
import { handleLoadingPage } from '@reducer/ui/ui.actions';
import { UIContext } from '../../context/ui.context';
import { TUIContext } from '../../reducers/ui/ui.types';
import { handleShowSearchModal } from '../../reducers/ui/ui.actions';

const Modal: React.FC = () => {
  const [searchUser, setSearchUser] = React.useState('');
  const { setCurrentUser, dispatch } = React.useContext(
    RepositoryContext
  ) as TContextType;
  const { state: uiState } = React.useContext(UIContext) as TUIContext;
  const { dispatch: uiDispatch } = React.useContext(UIContext) as TContextType;

  const formRef = React.useRef<HTMLFormElement>();
  const inputRef = React.useRef<HTMLInputElement>();

  function handleShowModal() {
    uiDispatch(handleShowSearchModal(!uiState.isShowSearchModal));
  }

  function handleInputChange() {
    setSearchUser(inputRef.current.value);
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
    handleShowModal();
    uiDispatch(handleLoadingPage(true));
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
        <form onSubmit={handleSubmit} ref={formRef}>
          <input
            type="text"
            value={searchUser}
            onChange={handleInputChange}
            ref={inputRef}
            placeholder="search any user..."
            autoFocus
          />
          <p>Whoops enter a valid name</p>
        </form>
        <button className="btn is-grey">Search</button>
      </div>
    </ModalStyled>
  );
};

export { Modal };
