import React from 'react';
import { TRepositoryState } from '../reducers/repositories/repositories.types';
import { RepositoriesReducer } from '../reducers/repositories/repositories.reducer';

const initialValue: TRepositoryState = {
  user: null,
  repositories: [],
  searchByTag: '',
};

export type TContextType = {
  dispatch: Function;
  state: TRepositoryState;
  search: string;
  setSearch: Function;
  currentUser: string;
  setCurrentUser: Function;
};

export const RepositoryContext = React.createContext(null);

const AppContext = ({ children }) => {
  const [search, setSearch] = React.useState<string>('');
  const [state, dispatch] = React.useReducer(RepositoriesReducer, initialValue);
  const [currentUser, setCurrentUser] = React.useState('leonidasesteban');
  const value: TContextType = {
    state,
    dispatch,
    search,
    setSearch,
    currentUser,
    setCurrentUser,
  };

  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
};

export { AppContext };
