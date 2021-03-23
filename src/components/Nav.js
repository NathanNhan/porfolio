import React from 'react'

export default function Nav() {
    return (
        <div>
        <nav className="nav">
          <div className="burger">
            <div className="burger__patty"></div>
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <a href="#1" className="nav__link c-blue"><img src="/assets/img/home-icon.png" alt=""/></a>
            </li>
            <li className="nav__item">
              <a href="#2" className="nav__link c-yellow scrolly"><img src="/assets/img/about-icon.png" alt=""/></a>
            </li>
            <li className="nav__item">
              <a href="#3" className="nav__link c-red"><img src="/assets/img/projects-icon.png" alt=""/></a>
            </li>
            <li className="nav__item">
              <a href="#4" className="nav__link c-green"><img src="/assets/img/contact-icon.png" alt=""/></a>
            </li>
          </ul>
        </nav>
        </div>
    )
}
