import * as React from 'react';
import css from './Login.module.css'
import {useNavigate} from 'react-router-dom'

export default function Login() {
 const navigate = useNavigate()

  function handelOnRegister(){

navigate("/Registration")

  }


  return (
    <div>
      Enter Your Name <input type="text" placeholder="User Name" className={css.UserName} />  <br/>
      {/* <img src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=o4IRBYcPoOtSH7IVqPQpibAWbjt8W2Q3USXAmIbBNaE=" alt="MySelf" className={css.image}/> */}
      Enter Your Password <input type="password" placeholder="Password" className={css.Password} /> <br/>
      
      <button className={css.Login}>Login</button>
      <p className={css.Registration}>Don't have an account?</p>
      <a onClick={handelOnRegister} className={css.Link}>Register </a>
    </div>
  );
}
