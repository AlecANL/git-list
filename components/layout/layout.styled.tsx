import styled from 'styled-components';

export const LayoutStyled = styled.div`
  padding: 1.5rem;
  @media screen and (min-width: 768px) {
    outline: 1px solid green;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1rem;
  }
  @media screen and (min-width: 1024px) {
    padding-inline: 5rem;
    gap: 2rem;
  }
`;
