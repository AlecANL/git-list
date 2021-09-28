import { TAction, TUIState } from './ui.types';
import { UITypes as actionTypes } from './ui.types';

export function UIReducer(state: TUIState, action: TAction): TUIState {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      console.log('hello from ui');
      console.log(state);
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.IS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    case actionTypes.IS_SHOW_SEARCH_MODAL:
      return {
        ...state,
        isShowSearchModal: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
