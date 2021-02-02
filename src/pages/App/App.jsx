import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as usersAPI from '../../utilities/users-api';
import * as userService from '../../utilities/users-service';
import * as charitiesAPI from '../../utilities/charities-api';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProfileDetailPage from '../ProfileDetailPage/ProfileDetailPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import CharitiesListPage from '../CharitiesListPage/CharitiesListPage';
import CharityDetailPage from '../CharityDetailPage/CharityDetailPage';
import AddCharityPage from '../AddCharityPage/AddCharityPage';
import EditCharityPage from '../EditCharityPage/EditCharityPage';
import MyDonationsPage from '../MyDonationsPage/MyDonationsPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
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

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  async function handleUpdateUser(updatedUserData) {
    setUser(updatedUserData);
    history.push('/profile')
  }

  async function handleAddCharity(newCharityData) {
    const newCharity = await charitiesAPI.create(newCharityData);
    setCharities([...charities, newCharity]);
    history.push('/charities')
  }

  async function handleUpdateCharity(updatedCharityData) {
    const updatedCharity = await charitiesAPI.update(updatedCharityData);
    const newCharityArray = charities.map(charity => {
      return charity._id === updatedCharity._id ? updatedCharity : charity
    })
    setCharities(newCharityArray);
    history.push('/charities')
  }
  async function handleDeleteCharity(charityId) {
    await charitiesAPI.deleteOne(charityId);
    setCharities(charities.filter(charity => charity._id !== charityId))
    history.push('/')
  }


  return (
    <main className="App">
      <Navigation user={user} handleLogOut={handleLogOut}/>
          <>
            <Switch>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/login">
                <AuthPage setUser={setUser}/>
              </Route>
              <Route path="/charities/edit">
                <EditCharityPage handleDeleteCharity={handleDeleteCharity} handleUpdateCharity={handleUpdateCharity}/>
              </Route>
              <Route path="/charities/add">
                <AddCharityPage handleAddCharity={handleAddCharity}/>
              </Route>
              <Route path="/charities">
                <CharitiesListPage user={user} charities={charities}/>
              </Route>
              <Route path="/charity-detail">
                <CharityDetailPage />
              </Route>
              <Route path="/profile/edit">
                <EditProfilePage user={user} handleUpdateUser={handleUpdateUser}/>
              </Route>
              <Route path="/profile">
                <ProfileDetailPage user={user}/>
              </Route>
              <Route path="/pledges/new">
                <NewOrderPage user={user}/>
              </Route>
              <Route path="/pledges">
                <MyDonationsPage user={user}/>
              </Route>
              <Route path="/">
                <HomePage user={user} charities={charities}/>
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
          <Footer user={user} handleLogOut={handleLogOut} />
    </main>
  );
}
