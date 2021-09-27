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
  const getDateRepoUpdated = new Date(repo.updated_at);
  const repoUpdated = getDateRepoUpdated.toLocaleDateString('en-Us', {
    weekday: 'long',
    month: 'short',
    year: 'numeric',
  });

  return (
    <RepositoryCardStyled>
      <CardDescription>
        <div className="name">
          <h3>
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://github.com/${repo.owner.login}/${repo.name}`}
            >
              {repo.name}
            </a>
          </h3>
          <span className="tag">{repo.private ? 'private' : 'public'}</span>
        </div>
        <p className="repo-detail">{repo?.description}</p>
        <CardTopics>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/topics/{{nametopic}}"
          >
            <span>javascript</span>
          </a>
        </CardTopics>
        <Stats>
          {repo.language && (
            <div className="stat">
              <div className={`dot is-${repo.language.toLowerCase()}`}></div>
              <span className="language-name">{repo.language}</span>
            </div>
          )}
          {repo.stargazers_count > 0 && (
            <div className="stat">
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://github.com/${repo.owner.login}/${repo.name}/stargazers`}
              >
                <i className="icon-star"></i>
                <span>{repo.stargazers_count}</span>
              </a>
            </div>
          )}
          {repo.forks_count > 0 && (
            <div className="stat">
              <a
                target="_blank"
                rel="noreferrer"
                href={`
                https://github.com/${repo.owner.login}/${repo.name}/network/members
              `}
              >
                <i className="icon-branch"></i>
                <span>{repo.forks_count}</span>
              </a>
            </div>
          )}
          <div className="stat">
            <span>updated on {repoUpdated}</span>
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
