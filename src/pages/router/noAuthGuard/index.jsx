import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes'
import { getUserToken } from '../../../store/selectors'
import { useEffect, useState } from 'react'
import { userService } from '../../../_services/user.service'
import authSlice from '../../../features/auth/authSlice'
import Loader from '../../../components/loader'
import Error from '../../../components/error'

export const NoAuthGuard = ({ Child }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const token = useSelector(getUserToken)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getData()
    async function getData() {
      if (!token) {
        setIsLoading(false)
        return
      }
      try {
        const res = await userService.getUser(token)
        if (res) {
          navigate(ROUTES.profile)
        } else {
          dispatch(authSlice.actions.logout())
        }
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
  }, [dispatch, navigate, token])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Error />
  }

  return <Child />
}
