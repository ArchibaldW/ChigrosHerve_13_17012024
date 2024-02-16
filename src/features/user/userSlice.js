import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (currentState, { payload }) => {
      return payload
    },
  },
})

export default userSlice
