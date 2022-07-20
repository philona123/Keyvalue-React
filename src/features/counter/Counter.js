import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

    const [amount, setAmount] = useState(0)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input type="text" onChange={(event) => {setAmount(parseInt(event.target.value))}}></input>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          IncrementByAmount
        </button>
      </div>
    </div>
  )
}