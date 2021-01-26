import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import Navigation from '../../components/Navigation/Navigation';

export default function App() {
  const [user, setUser] = useState(getUser());
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
              <Route path="/profile">
                <ProfilePage user={user}/>
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
    </main>
  );
}
