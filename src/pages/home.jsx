import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/actions/ui';
const Home = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  const dispatch = useDispatch();
  const onClickToggle = () => {
    dispatch(toggleTheme(isDarkMode));
  }

  return (
    <div>

      <button
        className="btn btn-primary"
        onClick={onClickToggle}
      >
        Toggle button in Home page
      </button>
    </div>
  )
}

export default Home