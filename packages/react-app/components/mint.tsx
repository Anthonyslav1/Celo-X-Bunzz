import * as React from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi'
import { ethers } from 'ethers'

export default function SendTransaction() {
  const [to, setTo] = React.useState('')
  //const [debouncedTo] = useDebounce(to, 500)

  const [amount, setAmount] = React.useState('')
  //const amount = 1 ether;

  const { config } = usePrepareSendTransaction({
    to: '0xca6f4a96b35076eFDB4811f27769AE6b56B94C7B',
   value : BigInt(amount),
  })
   const { data, sendTransaction } = useSendTransaction(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      sendTransaction?.()
      }}
    >
      <input
        aria-label="Recipient"
        onChange={(e) => setTo(e.target.value)}
        placeholder="0xca6f4a96b35076eFDB4811f27769AE6b56B94C7B"
        value={to}
      />
      <input
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.05"
        value={amount}
      />
      <button disabled={isLoading || !sendTransaction || !to || !amount}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
      {isSuccess && (
        <div>
          Successfully sent {amount} ether to {to}
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </form>
  )
}
