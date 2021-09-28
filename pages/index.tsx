import React from 'react';
import Head from 'next/head';
import { BiSearchAlt } from 'react-icons/bi';
import { RepositoryContext, TContextType } from '@context/app-context';
import Layout from '@components/layout/layout';
import Profile from '@components/profile/profile';
import RepositorieContent from '@components/repositorie-content/repositorie-content';
import { Modal } from '@components/modal/modal';
import { Loading } from '@components/loading/loading';
import { getData } from 'services/getRepositories';
import { NotFound } from '@components/not-found/not-found';
import { getUser } from '@reducer/repositories/repositories.actions';
import { getRepositories } from '@reducer/repositories/repositories.actions';
import { UIContext } from '@context/ui.context';
import { TUIContext } from '@reducer/ui/ui.types';
import { handleErrorPage } from '@reducer/ui/ui.actions';
import { handleLoadingPage } from '@reducer/ui/ui.actions';
// import { user, repositoryList } from '../utils/fakeData';

export default function Home() {
  const appState = React.useContext(RepositoryContext) as TContextType;
  const { state: uiState } = React.useContext(UIContext) as TUIContext;
  const { dispatch: uiDispatch } = React.useContext(UIContext) as TUIContext;
  const { handleShowModal } = React.useContext(UIContext) as TUIContext;
  const { dispatch, currentUser } = appState;

  React.useEffect(() => {
    async function getUserRepos() {
      try {
        const data = await getData(currentUser);
        if (!data) {
          uiDispatch(handleErrorPage(true));
          return;
        }
        const { user, repos } = data;
        if (user.status === 200 && repos.status === 200) {
          dispatch(getUser(user.data));
          dispatch(getRepositories(repos.data));
          uiDispatch(handleLoadingPage(false));
          uiDispatch(handleErrorPage(false));
        }
      } catch (err) {
        console.log(err);
        uiDispatch(handleErrorPage(true));
      }
    }
    getUserRepos();
  }, [dispatch, currentUser, uiDispatch]);

  return (
    <>
      <Head>
        <title>Your Repositories | Github</title>
        <meta
          name="description"
          content="Find your repositories and the another github user..."
        />
        <meta property="og:title" content="Your Repositories | Github" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://git-list.vercel.app/" />
        <meta
          property="og:image"
          content="https://github.com/AlecANL/git-list/raw/main/public/images/design1.png"
        />
        <meta
          property="og:description"
          content="Find your repositories and the another github user..."
        />
      </Head>
      {uiState.isError && <NotFound />}
      {uiState.isLoading && <Loading />}
      {!uiState.isLoading && !uiState.isError && (
        <Layout>
          <Profile />
          <RepositorieContent />
        </Layout>
      )}
      <button
        onClick={handleShowModal}
        className="btn-float btn-search is-border"
        title="search user"
      >
        <BiSearchAlt />
      </button>
      {uiState.isShowSearchModal && <Modal />}
    </>
  );
}
