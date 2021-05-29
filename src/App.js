import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//import './App.css';
import LandingPage from './components/layout/LandingPage';
import { useTranslation } from "react-i18next";
import NavbarContainer from './components/layout/Navbar/NavbarContainer';
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';



function App() {
  const [t, i18n] = useTranslation('common');


  return (
    <Router>
      <div>

        <NavbarContainer t={t} i18n={i18n} />
          <Route exact path="/">
            <LandingPage t={t} i18n={i18n} />
          </Route>
          <Route exact path="/login" >
            <LoginContainer t={t} i18n={i18n} />
          </Route>`

        <Footer t={t} i18n={i18n} />
      </div>
    </Router>
  );
}

export default App;
