import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupForm';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <SignupFormModal />
  //     </>
  //   );
  // }

  return (
    <div className="mainNavContainer">
      <div className="centerNavContainer">
        <div className="homeLogo">
          <NavLink exact to="/"><img className="navLogo" src={'images/logo_complete_black.png'}></img></NavLink>
        </div>
        <div className="sessionLinks">
          <ProfileButton user={sessionUser} />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
