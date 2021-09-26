import { createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    grey: string;
    grey2: string;
    justWhite: string;
    button: string;
    borderButton: string;
    topic: string;
    colorTopic: string;
    borderBottom: string;
    menuModal: string;
  }
}

export const GlobalStyles = createGlobalStyle`
:root {
  --baeFont:'Inter', sans-serif;
  --bg-topic: #ddf4ff;
  --primary: #57a6ff; 
  --white: #fffffe; 
  --black: #141414; 
  --grey: #8b949e; 
  --bg: #0d1117; 
  --button: #22262c; 
  --grey-2: #c5ced7; 
  --pink: #cc68a0; 
  --yellow: #f1e05a; 
  --purple: #563d7c; 
  --black-2: #171b21; 
  --headline1: 600 1.625rem/2rem var(--baeFont); 
  --button: 500 0.875rem/1.5rem var(--baeFont); 
  --headline2-semi-bold: 600 1.25rem/1.5rem var(--baeFont);  
  --headline2-ligth: 300 1.25rem/1.5rem var(--baeFont); 
  --body1-regular: 400 1rem/1.5rem var(--baeFont); 
  --body1-semi-bold: 700 1rem/1.5rem var(--baeFont); 
  --body2-regular: 400 0.875rem/1.5rem var(--baeFont); 
  --body2-semi-bold: 600 0.875rem/1.5rem var(--baeFont); 
  --caption-regular: 400 0.75rem/1.125rem var(--baeFont); 
  --caption-medium: 500 0.75rem/1.125rem var(--baeFont); 
}

body {
  /* color: var( --primary); */
  background-color: ${({ theme }) => theme.body};
  font: var(--body2-regular);
  margin: 0;
  color: ${({ theme }) => theme.justWhite};
  transition: all .3s ease-in-out;
}


* {
  box-sizing: border-box;
}


h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

.btn {
  border: 1px solid transparent;
  text-transform: capitalize;
  padding-inline: 1.5rem;
  padding-block: .25rem;
  border-radius: 0.5rem;
  font: var(--button);
  text-align: center;
  cursor: pointer;
}
.btn:active {
  transform: scale(.98);
}
.is-icon {
  display: flex;
  align-items: center;
  justify-content:center;
  gap: .5rem;
}
.is-grey {
  background-color: ${({ theme }) => theme.button};
  border-color: ${({ theme }) => theme.borderButton};
  color: ${({ theme }) => theme.justWhite};
}

.btn-float {
  position: fixed;
  inset-inline-end: 3.125rem;
  inset-block-end: 3.125rem;
  /* padding: 1rem; */
  cursor: pointer;
  inline-size: 30px;
  block-size: 30px;
  /* font-size: 1.5rem; */
  border: none;
  background-color: ${({ theme }) => theme.menuModal};
  border: 1px solid ${({ theme }) => theme.borderButton};
  border-radius: 50%;
  transition: all 300ms ease-in-out;
  transform: scale(3);

  &:hover {
    transform: scale(3.2);
  }
    &:active {
    transform: scale(2.8);
  }
}

.is-javascript {
background-color: #f1e05a;
}
.is-html {
  background-color: #e34c26;
}
.is-css {
  background-color:#563d7c;
}
.is-typescript {
  background-color: #2b7489;
}

`;

export const darkTheme = {
  body: '#0d1117',
  grey: '#8b949e',
  grey2: '#c5ced7',
  justWhite: '#fff',
  button: '#22262c',
  borderButton: '#8B949E',
  topic: 'rgba(56,139,253,.15)',
  colorTopic: '#58a6ff',
  borderBottom: '#30363d',
  menuModal: '#212730',
};

export const ligthTheme = {
  body: '#fff',
  grey: '#57606a',
  grey2: '#24292f',
  justWhite: '#000',
  button: '#f6f8fa',
  borderButton: 'rgba(27,31,36,.15)',
  topic: '#ddf4ff',
  colorTopic: '#0969da',
  borderBottom: '#d0d7de',
  menuModal: '#fff',
};
