import React from 'react';
import { RepositorieSearch } from '../repositorie-search/repositorie-search';
import { RepositoryList } from '../repository-list/repository-list';
import { RepositorieContentStyled } from './repositorie-content.styled';
import { RepositoryContext } from '../../context/app-context';

const RepositorieContent: React.FC = () => {
  const { state } = React.useContext(RepositoryContext);
  return (
    <RepositorieContentStyled>
      <h2 className="cant-repos">Repositories (185)</h2>
      <RepositorieSearch />
      {state.search.length > 1 && (
        <p>
          {state.repo_searched.length} results for repositories matching{' '}
          {state.search}{' '}
        </p>
      )}
      <RepositoryList />
    </RepositorieContentStyled>
  );
};

export { RepositorieContent };
