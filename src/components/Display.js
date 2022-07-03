import { useSelector } from 'react-redux';

const Display = () => {
    const counter = useSelector(state => state.counter.value) ?? 0;

    return (<label style={{ marginLeft: '.5rem' }} >{counter}</label>)
}

export default Display;