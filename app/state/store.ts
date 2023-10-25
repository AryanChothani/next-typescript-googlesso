import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blogSlice from './blog.slice'
import { useDispatch } from 'react-redux'

const reducer = combineReducers({
    blogs: blogSlice.reducer
})

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production"
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store