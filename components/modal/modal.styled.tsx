import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  inset-block: 0;
  inset-inline: 0;
  background-color: ${({ theme }) => theme.layerModal};
  backdrop-filter: blur(5px);
  .icon {
    inline-size: 60px;
    block-size: 60px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.grey2};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    padding: 2.5rem;
    color: ${({ theme }) => theme.grey2};
  }
  .close {
    padding: 1rem;
    position: absolute;
    inset-inline-end: 1rem;
    inset-block-start: 1rem;
    color: ${({ theme }) => theme.grey2};
    background-color: transparent;
    border-color: ${({ theme }) => theme.grey2};
  }
  .modal-content {
    position: absolute;
    inset-block-end: 0;
    inset-inline: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-start-start-radius: 0.75rem;
    border-start-end-radius: 0.75rem;
    background-color: ${({ theme }) => theme.modalContent};
    /* background-color: rgba(30, 29, 38, 1); */
    /* background-color: rgba(243, 240, 245, 1); */
    /* margin-inline: 1rem; */
    padding: 1rem;
    /* padding-block: 5rem; */
    button,
    input {
      inline-size: 100%;
    }
    input {
      border: 1px solid ${({ theme }) => theme.grey2};
      background-color: ${({ theme }) => theme.menuModal};
      color: ${({ theme }) => theme.grey};
      border-radius: 5px;
      padding-block: 0.5rem;
      padding-inline: 1rem;
      font: var(--body2-regular);
    }
  }

  @media screen and (min-width: 768px) {
    .modal-content {
      max-inline-size: 31.25rem;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform: translate(-50%, -50%);
      block-size: 15rem;
      border-radius: 12px;
      padding-block: 2rem;
    }
    button {
      padding-block: 0.7rem;
    }
    input {
      padding-block: 0.8rem;
    }
  }
`;
