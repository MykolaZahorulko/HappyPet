import React from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions.js'
import styles from './NavItem.module.scss'
const NavItem = ({ name, path }) => {
	const { setIsMenuActive } = useActions()
	
	return (
		<li className={styles.header__nav_item} onClick={() => setIsMenuActive(false)}>
			<Link to={path} className={styles.header__nav_link}>{name}</Link>
		</li>
	)
}
export default NavItem
