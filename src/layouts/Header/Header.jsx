import Logo from '../../components/Logo/Logo.jsx'
import Search from '../../components/Search/Search.jsx'
import { useActions } from '../../hooks/useActions.js'
import { useBreedsData } from '../../hooks/useBreedsData.js'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'
import { useSelectorValue } from '../../hooks/useSelectorValue.js'
import Burger from './HamburgerButton/Burger.jsx'
import styles from './Header.module.scss'
import navData from './navData.js'
import NavItem from './NavItem/NavItem.jsx'

const Header = () => {
	const { setModalState, setIsSearching } = useActions()
	const { value: searchingFor } = useSelectorValue(state => state.searchingFor)
	const { value: isMenuOpen } = useSelectorValue(state => state.isMenuOpen)
	const { dogData, catData } = useBreedsData()
	useLockBodyScroll(isMenuOpen)
	
	
	const handleClick = () => {
		if (searchingFor) {
			setModalState(false)
			setIsSearching(true)
		} else {
			setModalState(true)
		}
	}
	
	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<Logo />
				<div className={`${styles.header__body} ${isMenuOpen ? styles._active : ''}`}>
					<nav className={styles.header__nav}>
						<ul className={styles.header__nav_list}>
							{navData.map((item, i) => <NavItem key={i} path={item.path} name={item.name} />)}
						</ul>
					</nav>
					<Search
						searchData={searchingFor === 'dog' ? dogData : catData}
						className={styles.search__mobile}
						placeholder='Search'
						onClick={handleClick}
					/>
				</div>
				<Search
					searchData={searchingFor === 'dog' ? dogData : catData}
					className={styles.search__desktop}
					placeholder='Search'
					onClick={handleClick}
				/>
				<Burger />
			</div>
		</div>
	)
}
export default Header
