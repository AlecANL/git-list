import { TAction } from './ui.types';
import { UITypes as actionTypes } from './ui.types';

export function handleLoadingPage(isLoading: boolean): TAction {
  return {
    type: actionTypes.IS_LOADING,
    payload: isLoading,
  };
}

export function handleErrorPage(isError: boolean): TAction {
  return {
    type: actionTypes.IS_ERROR,
    payload: isError,
  };
}

export function handleShowSearchModal(isShow: boolean): TAction {
  return {
    type: actionTypes.IS_SHOW_SEARCH_MODAL,
    payload: isShow,
  };
}
