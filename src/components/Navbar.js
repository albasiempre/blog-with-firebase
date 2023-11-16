import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const Navbar = ({ isAuth }) => {
  return (
    <div className='nav-cover'>
        <nav className='nav'>
        {/* <Link to="/">
          <FontAwesomeIcon icon={ faHouse }/>
          ホーム
        </Link> */}
        {!isAuth ? (
          <Link to="/">
          <FontAwesomeIcon icon={ faHouse }/>
          HOME
          </Link>
        // <Link to="/login">
        //   <FontAwesomeIcon icon={ faArrowRightToBracket }/>
        //   ログイン
        // </Link>
        ) : (
        <>
          <Link to="/">
            <FontAwesomeIcon icon={ faHouse }/>
              HOME
          </Link>
          <Link to="/createpost">
            <FontAwesomeIcon icon={ faFilePen }/>
            POST
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={ faArrowRightToBracket }/>
              LOGOUT
          </Link>
        </>
          )}
      </nav>
    </div>


  )
}

export default Navbar