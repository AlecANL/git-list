import React from 'react';
import { RepositoryCard } from '../repository-card/repository-card';
import { RepositoryListStyled } from './repository-list.styled';

const RepositoryList: React.FC = () => {
  const fakeListRepos = [1, 2, 3, 4, 5];
  return (
    <RepositoryListStyled>
      {fakeListRepos.map((_, idx) => (
        <RepositoryCard key={idx} />
      ))}
    </RepositoryListStyled>
  );
};

export { RepositoryList };
