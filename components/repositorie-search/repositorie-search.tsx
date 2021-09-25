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

  function handleShowTypeModal() {
    setShowTypeModal(!isShowTypeModal);
  }

  return (
    <RepositorieSearchStyled>
      <form>
        <input
          className="input-field"
          type="search"
          name="search"
          id="search"
          placeholder="Find a repository"
        />
      </form>
      <div className="filter-buttons">
        <button className="btn is-grey is-icon" onClick={handleShowTypeModal}>
          <span>type</span>
          <i className="icon-arrow-down"></i>
        </button>
        <button className="btn is-grey is-icon">
          <span>language</span>
          <i className="icon-arrow-down"></i>
        </button>
        <button className="btn is-grey is-icon">
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
