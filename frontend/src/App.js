import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Anywhere from './components/Anywhere/Anywhere'
import SpotPage from "./components/SpotPage/SpotPage";
import Maps from "./components/Maps/Maps";
// import UpdateSpotModalForm from "./components/UpdateSpot/UpdateSpotForm";
// import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import SignupForm from "./components/SignupFormModal/SignupForm";
// import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation/Navigation";

function App() {

  return (
    <>
      <Switch />
      <Route exact path='/'>
        <LandingPage />
      </Route>

      <Route eaxact path='/anywhere'>
        <Anywhere />
      </Route>

      <Route path='/spots/:id'>
        <SpotPage />
      </Route>

      <Route path='/maps'>
        <Maps />
      </Route>
    </>
  );
}

export default App;
