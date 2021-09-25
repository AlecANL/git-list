import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
  --baeFont:'Inter', sans-serif;
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
  --body2-semi-bold: semi bold 0.875rem/1.5rem var(--baeFont); 
  --caption-regular: 400 0.75rem/1.125rem var(--baeFont); 
  --caption-medium: 500 0.75rem/1.125rem var(--baeFont); 
}

* {
  box-sizing: border-box;
}

body {
  /* color: var( --primary); */
  font: var(--body2-regular);
  margin: 0;
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

.btn {
  border-color: transparent;
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

`;
