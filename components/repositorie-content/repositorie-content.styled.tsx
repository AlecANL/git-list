import styled from 'styled-components';

export const RepositorieContentStyled = styled.main`
  /* outline: 1px solid blue; */
  .cant-repos {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .cant-repos {
      display: block;
      margin-block-end: 1.5rem;
      font: var(--headline2-semi-bold);
    }
  }
`;
