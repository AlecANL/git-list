import React from 'react';
import { RepositoryCard } from '../repository-card/repository-card';
import { RepositoryListStyled } from './repository-list.styled';
import { RepositoryContext } from '../../context/app-context';
import { IRepositories } from '../../types/repository.type';

const RepositoryList: React.FC = () => {
  const { state } = React.useContext(RepositoryContext);

  function getRepos(): IRepositories[] {
    if (state.search.length > 2) {
      return state.repo_searched;
    }
    return state.repositories;
  }

  console.log(getRepos().length);

  return (
    <RepositoryListStyled>
      {getRepos().length === 0 && <h1>Not find Repos</h1>}
      {getRepos().map((repo: IRepositories, idx) => (
        <RepositoryCard repo={repo} key={idx} />
      ))}
    </RepositoryListStyled>
  );
};

export { RepositoryList };
