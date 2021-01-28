import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { useHistory } from 'react-router-dom';

export default function SignUp({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const history = useHistory()

  const [error, setError] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      delete formData.confirm;
      const user = await signUp(formData);
      setUser(user);
      history.push('/')
    } catch { //can be catch (err)
      //an error occured
      setError('Sign Up Failed - Try Again');
    }
  }

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value});
    setError('');
  }

  const disable = formData.password !== formData.confirm;
  return (
    <div className="login-form">
      <div className="form-container">
        <form className="login-form-form" autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}