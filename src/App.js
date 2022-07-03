import { Provider } from 'react-redux';

import store from './store/store';

import Counter from './components/Counter';
import Counter2 from './components/Counter copy';
import Counter3 from './components/Counter copy 2';

import Display from './components/Display';
import ButtonIncrement from './components/ButtonIncrement';
import ButtonDecrement from './components/ButtonDecrement';

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <ButtonIncrement />
      <Display />
      <ButtonDecrement />
    </Provider>
  );
}

export default App;
