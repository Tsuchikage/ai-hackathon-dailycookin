import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { api } from './api'
import sliceReducer from './slice'

const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	slice: sliceReducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
