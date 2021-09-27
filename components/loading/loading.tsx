import React from 'react';
import { LoadingStyled } from './loading.styled';

const Loading: React.FC = () => {
  return (
    <LoadingStyled>
      <div className="loader">
        <div className="lds-ripple">
          <div></div>
          <i className="icon icon-github"></i>
          <div></div>
        </div>
        <p>loading...</p>
      </div>
    </LoadingStyled>
  );
};

export { Loading };
