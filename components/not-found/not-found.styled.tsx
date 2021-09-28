import styled from 'styled-components';

export const NotFoundStyled = styled.div`
  position: fixed;
  z-index: 99;
  inset-inline: 0;
  inset-block: 0;
  background-color: ${({ theme }) => theme.modalContent};
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font: var(--body1-regular);
    font-size: 2rem;
    color: ${({ theme }) => theme.grey2};
  }
  button {
  }
`;
