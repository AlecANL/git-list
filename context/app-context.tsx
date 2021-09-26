import { createContext } from 'react';
import { user, repositoryList } from '../utils/fakeData';
import { IUser } from '../types/user.type';
import { IRepositories } from '../types/repository.type';
import React from 'react';

type appState = {
  user: IUser | null;
  repositories: IRepositories[] | [];
  isError: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialValue: appState = {
  user: null,
  repositories: [],
  isError: false,
  isLoading: true,
  error: null,
};

const AppContext = ({ children }) => {
  const AppContext = createContext(null);

  function AppReducer(state: appState, action: any): appState {
    return state;
  }

  const [state, dispatch] = React.useReducer(AppReducer, initialValue);

  const value = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext };
