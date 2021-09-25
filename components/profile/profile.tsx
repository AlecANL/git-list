import React from 'react';
import Image from 'next/image';
import { UserDetailStyled } from './profile.styled';
import {
  Avatar,
  ProfileStyled,
  UserName,
  FollowsStyled,
} from './profile.styled';

const Profile: React.FC = () => {
  return (
    <ProfileStyled>
      <div className="user">
        <Avatar>
          <Image
            width={278}
            height={278}
            src="https://avatars.githubusercontent.com/u/57077592?v=4"
            alt="avatar user {{name}}"
          />
        </Avatar>
        <UserName>
          <h1 className="name">Leonidas Esteban</h1>
          <h2 className="nickname">Leonidas Esteban</h2>
        </UserName>
      </div>
      <div className="user-info">
        <p className="profession">software Engineer, professor</p>
      </div>
      <Follows />
      <UserDetail />
      <div className="user-buttons">
        <button className="btn is-grey">follow</button>
        <button className="btn is-grey is-icon">
          <i className="icon-heart is-pink"></i>
          sponsor
        </button>
      </div>
    </ProfileStyled>
  );
};

const Follows: React.FC = () => {
  return (
    <FollowsStyled>
      <div className="followers-item">
        <i className="icon-people"></i>
        <span>4.6k</span>
        <small>followers</small>
      </div>
      <div className="followers-item">
        <span>60</span>
        <small>following</small>
      </div>
      <div className="followers-item">
        <i className="icon-star"></i>
        <span>81</span>
      </div>
    </FollowsStyled>
  );
};

const UserDetail: React.FC = () => {
  return (
    <UserDetailStyled>
      <div className="detail-item location">
        <i className="icon-badge-location"></i>
        <span>Mexico City</span>
      </div>
      <div className="detail-item site">
        <i className="icon-link"></i>
        <a target="_blank" rel="noreferrer" href="https://leonidasesteban.com">
          https://leonidasessteban.com
        </a>
      </div>
      <div className="detail-item twitter">
        <i className="icon-twitter"></i>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/leonidasesteban"
        >
          leonidasesteban
        </a>
      </div>
    </UserDetailStyled>
  );
};
export { Profile };
