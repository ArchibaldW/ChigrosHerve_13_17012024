import './style.scss'
import Accounts from '../../container/accounts'
import PageLayout from '../../layout/pageLayout'
import { useState } from 'react'
import EditForm from '../../container/editForm'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/selectors'

export default function Profile() {
  const [editUp, setEditUp] = useState(false)

  const user = useSelector(getUser)

  function changeEdit() {
    setEditUp(!editUp)
  }

  return (
    <PageLayout classes='bg-dark'>
      <div className='profile-header'>
        <h1>
          Welcome back
          <br />
          {user.firstName + ' ' + user.lastName}
        </h1>
        <button className='edit-button' onClick={changeEdit}>
          Edit Name
        </button>
        {editUp ? <EditForm /> : ''}
      </div>
      <Accounts />
    </PageLayout>
  )
}
