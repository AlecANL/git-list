import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import { Profile } from '../components/profile/profile';
import { RepositorieContent } from '../components/repositorie-content/repositorie-content';
import React from 'react';
import { RepositoryContext, TContextType } from '../context/app-context';
import { user, repositoryList } from '../utils/fakeData';
import {
  getRepositories,
  getUser,
  handleLoadingPage,
} from '../reducers/repositories/repositories.actions';

export default function Home() {
  const appState = React.useContext(RepositoryContext) as TContextType;
  const { state, dispatch } = appState;

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(getUser(user));
      dispatch(getRepositories(repositoryList));
      dispatch(handleLoadingPage(false));
    }, 1500);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Your Repositories | Github</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {state.isLoading ? (
        <h1>Loading</h1>
      ) : (
        <Layout>
          <Profile />
          <RepositorieContent />
        </Layout>
      )}
    </>
  );
}
