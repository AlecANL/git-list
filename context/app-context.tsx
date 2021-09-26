import React from 'react';
import { TRepositoryState } from '../reducers/repositories/repositories.types';
import { RepositoriesReducer } from '../reducers/repositories/repositories.reducer';

const initialValue: TRepositoryState = {
  user: null,
  repositories: [],
  isError: false,
  isLoading: true,
  error: null,
  searchByTag: '',
  reposByName: [],
  reposByTag: [],
  searchName: null,
};

export type TContextType = {
  dispatch: Function;
  state: TRepositoryState;
  search: string;
  setSearch: Function;
};

export const RepositoryContext = React.createContext(null);

const AppContext = ({ children }) => {
  const [search, setSearch] = React.useState<string>('');
  const [state, dispatch] = React.useReducer(RepositoriesReducer, initialValue);
  const value: TContextType = {
    state,
    dispatch,
    search,
    setSearch,
  };

  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
};

export { AppContext };
