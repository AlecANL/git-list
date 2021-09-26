import React, { ContextType } from 'react';
import { RepositoryCard } from '../repository-card/repository-card';
import { RepositoryListStyled } from './repository-list.styled';
import { RepositoryContext, TContextType } from '../../context/app-context';
import { IRepositories } from '../../types/repository.type';

const RepositoryList: React.FC = () => {
  const { state, search } = React.useContext(RepositoryContext) as TContextType;

  function getRepoCollections(): IRepositories[] {
    if (state.searchByTag && state.reposByName.length === 0) {
      return state.reposByTag;
    }
    if (search.length > 0 || state.reposByName.length > 0) {
      return state.reposByName;
    }
    if (search.length === 0 || state.reposByName.length === 0) {
      return state.repositories;
    }
    return state.repositories;
  }

  return (
    <RepositoryListStyled>
      {getRepoCollections().length === 0 && <h1>Not find Repos</h1>}
      {getRepoCollections().map((repo: IRepositories) => (
        <RepositoryCard repo={repo} key={repo.id} />
      ))}
    </RepositoryListStyled>
  );
};

export { RepositoryList };
