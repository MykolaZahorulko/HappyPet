import { createSlice } from '@reduxjs/toolkit'

export const isSearchingSlice = createSlice({
	name: 'isSearching',
	initialState: false,
	reducers: {
		setIsSearching: (state, action) => state = action.payload
	}
})

export const { setIsSearching } = isSearchingSlice.actions
export default isSearchingSlice.reducer