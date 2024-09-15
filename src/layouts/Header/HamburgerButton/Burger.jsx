import React from 'react'
import { useActions } from '../../../hooks/useActions.js'
import { useSelectorValue } from '../../../hooks/useSelectorValue.js'
import styles from './Burger.module.scss'

const Burger = () => {
	const { value: isMenuOpen } = useSelectorValue(state => state.isMenuOpen)
	const { setIsMenuActive } = useActions()
	
	return (
			<div
				className={`${styles.burger} ${isMenuOpen ? styles._active : ''}`}
				aria-label='Open the main menu'
				onClick={() => setIsMenuActive(!isMenuOpen)}
			>
				<span></span>
			</div>
	)
}
export default Burger
