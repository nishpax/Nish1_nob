import * as React from 'react';
import './style.css';
import Login from './Login/Login.js'
import Registration from './Registration/Registration.js'
import Aboutus from './AboutUs/AboutUs.js'
import NavBar from "./NavBar/NavBar.js"

export default function App() {
  return (
    <div>
     <NavBar/>
      <Aboutus/>
      <Registration/>

   <Login/>
    </div>
  );
}
