import { useDispatch } from 'react-redux';

const ButtonDecrement = () => {

    const dispatcher = useDispatch();

    const decrement = () => {
        dispatcher({
            type: 'counter/decremented'
        });
    }

    return (<button style={{ marginLeft: '.5rem' }} onClick={decrement} >
        -1
    </button>)
}

export default ButtonDecrement;