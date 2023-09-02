import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './stores/uiSlice';
import classNames from 'classnames';
function App() {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  const dispatch = useDispatch();

  const onClickToggle = () => {
    console.log('clicked');
    dispatch(toggleTheme());
  }
  const AppHeaderClasses = classNames({
    'App-header': true,
    'light': !isDarkMode,
    'dark': isDarkMode,
  })
  return (
    <div className="App" >
      <header className={AppHeaderClasses} >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="button"
          onClick={onClickToggle}
          style={{ padding: '8px' }}
        >
          Toggle Theme
        </button>
      </header>
    </div >
  );
}

export default App;
