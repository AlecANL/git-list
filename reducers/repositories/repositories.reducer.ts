import { TRepositoryState, TRepositoryAction } from './repositories.types';
import { repositoriesTypes as actionsTypes } from './repositories.types';
import { IRepositories } from '../../types/repository.type';
import {
  sortByName,
  sortByStars,
  sortByLasUpdated,
} from './repositories.actions';

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

    case actionsTypes.SET_SEARCH: {
      return {
        ...state,
      };
    }
    case actionsTypes.FILTER_SORT: {
      let list: IRepositories[] = state.repositories;
      if (action.payload === 'stars') {
        list = sortByStars(state.repositories);
      } else if (action.payload === 'name') {
        list = sortByName(state.repositories);
      } else if (action.payload === 'last_updated') {
        list = sortByLasUpdated(state.repositories);
      }
      return {
        ...state,
        repositories: list,
      };
    }

    case actionsTypes.SEARCH_BY_TAG:
      return {
        ...state,
        searchByTag: action.payload.tagSearched,
      };

    default:
      return {
        ...state,
      };
  }
}
