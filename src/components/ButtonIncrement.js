import { useDispatch } from 'react-redux';

const ButtonIncrement = () => {

    const dispatcher = useDispatch();

    const increment = () => {
        dispatcher({
            type: 'counter/incremented'
        });
    }

    return (
        <button style={{ marginLeft: '.5rem' }} onClick={increment} >
            +1
        </button>
    )

}

export default ButtonIncrement;