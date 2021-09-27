import styled from 'styled-components';

export const RepositorieSearchStyled = styled.section`
  position: relative;
  /* outline: 1px solid green; */
  border-block-end: 1px solid ${({ theme }) => theme.borderBottom};
  padding-block: 2.5rem;
  .input-field {
    padding-block: 0.5rem;
    padding-inline: 1rem;
    inline-size: 100%;
    background-color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.borderField};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.grey};
    font: var(--body2-regular);
    outline: none;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colorTopic};
    }
  }
  .filter-buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-start: 1rem;
    overflow: auto;
    button {
      padding-inline: 1rem;
      padding-block: 0.5rem;
      font: var(--body2-semi-bold);
    }
    /* outline: 1px solid green; */
  }
  @media screen and (min-width: 768px) {
    padding-block-start: 0;
    display: flex;
    gap: 1rem;
    .filter-buttons {
      margin-block-start: 0;
    }
    .form {
      flex: 1;
    }
  }
`;
