import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import PetItem from '../../components/PetItem/PetItem.jsx'
import { useActions } from '../../hooks/useActions.js'
import { useBreedsData } from '../../hooks/useBreedsData.js'
import { useSelectorValue } from '../../hooks/useSelectorValue.js'
import styles from './Friends.module.scss'

const Friends = () => {
	const { value: searchingFor } = useSelectorValue(state => state.searchingFor)
	const { setModalState, setIsSearching } = useActions()
	const { dogData, catData } = useBreedsData()
	
	
	const petData = {
		dog: dogData,
		cat: catData
	}
	
	useEffect(() => {
		if (!searchingFor) {
			setModalState(true)
		}
		return () => setIsSearching(false)
	}, [searchingFor, setModalState, setIsSearching])
	
	return (
		<div className={styles.friends}>
			<div className={styles.friends__container}>
				<div className={styles.petChanger}>
					<span>You can change your searching friend here:</span> <Dropdown />
				</div>
				<div className={styles.friends__greed}>
					{searchingFor && petData[searchingFor] ? (
						petData[searchingFor].map((pet) => (
							<PetItem key={pet.id} pet={pet} />
						))
					) : (
						''
					)}
				</div>
			</div>
		</div>
	)
}

export default Friends
