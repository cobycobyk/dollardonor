import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as usersAPI from '../../utilities/users-api';
import * as charitiesAPI from '../../utilities/charities-api';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProfileDetailPage from '../ProfileDetailPage/ProfileDetailPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import CharitiesListPage from '../CharitiesListPage/CharitiesListPage';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [charities, setCharities] = useState([])
  const history = useHistory()
  useEffect(function() {
    async function getCharities() {
      const charities = await charitiesAPI.getAll();
      setCharities(charities);
    }
    getCharities()
  }, []);

  async function handleUpdateUser(updatedUserData) {
    const updatedUser = await usersAPI.updateUser(updatedUserData);
    setUser(updatedUser);
    history.push('/')
  }

  return (
    <main className="App">
      <Navigation user={user} setUser={setUser}/>
          <>
            <Switch>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/login">
                <AuthPage setUser={setUser}/>
              </Route>
              <Route path="/charities">
                <CharitiesListPage charities={charities}/>
              </Route>
              <Route path="/profile/edit">
                <EditProfilePage user={user} handleUpdateUser={handleUpdateUser}/>
              </Route>
              <Route path="/profile">
                <ProfileDetailPage user={user}/>
              </Route>
              <Route path="/">
                <HomePage charities={charities}/>
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
          <Footer />
    </main>
  );
}
