import { combineReducers } from '@reduxjs/toolkit'
import { catApi, dogApi } from './api/petApi.js'
import isMenuOpenReducer from './reducers/isMenuOpen.slice.js'
import setFilteredBreedsReducer  from './reducers/filteredBreedsSearch.slice.js'
import isSearchingReducer from './reducers/isSearching.slice.js'
import searchingForReducer from './reducers/SearchingFor.slice.js'
import isModalActiveReducer from './reducers/isModalActive.slice.js'


const rootReducer = combineReducers({
	isMenuOpen: isMenuOpenReducer,
	setFilteredBreeds: setFilteredBreedsReducer,
	isSearching: isSearchingReducer,
	[dogApi.reducerPath]: dogApi.reducer,
	[catApi.reducerPath]: catApi.reducer,
	searchingFor: searchingForReducer,
	isModalActive: isModalActiveReducer,
})

export default rootReducer