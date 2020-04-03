import { configureStore } from '@reduxjs/toolkit'

import list from './list'

const store = configureStore({
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  reducer: { list }
})

export default store
