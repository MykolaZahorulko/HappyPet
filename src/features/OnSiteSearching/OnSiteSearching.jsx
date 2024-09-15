import React, { useEffect, useRef } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import PetItem from '../../components/PetItem/PetItem.jsx'
import Search from '../../components/Search/Search.jsx'
import SearchError from '../../components/SearchError/SearchError.jsx'
import { useActions } from '../../hooks/useActions.js'
import { useBreedsData } from '../../hooks/useBreedsData.js'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'
import { useSelectorValue } from '../../hooks/useSelectorValue.js'
import styles from './OnSiteSearching.module.scss'
import closure from '../../assets/images/icons/close.svg'
import { dropDownData } from '../../utils/dropDownData.js'

const OnSiteSearching = () => {
	const { value: isSearching } = useSelectorValue(state => state.isSearching)
	const { value: searchingFor } = useSelectorValue(state => state.searchingFor)
	const { value: filteredBreeds } = useSelectorValue(state => state.setFilteredBreeds)
	const { setIsSearching } = useActions()
	const inputRef = useRef()
	const { dogData, catData } = useBreedsData()
	useLockBodyScroll(isSearching)
	
	useEffect(() => {
		if (isSearching && inputRef?.current) {
			inputRef.current.focus()
		}
	}, [isSearching])
	
	
	return (
		<div className={`${styles.searchWrap} ${isSearching ? styles._active : ''}`}>
			<div className={styles.searchWrap__container}>
				<div className={styles.search}>
					<div className={styles.search__body}>
						<Search searchData={searchingFor === 'dog' ? dogData : catData} ref={inputRef}
						        className={styles.search__input} placeholder={`Search for a new ${searchingFor}`} />
						<div className={`${styles.search__closure} ${styles.img}`} onClick={() => setIsSearching(false)}>
							<img src={closure} alt='A cross Icon' />
						</div>
					</div>
				</div>
				<div className={styles.petChanger}>
					<span>You can change your searching friend here:</span> <Dropdown />
				</div>
				{filteredBreeds.length === 0 ?
					<SearchError />
					:
					<div className={styles.searchResultContainer}>
						{searchingFor ? filteredBreeds.map(pet => {
							return <PetItem key={pet.id} pet={pet} />
						}) : ''}
					</div>
				}
			</div>
		</div>
	)
}
export default OnSiteSearching
