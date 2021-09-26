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
  search: string | null;
  repo_searched: IRepositories[] | [];
};

const initialValue: appState = {
  user: null,
  repositories: [],
  isError: false,
  isLoading: true,
  error: null,
  search: '',
  repo_searched: [],
};

export const RepositoryContext = createContext(null);

const AppContext = ({ children }) => {
  function AppReducer(state: appState, action: any): appState {
    switch (action.type) {
      case '[REPO]: GET_USERS':
        return {
          ...state,
          user: action.payload,
        };
      case '[REPO]: GET_REPOSITORIES_LIST':
        return {
          ...state,
          repositories: [...action.payload],
        };
      case '[UI]: LOADING_PAGE':
        return {
          ...state,
          isLoading: action.payload,
        };
      case '[REPO]: SEARCH_BY_NAME':
        console.log(action.payload);
        return {
          ...state,
          search: action.payload,
          repo_searched: state.repositories.filter((repo: IRepositories) =>
            repo.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(AppReducer, initialValue);

  function getUser(user: IUser) {
    return {
      type: '[REPO]: GET_USERS',
      payload: user,
    };
  }
  function getRepositories(repos: IRepositories) {
    return {
      type: '[REPO]: GET_REPOSITORIES_LIST',
      payload: repos,
    };
  }

  function searchRepo(searchValue: string) {
    return {
      type: '[REPO]: SEARCH_BY_NAME',
      payload: searchValue,
    };
  }

  function handleLoadingPage(isLoading: boolean) {
    return {
      type: '[UI]: LOADING_PAGE',
      payload: isLoading,
    };
  }

  const value = {
    state,
    dispatch,
    getRepositories,
    getUser,
    handleLoadingPage,
    searchRepo,
  };

  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
};

export { AppContext };
