import styled from 'styled-components';

export const RepositorieSearchStyled = styled.main`
  position: relative;
  outline: 1px solid blue;
  padding-block: 2.5rem;
  .input-field {
    padding-block: 3px;
    padding-inline: 1rem;
    inline-size: 100%;
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    font: var(--body2-regular);
  }
  .filter-buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-start: 1rem;
    button {
      padding-inline: 0.5rem;
      padding-block: 0;
      font: var(--body2-semi-bold);
      font-size: 0.75rem;
    }
    outline: 1px solid green;
  }
  @media screen and (min-width: 768px) {
    .filter-buttons {
      button {
        padding-block: 5px;
        font-size: 0.875rem;
      }
    }
    .input-field {
      padding-block: 0.5rem;
    }
  }
`;

export const FilterOptionsStyled = styled.div`
  position: absolute;
  inline-size: 16rem;
  margin-block-start: 1rem;
  border: 1px solid var(--grey-2);
  border-radius: 0.5rem;
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
`;
