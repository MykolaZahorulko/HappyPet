import { useEffect } from 'react'
import { usePetItem } from '../../hooks/usePetItem.js'
import styles from './PetItem.module.scss'
import dog from '../../assets/images/img/dog-wb.png'
import cat from '../../assets/images/img/cat-wb.png'
import catLoader from '../../assets/images/loaders/cat.gif'
import dogLoader from '../../assets/images/loaders/dog.gif'

const PetItem = ({ pet }) => {
  const {
    searchingFor,
    imageError,
    isLoading,
    imageUrl
  } = usePetItem(pet)

  return (
    <div className={styles.petItem}>
      <div className={`${styles.petItem__img} ${styles.img}`}>
        {isLoading ? (
          <div className={`${styles.loader} ${styles.img}`}>
            <img
              src={searchingFor === 'dog' ? dogLoader : catLoader}
              alt={`${searchingFor === 'dog' ? 'Dog Loader' : 'Cat Loader'}`}
            />
          </div>
        ) : (
          <img
            src={imageError ? (searchingFor === 'dog' ? dog : cat) : imageUrl}
            alt={pet.name}
          />
        )}
      </div>
      <div className={styles.petItem__name}>{pet.name}</div>
    </div>
  )
}

export default PetItem
