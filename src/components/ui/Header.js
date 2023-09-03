import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
const Header = () => {

  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} `}>
      <div className="container-fluid">
        <button className={`navbar-brand ${isDarkMode ? 'bg-dark' : 'bg-light'} `} > Navbar</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link active' aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' aria-current="page" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className='nav-link' aria-current="page" to="/projects">Projects</Link>
            </li>

            <li className="nav-item">
              <Link className='nav-link' aria-current="page" to={`/projects/x`}>Project X</Link>
            </li>
          </ul>
        </div>
      </div >
    </nav >
  )
}

export default Header