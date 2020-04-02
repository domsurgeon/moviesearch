import { createSlice } from '@reduxjs/toolkit'
import { differenceBy } from 'lodash'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovies (state, action) {
      const movies = action.payload
      const missingMovies = differenceBy(movies, state, 'id')
      state.push(...missingMovies)
    }
  }
})

export const { addMovies } = moviesSlice.actions

export default moviesSlice.reducer
