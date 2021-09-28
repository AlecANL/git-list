import React from 'react';
import { FilterOptionsStyled } from './filter-options.styled';
import { TListOptions } from '../../types/list-options.types';
import { useHandleOptionFilter } from '@customHooks/useHandleOptionFilter';

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
  const listRefs = React.useRef([]);
  const { handleCloseModal, handleFilterType } = useHandleOptionFilter(
    listRefs,
    setShow,
    show,
    name
  );

  function addToRefs(e: HTMLElement) {
    if (e && !listRefs.current.includes(e)) {
      listRefs.current.push(e);
    }
  }

  return (
    <FilterOptionsStyled className={show ? 'is-active' : ''}>
      <div className="heading">
        <span>select type</span>
        <i onClick={handleCloseModal} className="icon-close"></i>
      </div>
      <ul className="list">
        {list.map((item, idx) => (
          <li
            ref={addToRefs}
            key={idx}
            data-idx={idx}
            onClick={() => handleFilterType(item.value, idx)}
          >
            <i className="icon-check option-icon"></i>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </FilterOptionsStyled>
  );
};

export { FilterOptions };
