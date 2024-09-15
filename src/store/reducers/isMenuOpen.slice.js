import { createSlice } from '@reduxjs/toolkit'

export const isMenuOpenSlice = createSlice({
	name: 'isMenuOpen',
	initialState: false,
	reducers: {
		setIsMenuActive: (state, action) => state = action.payload
	}
})

export const { setIsMenuActive } = isMenuOpenSlice.actions
export default isMenuOpenSlice.reducer