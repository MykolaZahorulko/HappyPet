import React from 'react';
import { useSearching } from '../../hooks/useSearching.js';
import { useSelectorValue } from '../../hooks/useSelectorValue.js'
import styles from './Search.module.scss';
import searchIcon from '../../assets/images/icons/searchIcon.svg';

const Search = React.forwardRef(({ searchData, className, placeholder, onClick = () => {} }, ref) => {
  const { searchBreed, handleInputChange } = useSearching(searchData);
  const { value: isModalActive } = useSelectorValue(state => state.isModalActive)
  return (
    <div className={`${styles.searchContainer} ${className}`} onClick={onClick}>
      <img
        className={`${styles.searchIcon} ${styles.img}`}
        src={searchIcon}
        alt='Search Icon'
      />
      <input
        ref={ref}
        className={styles.searchInput}
        type='text'
        value={searchBreed}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={isModalActive}
      />
    </div>
  );
});

export default Search;
