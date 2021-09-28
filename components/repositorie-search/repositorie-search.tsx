import React from 'react';
import { RepositoryContext, TContextType } from '../../context/app-context';
import { RepositorieSearchStyled } from './repositorie-search.styled';
import { FilterOptions } from '../filter-options/filter-options';
import { useOptionModal } from '../../hooks/useOptionModal';
import { typeList, languagesList, sortList } from 'utils/listOptionsFilter';

const RepositorieSearch: React.FC = () => {
  const modalState = useOptionModal();
  const { search } = React.useContext(RepositoryContext) as TContextType;
  const { setSearch } = React.useContext(RepositoryContext) as TContextType;
  const { handleShowModal } = modalState;
  const { isShowLanguages, setShowLanguages } = modalState;
  const { isShowOptions, setShowOptions } = modalState;
  const { isShowSort, setShowSort } = modalState;

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.currentTarget.value);
  }

  return (
    <RepositorieSearchStyled>
      <form className="form">
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
      <FilterOptions
        name="name"
        list={typeList}
        show={isShowOptions}
        setShow={setShowOptions}
      />
      {/* {isShowOptions && (
      )} */}
      {/* {isShowLanguages && (
        )} */}
      <FilterOptions
        name="language"
        list={languagesList}
        show={isShowLanguages}
        setShow={setShowLanguages}
      />

      <FilterOptions
        name="option"
        list={sortList}
        show={isShowSort}
        setShow={setShowSort}
      />
      {/* {isShowSort && (
      )} */}
    </RepositorieSearchStyled>
  );
};

export { RepositorieSearch };
