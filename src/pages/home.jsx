import React from 'react'

import { useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/reducers/uiSlice';
const Home = () => {

  const dispatch = useDispatch();
  const onClickToggle = () => {
    dispatch(toggleTheme());
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