import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PetLink.module.scss'
import str from '../../assets/images/icons/str.svg'
const PetLink = ({ img, name, to = '/', onClick = () => {}}) => {
	return (
		<div className={styles.item} onClick={onClick}>
			<Link to={to} className={styles.item__link}>
				<div className={styles.item__name}>
					<div className={styles.item__name_name}>{name}</div>
					<div className={`${styles.item__name_str} ${styles.img}`}>
						<img src={str} alt='String'/>
					</div>
				</div>
				<div className={`${styles.item__img} ${styles.img}`}>
					<img src={img} alt={name}/>
				</div>
			</Link>
		</div>
	)
}
export default PetLink
