import React from 'react';
import { CardTopics, Stats } from './repository-card.styled';
import { IRepositories } from '../../types/repository.type';
import {
  CardActions,
  CardDescription,
  RepositoryCardStyled,
} from './repository-card.styled';

type RepoCardProps = {
  repo: IRepositories;
};
const RepositoryCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <RepositoryCardStyled>
      <CardDescription>
        <div className="name">
          <h3>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/{{user}}/{{repo_name}}"
            >
              {repo.name}
            </a>
          </h3>
          <span>public</span>
        </div>
        <p className="repo-detail">{repo?.description}</p>
        <CardTopics>
          <span>javascript</span>
          <span>css</span>
          <span>styled-components</span>
          <span>HTML</span>
        </CardTopics>
        <Stats>
          {repo.language && (
            <div className="stat">
              <div className={`dot is-${repo.language.toLowerCase()}`}></div>
              <span className="language-name">{repo.language}</span>
            </div>
          )}
          <div className="stat">
            <i className="icon-star"></i>
            <span>4</span>
          </div>
          <div className="stat">
            <i className="icon-branch"></i>
            <span>4</span>
          </div>
          <div className="stat">
            <span>updated 21 hours ago</span>
          </div>
        </Stats>
      </CardDescription>
      <CardActions>
        <button className="btn is-grey is-icon">
          <i className="icon-star"></i>
          <span>Start</span>
        </button>
      </CardActions>
    </RepositoryCardStyled>
  );
};

export { RepositoryCard };
