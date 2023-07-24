import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

import { Account } from './components/Account'
import { Balance } from './components/Balance'

import { SendTransaction } from './components/SendTransaction'
import { SendTransactionPrepared } from './components/SendTransactionPrepared'

import { WatchPendingTransactions } from './components/WatchPendingTransactions'


export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>wagmi + Web3Modal + Vite</h1>

      <Web3Button />

      {isConnected && (
        <>
          <hr />

          <h2>Account</h2>
          <Account />
          <br />
          <hr />
          <h2>Balance</h2>
          <Balance />
          <br />
          <hr />
          
          <h2>Send Transaction</h2>
          <SendTransaction />
          <br />
          <hr />
          <h2>Send Transaction (Prepared)</h2>
          <SendTransactionPrepared />
          <br />
          <hr />

          <h2>Watch Pending Transactions</h2>
          <WatchPendingTransactions />
          <br />
          <hr />

        </>
      )}
    </>
  )
}
