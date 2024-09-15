import Button from '../../components/Button/Button.jsx'
import PetLink from '../../components/PetLink/PetLink.jsx'
import { useActions } from '../../hooks/useActions.js'
import styles from './Home.module.scss'
import mainImg from '../../assets/images/img/main.png'
import mainDog from '../../assets/images/img/main-dog.png'
import mainCat from '../../assets/images/img/main-cat.png'
const Home = () => {
	const { setSearchingForDog, setSearchingForCat } = useActions()
	return (
		<div className={styles.home}>
			<div className={styles.home__container}>
				<div className={styles.home__content}>
					<div className={styles.home__leftSide}>
						<h1 className={styles.home__title}>Yor new home delivery friend</h1>
						<p className={styles.home__text}>Online pet store - a convenient solution when you are too lazy to leave the house</p>
						<Button className={styles.button} to='/friends/'>See friends</Button>
						<div className={styles.home__links}>
							<PetLink img={mainDog} to='/friends/' name='Dogs' onClick={setSearchingForDog}/>
							<PetLink img={mainCat} to='/friends/' name='Cats' onClick={setSearchingForCat}/>
						</div>
					</div>
					<div className={`${styles.home__img} ${styles.img}`}>
						<img src={mainImg} alt='A dog and a cat' />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home
