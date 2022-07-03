import { connect } from 'react-redux';

const Counter = ({ counterValue, increment, decrement }) => {

    return (

        <div>
            <button id="increment" onClick={increment} >+1</button>
            <p>{counterValue}</p>
            <button id="decrement" onClick={decrement} >-1</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counterValue: state.counter.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'counter/incremented' }),
        decrement: () => dispatch({ type: 'counter/decremented' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)