import React from 'react';
import { RepositorieSearch } from '../repositorie-search/repositorie-search';
import { RepositorieContentStyled } from './repositorie-content.styled';

const RepositorieContent: React.FC = () => {
  return (
    <RepositorieContentStyled>
      <RepositorieSearch />
    </RepositorieContentStyled>
  );
};

export { RepositorieContent };
