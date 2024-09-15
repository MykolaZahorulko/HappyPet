import { createSlice } from '@reduxjs/toolkit'

export const filteredBreedsSearchSlice = createSlice({
	name: 'filteredBreeds',
	initialState: [],
	reducers: {
		setFilteredBreeds: (state, action) => state = action.payload
	}
})

export const { setFilteredBreeds } = filteredBreedsSearchSlice.actions

export default filteredBreedsSearchSlice.reducer