import React from 'react';

import { RepositoryContext, TContextType } from '@context/app-context';
import { filterByTag } from '@reducer/repositories/repositories.actions';
import { filterBySort } from '@reducer/repositories/repositories.actions';

export function useHandleOptionFilter(listRefs, setShow, show, name) {
  const { dispatch } = React.useContext(RepositoryContext) as TContextType;

  function handleFilterType(type: string, idx: number) {
    listRefs.current.forEach(item => item.classList.remove('is-active'));
    listRefs.current[idx].classList.add('is-active');
    setShow(!show);
    switch (name) {
      case 'language':
        filterLanguage(type);
        break;
      case 'option':
        filterSort(type);
        break;
      case 'type':
        console.log('type');
        break;
      default:
        [];
        break;
    }
  }
  function filterSort(type: string) {
    dispatch(filterBySort(type));
  }

  function filterLanguage(language: string) {
    console.log(language);
    const value = language.toLowerCase();
    dispatch(
      filterByTag({
        tagSearched: value,
      })
    );
  }

  function handleCloseModal() {
    setShow(!show);
  }
  return {
    handleCloseModal,
    handleFilterType,
  };
}
