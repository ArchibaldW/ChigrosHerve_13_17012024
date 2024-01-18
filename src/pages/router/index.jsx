import { Route, Routes } from 'react-router-dom';

import ROUTES from './routes.js';

import Home from '../home/';
import Login from '../login';
import Profile from '../profile';
import PageNotFound from '../pageNotFound';

export default function Router() {
  return (
    <Routes>
      <Route
        path={ROUTES.home}
        element={<Home />}
      />
      <Route
        path={ROUTES.login}
        element={<Login />}
      />
      <Route
        path={ROUTES.profile}
        element={<Profile />}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  );
}
