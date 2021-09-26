import React from 'react';
import { FilterOptionsStyled } from './filter-options.styled';
import { TListOptions } from '../../types/list-options.types';

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

export { FilterOptions };
