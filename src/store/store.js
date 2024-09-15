import { configureStore } from '@reduxjs/toolkit'
import { catApi, dogApi } from './api/petApi.js'
import rootReducer from './rootReducer.js'

export const store = configureStore
({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(dogApi.middleware, catApi.middleware)
})