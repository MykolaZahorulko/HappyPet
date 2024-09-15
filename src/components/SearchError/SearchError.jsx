import React from 'react'
import styles from './SearchError.module.scss'
const SearchError = () => {
	return (
		<div className={styles.error}>
			Unfortunately we didn't find what you were searching about :(
		</div>
	)
}
export default SearchError
