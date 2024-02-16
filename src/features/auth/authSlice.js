import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: '' },
  reducers: {
    login: (currentState, { payload }) => {
      if (payload.rememberMe) {
        localStorage.setItem('token', payload.token)
      }
      return { token: payload.token }
    },
    logout: (currentState) => {
      localStorage.removeItem('token')
      return { token: '' }
    },
  },
})

export default authSlice
