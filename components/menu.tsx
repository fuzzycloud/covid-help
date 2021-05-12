import { useRouter } from 'next/router';
import { useState } from 'react';
import {Navbar} from "react-bulma-components";

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
       <Navbar color={'primary'}>
        <Navbar.Brand>
          <Navbar.Item href={"/"}>
            Covid Help India
          </Navbar.Item>
          <Navbar.Burger onClick={() => setIsOpen(!isOpen) } className={`${isOpen ? 'is-active' : ''}`} data-target={'covid-navbar'}>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </Navbar.Burger>
        </Navbar.Brand>
         <Navbar.Menu id={'covid-navbar'} className={`${isOpen ? 'is-active' : ''}`}>
           <Navbar.Container  align={'left'}>
             <Navbar.Item href={'/'} className={`${isActive('/')}`}>Home</Navbar.Item>
             <Navbar.Item href={'/contact'} className={`${isActive('/contact')}`}>Contact Us</Navbar.Item>
           </Navbar.Container>
           <Navbar.Container align={'right'} >
             <Navbar.Item className={`${isActive('/add_or_update')}`} href={'/add_or_update'}>
               Add Services
             </Navbar.Item>
           </Navbar.Container>
         </Navbar.Menu>
       </Navbar>
  )
};

export default Menu;
