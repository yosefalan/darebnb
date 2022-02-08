import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import Search from "./Search"
import './AltNavigation.css';

function AltNavigation(){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="mainNavContainer">
      <div className="centerNavContainer">
        <div className="navLogoContainer">
          <NavLink exact to="/"><img className="navLogo" src={'/images/logo_complete_red.png'} alt="logo"></img></NavLink>
        </div>
        <Search />
        <div className="sessionLinks">
          <ProfileButton user={sessionUser} />
        </div>
      </div>
    </div>
  );
}

export default AltNavigation;
