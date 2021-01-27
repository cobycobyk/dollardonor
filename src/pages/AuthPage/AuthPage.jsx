import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      {showLogin ?
      <>
        <h1>Log In</h1>
        <LoginForm setUser={setUser} />
        <br/>
        <h5>Not A User Yet?</h5>
        </>
        :
        <>
        <h1>Sign Up</h1>
        <SignUpForm setUser={setUser} />
        </>
      }
      <button className="login-switch-button" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Create Account' : 'Log In'}</button>
    </main>
  );
}