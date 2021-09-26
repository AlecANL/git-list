import { IUser } from '../../types/user.type';
import { IRepositories } from '../../types/repository.type';

export const repositoriesTypes = {
  GET_USER: '[REPO]: GET_USER',
  GET_REPOSITORY_LIST: '[REPO]: GET_REPOSITORY_LIST',
  SEARCH_BY_NAME: '[REPO]: SEARCH_BY_NAME',
  LOADING_PAGE: '[UI]: LOADING_PAGE',
};

export type TRepositoryState = {
  user: IUser | null;
  repositories: IRepositories[] | [];
  isError: boolean;
  isLoading: boolean;
  error: string | null;
  searchByTag: string | null;
  reposByName: IRepositories[] | [];
  reposByTag: IRepositories[] | [];
};

export type TRepositoryAction = {
  type: string;
  payload: any;
};
