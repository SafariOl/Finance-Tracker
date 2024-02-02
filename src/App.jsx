import React, { useRef } from 'react'
import logo from './img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import HistoryPage from './HistoryPage'
import Main from './Main'

export default function App() {

  const closeBtn = useRef(null)
  const burgerBlock = useRef(null)


  const changerClass = (block) => {
    block.classList.toggle('active')
  }
 
  return (
    <div className='wrapper'>
      <nav>
        <a href="/">
          <img className='logo' src={logo} alt="logo" />
        </a>
        <div onClick={() => changerClass(burgerBlock.current)} className="burger">
          <FontAwesomeIcon icon={faBars}/>
        </div>
        <div ref={burgerBlock} className="burger-block">
          <button className='close' ref={closeBtn} onClick={() => changerClass(burgerBlock.current)}>
          <FontAwesomeIcon icon={faClose}/>
          </button>
          <div className="pages">
            <div className="link">
              <a href="/">Main</a>
            </div>
            <div className="link">
              <a href="/history">History</a>  
            </div>
          </div>
          <div className="contacts">
            <div className="contacts__link">
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div className="contacts__link">
              <a href=""><FontAwesomeIcon icon={faTelegram} /></a>
            </div>
            <div className="contacts__link">
              <a href=""><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div className="contacts__link">
              <a href=""><FontAwesomeIcon icon={faDiscord} /></a>
            </div>
          </div>
        </div>
      </nav>

      <Router>
        <Routes>
          <Route exact path='/' Component={Main}/>
          <Route exact path='/history' Component={HistoryPage}/>
        </Routes>
      </Router>
    </div>
  )
}
