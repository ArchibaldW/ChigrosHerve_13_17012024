import { useEffect, useState } from 'react'
import './style.scss'
import Account from '../../components/account'
import Error from '../../components/error'
import Loader from '../../components/loader'

export default function Accounts() {
  const [accountsData, setAccountData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    function fetchData() {
      fetch('./data/mockedData.json')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Une erreur est survenue')
          }
          return res.json()
        })
        .then((data) => {
          setAccountData(data)
        })
        .catch((error) => {
          setIsError(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    fetchData()
  }, [])

  return (
    <>
      <h2 className='sr-only'>Accounts</h2>
      {isLoading && <Loader />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <>
          {accountsData.map((accountData, index) => (
            <Account
              key={index}
              title={accountData.title}
              amount={accountData.amount}
              description={accountData.description}
            />
          ))}
        </>
      )}
    </>
  )
}
