import React from 'react'
import styles from './Contacts.module.scss'
import contactsCat from '../../assets/images/img/contacts-cat.webp'

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.contacts__container}>
				<h2 className={styles.title}>Contact Us</h2>
				<div className={styles.contacts__body}>
					<div className={styles.contactInfo}>
						<div><span>Phone:</span><br/> <a href='tel:+123456789'>+1 234 567 89</a></div>
						<div><span>Email:</span><br/> <a href='mailto:info@happypet.com'>mailto:info@happypet.com</a></div>
						<div><span>Address:</span><br/> 123 Pet Street, Animal City</div>
						<div><span>Working hours:</span><br/> Mon-Fri, 9:00 AM - 6:00 PM</div>
					</div>
					<div className={`${styles.contacts__img} ${styles.img}`}>
						<img src={contactsCat} alt='A cat' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
