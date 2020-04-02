import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    updateList (state, action) {
      const movieIds = action.payload
      return movieIds
    }
  }
})

export const { updateList } = listSlice.actions

export default listSlice.reducer
