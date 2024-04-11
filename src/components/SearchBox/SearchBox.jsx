import css from './SearchBox.module.css'
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const elementId = useId();
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter)

    const handleChange = e => {
        dispatch(changeFilter(e.target.value));
    }

    return (
        <div className={css.container}>
          <label className={css.text} htmlFor={elementId}>
            Find contacts by name
          </label>
          <input
            value={value}
            onChange={handleChange}
            className={css.search}
            type="text"
            id={elementId}
            placeholder="Name"
          />
        </div>
      );
};

export default SearchBox;