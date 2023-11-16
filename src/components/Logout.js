import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then( () => {
      // isAuthをクリアにする
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div className='logoutButton'>
      <div className='logoutLink'>
        <button className="logoutWithGoogle" onClick={ logout  }>Logout</button>
      </div>
    </div>

  )
}

export default Logout