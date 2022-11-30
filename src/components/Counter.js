import React, { useState } from 'react'

const Counter = ({init = 0}) => {
    const [count, setCount] = useState(init)

    const increment = () => {
        setCount(current => current + 1)
    }
    const decrement = () => {
        setCount(current => current - 1)
    }

  return (
    <div className="container d-flex align-items justify-content-center vh-100 text-center">
        <div>
            <p className="display-4">
                count:
                <span className="ms-5" data-testid="count">{count}</span>
            </p>
            <div className="mt-5">
                <button onClick={() => increment() } className="btn btn-lg btn-secondary me-4">Increment</button>
                <button onClick={() => decrement() } className="btn btn-lg btn-secondary ms-4">Decrement</button>
            </div>
        </div>
    </div>
  )
}

export default Counter