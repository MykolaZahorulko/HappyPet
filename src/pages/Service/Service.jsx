import React, { useState } from 'react'
import Button from '../../components/Button/Button.jsx'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import styles from './Service.module.scss'

const Service = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		service: '',
		message: ''
	})
	
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Form Data Submitted:', formData)
	}
	
	return (
		<div className={styles.service}>
			<div className={styles.service__container}>
				<h2 className={styles.title}>Service Request</h2>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					
					<div className={styles.formGroup}>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					
					<div className={styles.formGroup}>
						<label htmlFor='service'>Select a Service</label>
						<select
							id='service'
							name='service'
							value={formData.service}
							onChange={handleChange}
							required
						>
							<option value='' disabled>Select a service</option>
							<option value='dogWalking'>Dog Walking</option>
							<option value='petGrooming'>Pet Grooming</option>
							<option value='petSitting'>Pet Sitting</option>
						</select>
					</div>
					
					<div className={styles.formGroup}>
						<label htmlFor='message'>Additional Details</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
						/>
					</div>
					
					<Button to='/service/'>Submit Request</Button>
				</form>
			</div>
		</div>
	)
}

export default Service
