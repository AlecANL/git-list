import { TRepositoryState, TRepositoryAction } from './repositories.types';
import { repositoriesTypes as actionsTypes } from './repositories.types';
import { IRepositories } from '../../types/repository.type';

export function RepositoriesReducer(
  state: TRepositoryState,
  action: TRepositoryAction
): TRepositoryState {
  switch (action.type) {
    case actionsTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionsTypes.GET_REPOSITORY_LIST:
      return {
        ...state,
        repositories: action.payload,
      };
    case actionsTypes.SEARCH_BY_NAME: {
      let listRepositories: IRepositories[] = [];
      if (state.searchByTag) {
        listRepositories = state.reposByTag;
      } else {
        listRepositories = state.repositories;
      }
      const filterByName = listRepositories.filter(repo =>
        repo.name
          .toLowerCase()
          .includes(action.payload.length < 1 ? '' : action.payload)
      );
      console.log(`this is de value ${action.payload.length}`);

      return {
        ...state,
        reposByName: [...filterByName],
      };
    }
    case actionsTypes.LOADING_PAGE:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
