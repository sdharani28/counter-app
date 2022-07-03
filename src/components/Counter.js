import { useState } from 'react';

const Counter = () => {
    // State: a counter value
    const [counter, setCounter] = useState(0)

    // Action: code that causes an update to the state when something happens
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    return (

        <div>
            <button id="increment" onClick={increment} >+1</button>
            <p>{counter}</p>
            <button id="decrement">-1</button>
        </div>
    )
}

export default Counter