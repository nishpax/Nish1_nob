import * as React from 'react';
import css from './NavBar.module.css'
import {useNavigate} from 'react-router-dom'


export default function NavBar() {

  const navigate=useNavigate(0)

  function redirectToAboutUs()
  {
navigate ("/Aboutus")

  }

  function redirectToLogin(){
    navigate ("/Login")

  }
  function redirectNavBar(){
    navigate ("/")

  }




  return (
    <div className={css.header}>
    <a href="#default" className={css.logo}>CompanyLogo</a>
    <div className={css.header_right}>
      <a className={css.active} onClick={redirectNavBar}>Home</a>
      <a onClick={redirectToAboutUs}>AboutUs</a>
      <a onClick={redirectToLogin}>Login</a>
    </div>
  </div>
  );
}
