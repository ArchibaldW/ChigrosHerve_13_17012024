import './App.css'
import Router from '../pages/router'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import authSlice from '../features/auth/authSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    loadData()

    async function loadData() {
      const localeToken = localStorage.getItem('token')
      if (localeToken) {
        dispatch(
          authSlice.actions.login({ token: localeToken, rememberMe: true })
        )
      }
    }
  }, [dispatch])

  return (
    <div className='app'>
      <Router />
    </div>
  )
}

export default App
