import React from 'react'
import { useActions } from '../../hooks/useActions.js'
import styles from './PetChoosingItem.module.scss'
const PetChoosingItem = ({ name, imgSrc }) => {
	const { setSearchingForCat, setSearchingForDog, setModalState, setIsSearching } = useActions()
	
	const handleClick = () => {
		setModalState(false)
		if (name === 'Dog') {
			setSearchingForDog()
		} else {
			setSearchingForCat()
		}
		setIsSearching(true)
	}
	
	return (
		<div className={styles.searchingForItem} onClick={handleClick}>
			<div className={`${styles.searchingForItem__img} ${styles.img}`}>
				<img src={imgSrc} alt={name}/>
			</div>
			<div className={styles.searchingForItem__name}>{name}</div>
		</div>
	)
}
export default PetChoosingItem
