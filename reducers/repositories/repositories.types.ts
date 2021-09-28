import { IUser } from '../../types/user.type';
import { IRepositories } from '../../types/repository.type';

export const repositoriesTypes = {
  GET_USER: '[REPO]: GET_USER',
  GET_REPOSITORY_LIST: '[REPO]: GET_REPOSITORY_LIST',
  SEARCH_BY_NAME: '[REPO]: SEARCH_BY_NAME',
  SEARCH_BY_TAG: '[REPO]: SEARCH_BY_TAG',
  SET_SEARCH: '[REPO]: SET_SEARCH',
  FILTER_SORT: '[REPO]: FILTER_SORT',
};

export type TRepositoryState = {
  user: IUser | null;
  repositories: IRepositories[] | [];
  searchByTag: string | null;
};

export type TRepositoryAction = {
  type: string;
  payload: any;
};
