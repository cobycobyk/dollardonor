import { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as usersAPI from '../../utilities/users-api';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProfileDetailPage from '../ProfileDetailPage/ProfileDetailPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());
  const history = useHistory()
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
              <Route path="/profile/edit">
                <EditProfilePage user={user} handleUpdateUser={handleUpdateUser}/>
              </Route>
              <Route path="/profile">
                <ProfileDetailPage user={user}/>
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
          <Footer />
    </main>
  );
}
