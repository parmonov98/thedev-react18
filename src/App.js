import './App.css';
import { useSelector } from 'react-redux'
import classNames from 'classnames';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import SingleProject from './pages/single-project';
function App() {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  const AppHeaderClasses = classNames({
    'header fixed-top': true,
    'light': !isDarkMode,
    'dark': isDarkMode,
  })


  return (
    <Router>
      <div className="container " >
        <header className={AppHeaderClasses} >
          <Header />
        </header>


        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/projects/:id" element={<SingleProject />} />
          </Routes>
        </main>

      </div >
    </Router>

  );
}

export default App;
