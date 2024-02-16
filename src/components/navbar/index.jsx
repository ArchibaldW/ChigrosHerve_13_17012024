import './style.scss'
import logo from './argentBankLogo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  faArrowRightFromBracket,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, getUserToken } from '../../store/selectors'
import authSlice from '../../features/auth/authSlice'
import ROUTES from '../../pages/router/routes'

export default function Navbar() {
  const token = useSelector(getUserToken)
  const user = useSelector(getUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function logout() {
    dispatch(authSlice.actions.logout())
    navigate(ROUTES.login)
  }

  return (
    <nav className='main-nav'>
      <NavLink className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src={logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>
      {!token ? (
        <div>
          <NavLink to='/login' className='main-nav-item'>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        </div>
      ) : (
        <div className='d-flex'>
          <NavLink to='/profile' className='main-nav-item connected-item-user'>
            <FontAwesomeIcon icon={faUserCircle} />
            {user.firstName}
          </NavLink>
          <div className='cursor-pointer' onClick={logout}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Sign out
          </div>
        </div>
      )}
    </nav>
  )
}
