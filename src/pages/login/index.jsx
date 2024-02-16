import './style.scss'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageLayout from '../../layout/pageLayout'
import FormLogin from '../../container/formLogin'

export default function Login() {
  return (
    <PageLayout classes='bg-dark'>
      <section className='sign-in-content'>
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <FormLogin />
      </section>
    </PageLayout>
  )
}
