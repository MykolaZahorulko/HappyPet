import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions.js'
import useOutsideClick from '../../hooks/useOutSideClick.js'
import { useSelectorValue } from '../../hooks/useSelectorValue.js'
import styles from './Dropdown.module.scss'
import { dropDownData } from '../../utils/dropDownData.js'
import dropDownArrow from '../../assets/images/icons/arrow.svg'

const Dropdown = () => {
	const { value: searchingFor } = useSelectorValue(state => state.searchingFor)
	const { setSearchingForDog, setSearchingForCat } = useActions()
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	
	const dropdownRef = useOutsideClick(() => setIsDropdownOpen(false))
	
	const handleClick = (name) => {
		if (name === 'Dog') {
			setSearchingForDog()
		} else {
			setSearchingForCat()
		}
		setIsDropdownOpen(false)
	}
	
	return (
		<div className={styles.dropdown} ref={dropdownRef}>
			<div className={styles.dropdown__button} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				{searchingFor.charAt(0).toUpperCase() + searchingFor.slice(1)}
				<div className={`${styles.dropdown__arrow} ${styles.img} ${isDropdownOpen ? styles._active : ''}`}>
					<img src={dropDownArrow} alt='An arrow' />
				</div>
			</div>
			<div className={`${styles.dropdown__content} ${isDropdownOpen ? styles._active : ''}`}>
				{dropDownData.map((item) =>
					<button disabled={searchingFor.toLowerCase() === item.pet.toLowerCase()} className={styles.dropdown__content_item} key={item.pet} onClick={() => handleClick(item.pet)}>
						<span >{item.pet}</span>
						<span>{item.icon}</span>
					</button>
				)}
			</div>
		</div>
	)
}
export default Dropdown
