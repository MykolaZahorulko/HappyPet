import { createSlice } from '@reduxjs/toolkit'


export const isModalActiveSlice = createSlice({
	name: 'isModalActive',
	initialState: false,
	reducers: {
		setModalState: (state, action) => state = action.payload
	}
})

export const { setModalState } = isModalActiveSlice.actions
export default isModalActiveSlice.reducer