import React, { ContextType } from 'react';
import { RepositoryCard } from '../repository-card/repository-card';
import { RepositoryListStyled } from './repository-list.styled';
import { RepositoryContext, TContextType } from '../../context/app-context';
import { IRepositories } from '../../types/repository.type';
import { useFilter } from '../../hooks/useFilter';

const RepositoryList: React.FC = () => {
  const { state, search } = React.useContext(RepositoryContext) as TContextType;
  const listRepos = useFilter(state.repositories, {
    language: state.searchByTag,
    name: search,
  });

  return (
    <RepositoryListStyled>
      {search.length > 0 && (
        <p>
          {listRepos.length} results to repositories matching{' '}
          <strong>{search}</strong>
        </p>
      )}
      {listRepos.length === 0 && <h1>Not find Repos</h1>}
      {listRepos.map((repo: IRepositories) => (
        <RepositoryCard repo={repo} key={repo.id} />
      ))}
    </RepositoryListStyled>
  );
};

export { RepositoryList };
