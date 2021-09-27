import styled, { keyframes } from 'styled-components';

export const LoaderAnimation = keyframes`
0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 200px;
        height: 200px;
        opacity: 0;
        transform: scale(1);
    }
`;

export const LoadingStyled = styled.div`
  position: fixed;
  z-index: 99;
  inset-inline: 0;
  inset-block: 0;
  background-color: ${({ theme }) => theme.modalContent};
  .loader {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    p {
      font: var(--headline1);
      letter-spacing: 2.17px;
      font-size: 2rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.grey2};
    }
  }
  .lds-ripple {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;
  }
  .icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.grey2};
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid ${({ theme }) => theme.grey2};
    opacity: 1;
    border-radius: 50%;
    animation: ${LoaderAnimation} 0.8s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
