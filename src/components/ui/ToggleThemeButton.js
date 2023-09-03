import React from 'react'

import { useDispatch } from 'react-redux'
import { toggleTheme } from "../../redux/actions/ui";

const ToggleThemeButton = () => {


  const dispatch = useDispatch();
  const onClickToggle = () => {
    dispatch(toggleTheme());
  }

  return (
    <button
      className="btn btn-primary"
      onClick={onClickToggle}
    >
      Toggle button in Component
    </button>
  )
}

export default ToggleThemeButton