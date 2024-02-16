import { useDispatch } from 'react-redux'
import { userService } from '../../_services/user.service'
import './style.scss'
import userSlice from '../../features/user/userSlice'
import Form from '../form'
import TextInput from '../../components/form/textInput'
import Button from '../../components/form/formButton'
import CheckboxInput from '../../components/form/checkboxInput'
import authSlice from '../../features/auth/authSlice'
import ROUTES from '../../pages/router/routes'
import { useNavigate } from 'react-router-dom'

export default function FormLogin() {
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
    <Form onSubmit={handleSubmit}>
      <TextInput id='username' label='Username' type='text' />
      <TextInput id='password' label='Password' type='password' />
      <CheckboxInput id='rememberMe' label='Remember me' />
      <Button btnClass='sign-in-button' text='Sign In' />
    </Form>
  )
}
