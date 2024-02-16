import './style.scss'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageLayout from '../../layout/pageLayout'
import { useDispatch } from 'react-redux'
import authSlice from '../../features/auth/authSlice'
import { userService } from '../../_services/user.service'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../router/routes'
import userSlice from '../../features/user/userSlice'
import Form from '../../container/form'
import TextInput from '../../components/form/textInput'
import CheckboxInput from '../../components/form/checkboxInput'
import Button from '../../components/form/formButton'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (e.target.username.value && e.target.password.value) {
      const res = await userService.login(
        e.target.username.value,
        e.target.password.value
      )
      if (res) {
        const user = await userService.getUser(res.token)
        if (user) {
          dispatch(
            authSlice.actions.login({
              token: res.token,
              rememberMe: e.target.rememberMe.checked,
            })
          )
          dispatch(
            userSlice.actions.setUser({
              firstName: user.firstName,
              lastName: user.lastName,
            })
          )
          navigate(ROUTES.profile)
        }
      }
    }
  }

  return (
    <PageLayout classes='bg-dark'>
      <section className='sign-in-content'>
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit}>
          <TextInput id='username' label='Username' type='text' />
          <TextInput id='password' label='Password' type='password' />
          <CheckboxInput id='rememberMe' label='Remember me' />
          <Button btnClass='sign-in-button' text='Sign In' />
        </Form>
      </section>
    </PageLayout>
  )
}
