import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import './Navigation.css';


function Navigation(){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="mainNavContainer">
      <div className="centerNavContainer">
        <div className="homeLogo">
          <NavLink exact to="/"><img className="navLogo" src={'images/logo_complete_white.png'} alt=""></img></NavLink>
        </div>
        <div className="sessionLinks">
          <ProfileButton user={sessionUser} />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
