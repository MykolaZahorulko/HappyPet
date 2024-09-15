import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ children, to = '/', className }) => {
	return (
		<div className={`${styles.button} ${className}`}>
			<Link className={styles.button__link} to={to}>
				{children}
			</Link>
		</div>
	)
}
export default Button
