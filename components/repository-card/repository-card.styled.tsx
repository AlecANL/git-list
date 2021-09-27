import styled from 'styled-components';

export const RepositoryCardStyled = styled.article`
  padding-block: 2rem;
  /* border-block-end: 1px solid var(--grey-2); */
  border-block-end: 1px solid ${({ theme }) => theme.borderBottom};

  @media screen and (min-width: 768px) {
    display: grid;
    place-content: space-between;
    grid-template-columns: 1fr 150px;
    padding-block-end: 1rem;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 390px 277px;
  }
`;

export const CardDescription = styled.div`
  .name {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .name:hover a:hover {
    text-decoration: underline;
  }
  .name a {
    text-decoration: none;
    color: var(--primary);
    font: var(--headline2-semi-bold);
  }
  .name .tag {
    font: var(--caption-regular);
    text-transform: capitalize;
    color: ${({ theme }) => theme.grey};
    border: 1px solid ${({ theme }) => theme.grey};
    padding-inline: 0.3125rem;
    border-radius: 3.125rem;
  }
  .repo-detail {
    margin-block: 1rem;
    color: ${({ theme }) => theme.grey};
  }
`;

export const CardActions = styled.div`
  justify-self: flex-end;
  button {
    font: var(--body2-semi-bold);
  }
  button i {
    color: ${({ theme }) => theme.grey};
  }

  @media screen and (min-width: 768px) {
    button {
      padding-block: 0.5rem;
    }
  }
`;

export const CardTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  a {
    text-decoration: none;
  }
  span {
    font: var(--caption-medium);
    display: block;
    background-color: ${({ theme }) => theme.topic};
    color: ${({ theme }) => theme.colorTopic};
    padding-inline: 0.75rem;
    padding-block: 0.3125rem;
    border-radius: 2.5rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  span:hover {
    background-color: #0969da;
    color: #fff;
  }
`;

export const Stats = styled.div`
  /* outline: 1px solid orangered; */
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-block-start: 1rem;
  padding-block-end: 1.5rem;
  @media screen and (min-width: 768px) {
    padding-block-end: 0;
  }
  .dot {
    inline-size: 1rem;
    block-size: 1rem;
    /* background-color: red; */
    border-radius: 50%;
  }
  .stat {
    /* outline: 1px solid red; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.grey2};
    font: var(--caption-regular);
  }
  .stat a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.grey2};
  }
  .stat:hover a {
    color: ${({ theme }) => theme.colorTopic};
    text-decoration: underline;
  }
  .language-name {
    color: ${({ theme }) => theme.grey};
  }
`;
