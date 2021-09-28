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
    layerModal: string;
    borderField: string;
    scrollBar: string;
    scroll: string;
    modalContent: string;
    hoverMenuOption: string;
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

body::-webkit-scrollbar {
  inline-size: 10px;
  background-color: ${({ theme }) => theme.scrollBar};
}
body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.scroll};
  border-radius: 10px;
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
  letter-spacing: 1.17px;

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
.is-icon i {
  font-size: 1.3rem;
}
.is-grey {
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.justWhite};
  border-color: ${({ theme }) => theme.borderButton};
}
.is-border {
  border-color: ${({ theme }) => theme.borderField};

}

.btn-float {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  inline-size: 50px;
  block-size: 50px;
  font-size: 1.5rem;
  inset-inline-end: 1rem;
  border: none;
  inset-block-end: 1rem;
  color: ${({ theme }) => theme.justWhite};
  background-color: ${({ theme }) => theme.scrollBar};
  border: 1px solid ${({ theme }) => theme.borderButton};
  border-radius: 50%;
  transition: all 100ms ease-in-out;
  @media screen and (min-width: 768px){
  inset-inline-end: 3.125rem;
  inset-block-end: 2rem;
  }
  /* transform: scale(3); */

  &:hover {
    transform: scale(1.2);
  }
    &:active {
    transform: scale(1);
  }
}
.btn-search {
  inset-block-end: 6rem;
}

`;

export const darkTheme = {
  body: 'rgba(30, 29, 38, 1)',
  // body: '#22272e',
  // body: '#0d1117',
  grey: '#8b949e',
  grey2: '#c5ced7',
  justWhite: '#fff',
  button: '#373e47',
  // button: '#22262c',
  borderButton: 'transparent',
  borderField: '#8B949E',
  topic: 'rgba(56,139,253,.15)',
  colorTopic: '#58a6ff',
  borderBottom: '#30363d',
  // menuModal: '#212730',
  menuModal: '#373e47',
  layerModal: 'rgba(49, 49, 49, 0.671)',
  scrollBar: '#424242',
  scroll: '#686868',
  modalContent: 'rgba(30, 29, 38, 1)',
  hoverMenuOption: 'rgba(255, 255, 255, 0.096)',
};

export const ligthTheme = {
  body: '#f5f5f5',
  grey: '#57606a',
  grey2: '#24292f',
  justWhite: '#000',
  button: '#f6f8fa',
  borderButton: 'rgba(27,31,36,.15)',
  borderField: 'rgba(27,31,36,.15)',
  topic: '#ddf4ff',
  colorTopic: '#0969da',
  borderBottom: '#d0d7de',
  menuModal: '#fff',
  layerModal: 'rgba(240, 235, 246, 0.103)',
  scrollBar: '#cdd9e5',
  scroll: '#c1c1c1',
  modalContent: '#fff',
  hoverMenuOption: 'rgba(109, 109, 109, 0.096)',

  // modalContent: 'rgba(243, 240, 245, 1)',
};
