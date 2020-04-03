import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    updateList (state, action) {
      const movies = action.payload
      return movies
    }
  }
})

export const { updateList } = listSlice.actions

export default listSlice.reducer
