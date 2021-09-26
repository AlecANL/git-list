import styled from 'styled-components';

export const FilterOptionsStyled = styled.div`
  position: absolute;
  inline-size: 16rem;
  margin-block-start: 1rem;
  border: 1px solid var(--grey-2);
  border-radius: 0.5rem;
  /* background-color: #fff; */
  color: ${({ theme }) => theme.grey2};
  background-color: ${({ theme }) => theme.menuModal};
  .icon-close {
    cursor: pointer;
  }
  .heading {
    padding-inline: 1rem;
    padding-block: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul li {
    padding-block: 0.5rem;
    padding-inline: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* gap: 1rem; */
  }
  li span {
    margin-inline-start: 1rem;
    text-transform: capitalize;
  }
  @media screen and (min-width: 768px) {
    inset-inline-end: 3.125rem;
    margin-block-start: 3.75rem;
  }
  .icon {
    display: none;
  }
  .icon.is-active {
    display: block;
  }
`;
