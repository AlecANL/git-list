import React from 'react';
import {
  RepositorieSearchStyled,
  FilterOptionsStyled,
} from './repositorie-search.styled';

type TListOptions = {
  name: string;
  value: string;
};

const RepositorieSearch: React.FC = () => {
  const [isShowTypeModal, setShowTypeModal] = React.useState<boolean>(false);
  const [isShowLanguageModal, setShowLanguageModal] =
    React.useState<boolean>(false);
  const [isShowSortModal, setShowSortModal] = React.useState<boolean>(false);
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

  function handleShowModal(modal: string) {
    switch (modal) {
      case 'type':
        setShowTypeModal(!isShowTypeModal);
        setShowSortModal(false);
        setShowLanguageModal(false);
        console.log('press type');
        break;
      case 'language':
        setShowTypeModal(false);
        setShowSortModal(false);
        setShowLanguageModal(!isShowLanguageModal);
        break;
      case 'sort':
        setShowTypeModal(false);
        setShowLanguageModal(false);
        setShowSortModal(!isShowSortModal);
      default:
        return;
    }
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
      {isShowTypeModal && (
        <FilterOptions
          list={typeList}
          show={isShowTypeModal}
          setShow={setShowTypeModal}
        />
      )}
      {isShowLanguageModal && (
        <FilterOptions
          list={languagesList}
          show={isShowLanguageModal}
          setShow={setShowLanguageModal}
        />
      )}

      {isShowSortModal && (
        <FilterOptions
          list={sortList}
          show={isShowSortModal}
          setShow={setShowSortModal}
        />
      )}
    </RepositorieSearchStyled>
  );
};

type TFilterOptionsProps = {
  list: TListOptions[];
  show: boolean;
  setShow: Function;
};

const FilterOptions: React.FC<TFilterOptionsProps> = ({
  list,
  show,
  setShow,
}) => {
  function handleFilterType(type: string) {
    console.log(type);
  }

  function handleCloseModal() {
    setShow(!show);
  }

  return (
    <FilterOptionsStyled>
      <div className="heading">
        <span>select type</span>
        <i onClick={handleCloseModal} className="icon-close"></i>
      </div>
      <ul className="list">
        {list.map((item, idx) => (
          <li onClick={() => handleFilterType(item.value)} key={idx}>
            {idx === 0 && <i className="icon-check"></i>}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </FilterOptionsStyled>
  );
};

export { RepositorieSearch };
