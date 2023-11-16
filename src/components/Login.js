import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-google } from '@fortawesome/free-solid-svg-icons'


const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("IsAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className='loginButton'>
      <button className="loginWithGoogle" onClick={ loginInWithGoogle }>Googleでログイン</button>
    </div>

  )
}

export default Login