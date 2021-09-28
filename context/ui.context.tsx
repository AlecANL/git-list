import React from 'react';
import { TUIContext, TUIState } from '../reducers/ui/ui.types';
import { UIReducer } from '../reducers/ui/ui.reducer';
import { handleShowSearchModal } from '@reducer/ui/ui.actions';

const initialValue: TUIState = {
  isError: false,
  isLoading: true,
  isShowSearchModal: false,
};

export const UIContext = React.createContext(null);

const UIContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(UIReducer, initialValue);
  function handleShowModal() {
    dispatch(handleShowSearchModal(!state.isShowSearchModal));
  }
  const value: TUIContext = {
    state,
    dispatch,
    handleShowModal,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export { UIContextProvider };
