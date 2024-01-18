import { useEffect, useState } from 'react';
import Account from '../account';
import './style.scss';

export default function Accounts() {
  const [accountsData, setAccountData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let res = null;
      res = await fetch('./data/mockedData.json');
      res = await res.json();
      if (res) {
        console.log(res);
        setAccountData(res);
      } else {
        setIsError(true);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    fetchData();
  }, []);

  return (
    <>
      <h2 class="sr-only">Accounts</h2>
      {accountsData.map((accountData) => (
        <Account
          title={accountData.title}
          amount={accountData.amount}
          description={accountData.description}
        />
      ))}
    </>
  );
}
