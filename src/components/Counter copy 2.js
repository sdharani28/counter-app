import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const dispatcher = useDispatch();

    const counter = useSelector(state => state.counter.value);

    const increment = () => {
        dispatcher({
            type: 'counter/incremented'
        });
    }

    const decrement = () => {
        dispatcher({
            type: 'counter/decremented'
        });
    }

    return (

        <div>
            <button id="increment" onClick={increment} >+1</button>
            <p>{counter}</p>
            <button id="decrement" onClick={decrement} >-1</button>
        </div>
    )
}

export default Counter