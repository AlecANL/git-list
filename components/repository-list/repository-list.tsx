import React, { ContextType } from 'react';
import { RepositoryCard } from '../repository-card/repository-card';
import { RepositoryListStyled } from './repository-list.styled';
import { RepositoryContext, TContextType } from '../../context/app-context';
import { IRepositories } from '../../types/repository.type';

const RepositoryList: React.FC = () => {
  const { state, search } = React.useContext(RepositoryContext) as TContextType;
  const s = React.useContext(RepositoryContext) as TContextType;

  const filters = {
    language: (language: string) => {
      if (language) {
        return language.toLowerCase().includes(state.searchByTag.toLowerCase());
      }
    },
    name: (name: string) => {
      return name.toLowerCase().includes(search.toLowerCase());
    },
  };

  function filterJobs(array: any, filters: any) {
    const filterKeys = Object.keys(filters);
    return array.filter(item =>
      filterKeys.every(key => {
        if (typeof filters[key] !== 'function') return true;
        if (filters[key](item[key])) {
          return filters[key](item[key]);
        }
      })
    );
  }
  const list: IRepositories[] = filterJobs(state.repositories, filters);
  function getRepoCollections(): IRepositories[] {
    // if (state.searchByTag && state.reposByName.length === 0) {
    //   return state.reposByTag;
    // }
    return state.repositories;
  }

  return (
    <RepositoryListStyled>
      {search.length > 0 && (
        <p>
          {list.length} results to repositories matching{' '}
          <strong>{search}</strong>
        </p>
      )}
      {list.length === 0 && <h1>Not find Repos</h1>}
      {list.map((repo: IRepositories) => (
        <RepositoryCard repo={repo} key={repo.id} />
      ))}
    </RepositoryListStyled>
  );
};

export { RepositoryList };
