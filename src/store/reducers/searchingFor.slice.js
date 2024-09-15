import { createSlice } from '@reduxjs/toolkit'


export const searchingForSlice = createSlice({
	name: 'searchingFor',
	initialState: '',
	reducers: {
		setSearchingForCat: state => 'cat',
		setSearchingForDog: state => 'dog'
	}
})

export const { setSearchingForCat, setSearchingForDog } = searchingForSlice.actions
export default searchingForSlice.reducer