import React from 'react';
import Image from 'next/image';
import { NotFoundStyled } from './not-found.styled';
import { RepositoryContext, TContextType } from '../../context/app-context';

const NotFound: React.FC = () => {
  const app = React.useContext(RepositoryContext) as TContextType;
  const { setShowModal, isShowModal } = app;

  function handleShowModal() {
    setShowModal(!isShowModal);
  }
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
