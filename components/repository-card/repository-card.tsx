import React from 'react';
import { CardTopics, Stats } from './repository-card.styled';
import { IRepositories } from '../../types/repository.type';
import axios from 'axios';
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

  function convertLanguage() {
    const language = repo.language;
    if (language.endsWith('#')) {
      return language.replace('#', 'sharp').toLocaleLowerCase();
    }
    if (language.endsWith('++')) {
      return language.replace('++', 'pp').toLocaleLowerCase();
    }

    return language.toLocaleLowerCase();
  }

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
            href="https://github.com/topics/javascript"
          >
            <span>javascript</span>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/topics/html"
          >
            <span>html</span>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/topics/css"
          >
            <span>css</span>
          </a>
        </CardTopics>
        <Stats>
          {repo.language && (
            <div className="stat">
              <div className={`dot is-${convertLanguage()}`}></div>
              <span className="language-name">{repo.language}</span>
            </div>
          )}
          {repo.stargazers_count > 0 && (
            <div className="stat branch">
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
            <div className="stat stars">
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
