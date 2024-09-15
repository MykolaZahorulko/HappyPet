import { setFilteredBreeds } from './reducers/filteredBreedsSearch.slice.js'
import { setIsMenuActive } from './reducers/isMenuOpen.slice.js'
import { setModalState } from './reducers/isModalActive.slice.js'
import { setIsSearching } from './reducers/isSearching.slice.js'
import { setSearchingForCat, setSearchingForDog } from './reducers/searchingFor.slice.js'

const rootActions = {
  setIsMenuActive, // Burger
  setFilteredBreeds, // Filtered breeds after searching
  setIsSearching,
  setSearchingForCat,
  setSearchingForDog,
  setModalState,
}

export default rootActions
