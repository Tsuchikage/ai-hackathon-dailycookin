import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { api } from './api'

const reducers = combineReducers({
	[api.reducerPath]: api.reducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
	// devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
