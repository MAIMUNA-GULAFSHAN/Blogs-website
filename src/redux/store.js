import { configureStore } from '@reduxjs/toolkit'
import BlogsReducer from './slices/BlogsReducer'

export const store = configureStore({
  reducer: {
    Blogs:BlogsReducer
  },
})