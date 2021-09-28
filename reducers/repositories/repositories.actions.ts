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

type TSearchByTag = {
  tagSearched: string;
};

export function filterByTag(search: TSearchByTag): TRepositoryAction {
  return {
    type: actionsTypes.SEARCH_BY_TAG,
    payload: search,
  };
}

export function sortByName(repos: IRepositories[]): IRepositories[] {
  return repos.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

export function sortByLasUpdated(repos: IRepositories[]): IRepositories[] {
  return repos.sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });
}

export function sortByStars(repos: IRepositories[]): IRepositories[] {
  return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
}
export function filterBySort(typeSort: string): TRepositoryAction {
  return {
    type: actionsTypes.FILTER_SORT,
    payload: typeSort,
  };
}
