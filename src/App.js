import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store';


import LandingPage from './components/layout/LandingPage';
import { useTranslation } from "react-i18next";
import NavbarContainer from './components/layout/Navbar/NavbarContainer';
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';
import RegisterContainer from './components/Register/RegisterContainer';




function App() {
  const [t, i18n] = useTranslation('common');


  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavbarContainer t={t} i18n={i18n} />
          <Route exact path="/">
            <LandingPage t={t} i18n={i18n} />
          </Route>
          <Route exact path="/login" >
            <LoginContainer t={t} i18n={i18n} />
          </Route>
          <Route exact path="/register" >
            <RegisterContainer t={t} i18n={i18n} />
          </Route>

          <Footer t={t} i18n={i18n} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
