import { Route, Routes } from 'react-router-dom'

import ROUTES from './routes.js'

import Home from '../home/'
import Login from '../login'
import Profile from '../profile'
import PageNotFound from '../pageNotFound'
import { NoAuthGuard } from './noAuthGuard/index.jsx'
import { AuthGuard } from './authGuard/index.jsx'
import { DefaultGuard } from './defaultGuard/index.jsx'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<DefaultGuard Child={Home} />} />
      <Route path={ROUTES.login} element={<NoAuthGuard Child={Login} />} />
      <Route path={ROUTES.profile} element={<AuthGuard Child={Profile} />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
