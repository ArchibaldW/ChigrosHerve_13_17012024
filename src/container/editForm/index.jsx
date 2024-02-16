import { useDispatch, useSelector } from 'react-redux'
import { userService } from '../../_services/user.service'
import './style.scss'
import { getUser, getUserToken } from '../../store/selectors'
import userSlice from '../../features/user/userSlice'
import Form from '../form'
import TextInput from '../../components/form/textInput'
import Button from '../../components/form/formButton'

export default function EditForm() {
  const token = useSelector(getUserToken)
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()
    if (e.target.firstName.value && e.target.lastName.value) {
      const res = await userService.editUser(
        e.target.firstName.value,
        e.target.lastName.value,
        token
      )
      if (res) {
        dispatch(
          userSlice.actions.setUser({
            firstName: res.firstName,
            lastName: res.lastName,
          })
        )
      }
    } else {
      alert('Les deux champs doivent être remplis')
    }
  }
  return (
    <div className='edit-form'>
      <Form onSubmit={handleSubmit}>
        <TextInput
          id='firstName'
          label='First name'
          type='text'
          defaultValue={user.firstName}
        />
        <TextInput
          id='lastName'
          label='Last Name'
          type='text'
          defaultValue={user.lastName}
        />
        <Button btnClass='edit-user-button' text='Change names' />
      </Form>
    </div>
  )
}
