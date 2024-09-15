import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import logo from '../../assets/images/img/logo.svg'
const Logo = () => {
	return (
		<Link to='/' className={styles.logo}>
			<div className={`${styles.logoImg} ${styles.img}`}>
			<img src={logo} alt="Girl in a jacket" />
		</div>
			<span className={styles.logoName}>Happy pet</span>
		</Link>
	)
}
export default Logo
