import React from 'react';
import Image from 'next/image';
import { UserDetailStyled } from './profile.styled';
import { Avatar, ProfileStyled } from './profile.styled';
import { UserName, FollowsStyled } from './profile.styled';
import { TContextType, RepositoryContext } from '../../context/app-context';
import { IRepositories } from '../../types/repository.type';

const Profile: React.FC = () => {
  const { state } = React.useContext(RepositoryContext) as TContextType;
  const [stars, setStars] = React.useState<IRepositories[]>([]);
  const { user } = state;

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${user.login}/starred`)
      .then(response => response.json())
      .then(setStars)
      .catch(e => console.log(`whoops was happen a error ${e}`));
  }, [user.login]);

  return (
    <ProfileStyled>
      <div className="user">
        <Avatar>
          <Image
            width={278}
            height={278}
            src={user.avatar_url}
            alt={`user avatar profile ${user.name}`}
          />
        </Avatar>
        <UserName>
          <h1 className="name">{user.name}</h1>
          <h2 className="nickname">{user.login}</h2>
        </UserName>
      </div>
      {user.bio && (
        <div className="user-info">
          <p className="profession">{user.bio}</p>
        </div>
      )}
      <Follows
        user={user.login}
        followers={user.followers}
        following={user.following}
        starts={stars.length}
      />
      <UserDetail
        location={user.location}
        twitter={user.twitter_username}
        site={user.blog}
      />
      <div className="user-buttons">
        <button className="btn is-grey is-border">follow</button>
        <button className="btn is-grey is-icon is-border">
          <i className="icon-heart is-pink"></i>
          sponsor
        </button>
      </div>
    </ProfileStyled>
  );
};

type FollowsProps = {
  followers: number | string;
  following: number | string;
  user: string;
  starts: number;
};

const Follows: React.FC<FollowsProps> = ({
  user,
  starts,
  followers,
  following,
}) => {
  return (
    <FollowsStyled>
      <div className="followers-item">
        <a href={`https://github.com/${user}?tab=followers`}>
          <i className="icon-people"></i>
          <span>{followers}</span>
          <small>followers</small>
        </a>
      </div>
      <div className="followers-item">
        <a href={`https://github.com/${user}?tab=following`}>
          <span>{following}</span>
          <small>following</small>
        </a>
      </div>
      <div className="followers-item">
        <a href="#">
          <i className="icon-star"></i>
          <span>{starts}</span>
        </a>
      </div>
    </FollowsStyled>
  );
};

type TUserDetailProps = {
  location: string;
  site: string;
  twitter: string;
};
const UserDetail: React.FC<TUserDetailProps> = ({
  location,
  twitter,
  site,
}) => {
  return (
    <UserDetailStyled>
      {location && (
        <div className="detail-item location">
          <i className="icon-badge-location"></i>
          <span>{location}</span>
        </div>
      )}
      {site && (
        <div className="detail-item site">
          <i className="icon-link"></i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://leonidasesteban.com"
          >
            {site}
          </a>
        </div>
      )}
      {twitter && (
        <div className="detail-item twitter">
          <i className="icon-twitter"></i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/leonidasesteban"
          >
            @{twitter}
          </a>
        </div>
      )}
    </UserDetailStyled>
  );
};
export { Profile };
