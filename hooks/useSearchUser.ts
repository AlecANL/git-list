import React from 'react';
import { RepositoryContext, TContextType } from '@context/app-context';
import { handleLoadingPage } from '@reducer/ui/ui.actions';
import { UIContext } from '@context/ui.context';
import { TUIContext } from '@reducer/ui/ui.types';
import { handleShowSearchModal } from '@reducer/ui/ui.actions';

export function useSearchUser() {
  const formRef = React.useRef<HTMLFormElement>();

  const [searchUser, setSearchUser] = React.useState('');
  const { setCurrentUser } = React.useContext(
    RepositoryContext
  ) as TContextType;
  const { state: uiState } = React.useContext(UIContext) as TUIContext;
  const { dispatch: uiDispatch } = React.useContext(UIContext) as TContextType;

  function handleShowModal() {
    uiDispatch(handleShowSearchModal(!uiState.isShowSearchModal));
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchUser(event.currentTarget.value);
  }

  function handleSearchUser(formRef: HTMLFormElement) {
    const value = searchUser.trim().toLowerCase();
    const regex = /^[A-Za-z0-9 ]+$/;
    if (!regex.test(value)) {
      formRef.classList.add('is-error');
      return;
    }
    formRef.classList.remove('is-error');
    setCurrentUser(searchUser);
    handleShowModal();
    uiDispatch(handleLoadingPage(true));
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSearchUser(event.target);
  }

  return {
    handleInputChange,
    handleShowModal,
    handleSubmit,
    searchUser,
    formRef,
    handleSearchUser,
  };
}
