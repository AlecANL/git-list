import styled from 'styled-components';

export const ProfileStyled = styled.aside`
  display: flex;
  flex-direction: column;
  .user {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .profession {
    margin-block: 1.5rem 1rem;
    font: var(--body1-regular);
  }
  .is-pink {
    color: var(--pink);
  }
  .user-buttons {
    display: flex;
    gap: 0.5rem;
  }
  .user-buttons .btn {
    flex: 1;
  }
  @media screen and (min-width: 768px) {
    .user {
      flex-direction: column;
      order: 1;
    }
    .user-info {
      order: 3;
    }
    .profession {
      margin-block-start: 0;
    }
    .user-buttons {
      order: 2;
      margin-block: 1.5rem;
    }
  }
  @media screen and (min-width: 1024px) {
    /* padding-inline-start: 3.125rem; */
    /* inline-size: 300px; */
  }
`;

export const Avatar = styled.div`
  /* outline: 1px solid red; */
  inline-size: 5rem;
  block-size: 5rem;
  border-radius: 50%;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    inline-size: 17.375rem;
    block-size: 17.375rem;
    align-self: flex-start;
  }
`;

export const UserName = styled.div`
  /* outline: 1px solid blue; */
  .name {
    font: var(--headline1);
  }
  .nickname {
    font: var(--headline2-ligth);
  }
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`;

export const FollowsStyled = styled.div`
  display: flex;
  gap: 1rem;
  overflow: auto;
  flex-wrap: wrap;
  row-gap: 4px;
  small {
    font: var(--body2-regular);
  }

  span {
    font: var(--body2-semi-bold);
  }
  .followers-item {
    /* outline: 1px solid red; */
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .followers-item:not(:first-child) {
    &::before {
      content: '•';
    }
  }
  @media screen and (min-width: 768px) {
    order: 4;
  }
`;

export const UserDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 1.5rem;
  gap: 0.25rem;
  font: var(--body2-regular);
  .detail-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
      display: block;
      font: var(--body2-regular);
      text-decoration: none;
      color: inherit;
    }
  }
  @media screen and (min-width: 768px) {
    order: 5;
  }
`;
