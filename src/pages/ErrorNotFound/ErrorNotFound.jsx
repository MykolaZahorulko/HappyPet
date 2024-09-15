import React from 'react'
import styles from './ErrorNotFound.module.scss'
import notFoundImage from '../../assets/images/img/not-faund.webp'

const ErrorNotFound = () => {
	return (
		<div className={styles.error}>
			<div className={styles.error__container}>
				<div className={`${styles.error__img} ${styles.img}`}>
					<img src={notFoundImage} alt='Page not founded' />
				</div>
			</div>
		</div>
	)
}
export default ErrorNotFound
