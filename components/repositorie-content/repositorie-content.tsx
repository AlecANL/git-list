import React from 'react';
import { RepositorieSearch } from '../repositorie-search/repositorie-search';
import { RepositoryList } from '../repository-list/repository-list';
import { RepositorieContentStyled } from './repositorie-content.styled';

const RepositorieContent: React.FC = () => {
  return (
    <RepositorieContentStyled>
      <h2 className="cant-repos">Repositories (185)</h2>
      <RepositorieSearch />
      <RepositoryList />
    </RepositorieContentStyled>
  );
};

export { RepositorieContent };
