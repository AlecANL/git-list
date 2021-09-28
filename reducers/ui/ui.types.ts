import { MouseEventHandler } from 'react';

export const UITypes = {
  IS_LOADING: '[UI]: IS_LOADING',
  IS_ERROR: '[UI]: IS_ERROR',
  IS_SHOW_SEARCH_MODAL: '[UI] IS_SHOW_SEARCH_MODAL',
};

export type TAction = {
  type: string;
  payload: any;
};

export type TUIState = {
  isLoading: boolean;
  isError: boolean;
  isShowSearchModal: boolean;
};

export type TUIContext = {
  dispatch: Function;
  state: TUIState;
  handleShowModal: MouseEventHandler;
};
