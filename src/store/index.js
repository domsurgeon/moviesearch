import { configureStore } from '@reduxjs/toolkit'

import list from './list'
import movies from './movies'

const store = configureStore({
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  reducer: { list, movies }
})

export default store
