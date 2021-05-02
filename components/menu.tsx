import { useRouter } from 'next/router';
import { useState } from 'react';

const Menu = () => {
  const router = useRouter()
  const isActive = (path : string) => {
    if (router.asPath === path) {
      return "is-active";
    }
    return '';
  }

  const [isOpen, setIsOpen]  = useState(false);

   return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Covid Help India
          </a>

          <a role="button" onClick={() => setIsOpen(!isOpen) } className={`navbar-burger ${isOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false"
             data-target="navbarBasicExample">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a href={'/'} className={`navbar-item ${isActive('/')}`}>
              Home
            </a>

            <a href={'/contact'} className={`navbar-item ${isActive('/contact')}`}>
              Contact Us
            </a>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href={'/addOrUpdate'} className="button is-primary">
                  <strong>Add Service</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
};

export default Menu;
