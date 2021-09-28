import React from 'react';
import Image from 'next/image';
import { NotFoundStyled } from './not-found.styled';
import { UIContext } from '../../context/ui.context';
import { TUIContext } from '../../reducers/ui/ui.types';

const NotFound: React.FC = () => {
  const { handleShowModal } = React.useContext(UIContext) as TUIContext;

  return (
    <NotFoundStyled>
      <div className="content">
        <Image
          width="400"
          height="400"
          src="/images/psyduck.png"
          alt="image about psyduck pokemon"
        />
        <button onClick={handleShowModal} className="btn is-grey is-border">
          Search User
        </button>
        <p>Whoops Not Found 😔</p>
      </div>
    </NotFoundStyled>
  );
};

export { NotFound };
