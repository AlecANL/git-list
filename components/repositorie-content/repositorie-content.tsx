import React from 'react';
import { RepositorieSearch } from '../repositorie-search/repositorie-search';
import { RepositoryList } from '../repository-list/repository-list';
import { RepositorieContentStyled } from './repositorie-content.styled';
import { RepositoryContext, TContextType } from '../../context/app-context';

const RepositorieContent: React.FC = () => {
  const { state } = React.useContext(RepositoryContext) as TContextType;
  return (
    <RepositorieContentStyled>
      <h2 className="cant-repos">Repositories ({state.user.public_repos})</h2>
      <RepositorieSearch />
      <RepositoryList />
    </RepositorieContentStyled>
  );
};

export default React.memo(RepositorieContent);
