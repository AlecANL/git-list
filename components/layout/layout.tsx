import React from 'react';
import { LayoutStyled } from './layout.styled';

type LayoutProps = {
  children: JSX.Element[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default React.memo(Layout);
