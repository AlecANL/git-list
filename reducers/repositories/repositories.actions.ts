import { IUser } from '../../types/user.type';
import { IRepositories } from '../../types/repository.type';
import { TRepositoryAction } from './repositories.types';
import { repositoriesTypes as actionsTypes } from './repositories.types';

export function getUser(user: IUser) {
  return {
    type: actionsTypes.GET_USER,
    payload: user,
  };
}
export function getRepositories(repos: IRepositories[]): TRepositoryAction {
  return {
    type: actionsTypes.GET_REPOSITORY_LIST,
    payload: repos,
  };
}

export function searchRepo(searchValue: string): TRepositoryAction {
  return {
    type: actionsTypes.SEARCH_BY_NAME,
    payload: searchValue,
  };
}

export function handleLoadingPage(isLoading: boolean): TRepositoryAction {
  return {
    type: actionsTypes.LOADING_PAGE,
    payload: isLoading,
  };
}

type TSearchByTag = {
  tagSearched: string;
};

export function filterByTag(search: TSearchByTag): TRepositoryAction {
  return {
    type: actionsTypes.SEARCH_BY_TAG,
    payload: search,
  };
}

export function setError(isError: boolean): TRepositoryAction {
  return {
    type: actionsTypes.IS_ERROR,
    payload: isError,
  };
}
