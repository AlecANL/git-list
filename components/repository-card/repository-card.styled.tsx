import styled from 'styled-components';

export const RepositoryCardStyled = styled.article`
  /* outline: 1px solid #1c2dc3; */
  /* padding-block-start: 2rem; */
  padding-block: 2rem;
  border-block-end: 1px solid var(--grey-2);
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
  /* outline: 1px solid pink; */
  .name {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .name a {
    text-decoration: none;
    color: var(--primary);
    font: var(--headline2-semi-bold);
  }
  .name span {
    font: var(--caption-regular);
    text-transform: capitalize;
  }
  .repo-detail {
    margin-block: 1rem;
  }
`;

export const CardActions = styled.div`
  /* outline: 1px solid blue; */
  justify-self: flex-end;
`;

export const CardTopics = styled.div`
  /* outline: 1px solid orange; */
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  span {
    font: var(--caption-medium);
    display: block;
    background-color: var(--bg-topic);
    color: var(--primary);
    padding-inline: 0.75rem;
    padding-block: 0.3125rem;
    border-radius: 2.5rem;
    transition: all 0.2s ease-in-out;
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
  .dot {
    inline-size: 1rem;
    block-size: 1rem;
    background-color: red;
    border-radius: 50%;
  }
  .stat {
    /* outline: 1px solid red; */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: var(--caption-regular);
  }
`;
