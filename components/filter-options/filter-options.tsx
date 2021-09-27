import React, { useContext } from 'react';
import { FilterOptionsStyled } from './filter-options.styled';
import { TListOptions } from '../../types/list-options.types';
import { RepositoryContext, TContextType } from '../../context/app-context';
import { filterByTag } from '../../reducers/repositories/repositories.actions';

type TFilterOptionsProps = {
  list: TListOptions[];
  show: boolean;
  setShow: Function;
  name: string;
};

const FilterOptions: React.FC<TFilterOptionsProps> = ({
  list,
  show,
  setShow,
  name,
}) => {
  const { state } = useContext(RepositoryContext) as TContextType;
  const { dispatch } = useContext(RepositoryContext) as TContextType;

  function handleFilterType(type: string, idx: number) {
    setShow(!show);
    switch (name) {
      case 'language':
        filterLanguage(type);
      default:
        [];
    }
  }

  function filterLanguage(language: string) {
    const value = language.toLowerCase();

    dispatch(
      filterByTag({
        tagSearched: value,
      })
    );
  }

  function filterRepo() {}

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
          <li onClick={() => handleFilterType(item.value, idx)} key={idx}>
            {/* {idx === 0 && <i className="icon-check"></i>} */}
            {/* <i className={`icon-check icon ${idx === 0 && 'is-active'}`}></i> */}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </FilterOptionsStyled>
  );
};

export { FilterOptions };
