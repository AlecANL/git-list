import React from 'react';
import { RepositoryContext, TContextType } from '../../context/app-context';
import { RepositorieSearchStyled } from './repositorie-search.styled';
import { TListOptions } from '../../types/list-options.types';
import { FilterOptions } from '../filter-options/filter-options';
import { useOptionModal } from '../../hooks/useOptionModal';
import { searchRepo } from '../../reducers/repositories/repositories.actions';

const typeList: TListOptions[] = [
  {
    name: 'all',
    value: 'all',
  },
  {
    name: 'sources',
    value: 'sources',
  },
  {
    name: 'forks',
    value: 'forks',
  },
  {
    name: 'archived',
    value: 'archived',
  },
  {
    name: 'mirrors',
    value: 'mirrors',
  },
];

const languagesList: TListOptions[] = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'CSS',
    value: 'css',
  },
  {
    name: 'JavaScript',
    value: 'javascript',
  },
  {
    name: 'Java',
    value: 'java',
  },
  {
    name: 'HTML',
    value: 'html',
  },
];

const sortList: TListOptions[] = [
  {
    name: 'last updated',
    value: 'last_updated',
  },
  {
    name: 'name',
    value: 'name',
  },
  {
    name: 'stars',
    value: 'stars',
  },
];

const RepositorieSearch: React.FC = () => {
  const { dispatch, state: s } = React.useContext(
    RepositoryContext
  ) as TContextType;
  const { search, setSearch } = React.useContext(
    RepositoryContext
  ) as TContextType;
  const state = useOptionModal();
  const { handleShowModal } = state;
  const { isShowLanguages, setShowLanguages } = state;
  const { isShowOptions, setShowOptions } = state;
  const { isShowSort, setShowSort } = state;

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.currentTarget.value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(searchRepo(search.toLowerCase()));
  }

  React.useEffect(() => {
    dispatch(searchRepo(search.toLowerCase()));
  }, [search, dispatch]);

  return (
    <RepositorieSearchStyled>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="search"
          name="search"
          id="search"
          placeholder="Find a repository"
          value={search}
          onChange={handleSearchChange}
        />
      </form>
      <div className="filter-buttons">
        <button
          className="btn is-grey is-icon"
          onClick={() => handleShowModal('type')}
        >
          <span>type</span>
          <i className="icon-arrow-down"></i>
        </button>
        <button
          onClick={() => handleShowModal('language')}
          className="btn is-grey is-icon"
        >
          <span>language</span>
          <i className="icon-arrow-down"></i>
        </button>
        <button
          onClick={() => handleShowModal('sort')}
          className="btn is-grey is-icon"
        >
          <span>sort</span>
          <i className="icon-arrow-down"></i>
        </button>
      </div>
      {isShowOptions && (
        <FilterOptions
          list={typeList}
          show={isShowOptions}
          setShow={setShowOptions}
        />
      )}
      {isShowLanguages && (
        <FilterOptions
          list={languagesList}
          show={isShowLanguages}
          setShow={setShowLanguages}
        />
      )}

      {isShowSort && (
        <FilterOptions
          list={sortList}
          show={isShowSort}
          setShow={setShowSort}
        />
      )}
    </RepositorieSearchStyled>
  );
};

export { RepositorieSearch };
