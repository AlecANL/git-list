import React from 'react';
import { CardTopics, Stats } from './repository-card.styled';
import {
  CardActions,
  CardDescription,
  RepositoryCardStyled,
} from './repository-card.styled';

const RepositoryCard: React.FC = () => {
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
              Leonidas Esteban
            </a>
          </h3>
          <span>public</span>
        </div>
        <p className="repo-detail">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          pariatur mag
        </p>
        <CardTopics>
          <span>javascript</span>
          <span>css</span>
          <span>styled-components</span>
          <span>HTML</span>
        </CardTopics>
        <Stats>
          <div className="stat">
            <div className="dot"></div>
            <span>javascript</span>
          </div>
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
