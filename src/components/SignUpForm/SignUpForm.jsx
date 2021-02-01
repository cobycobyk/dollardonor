import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { useHistory } from 'react-router-dom';

export default function SignUp({ setUser, showLogin, setShowLogin }) {
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
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

  const disable = formData.password !== formData.confirm;
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent" onSubmit={handleSubmit}>
        <div className="fadeIn first">
          <img src="https://i.imgur.com/W9JYIXE.png" alt="logo" width="60" />
        </div>
        <form >
          <input type="text" id="login" placeholder="name" className="fadeIn second" name="name" value={formData.name} onChange={handleChange} required />
          <input type="email" id="email" placeholder="email" className="fadeIn third" name="email" value={formData.email} onChange={handleChange} required />
          <input type="password" id="password" placeholder="password" className="fadeIn fourth" name="password" value={formData.password} onChange={handleChange} required />
          <input type="password" id="password" placeholder="confirm password" className="fadeIn fifth" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <input type="submit" placeholder="name" className="fadeIn sixth" disabled={disable} value="Sign Up" />
        </form>
        <p className="error-message">&nbsp;{error}</p>
        <div id="formFooter" >
          <h5>Already a user?</h5>
          <input type="submit" className="underlineHover" onClick={() => setShowLogin(!showLogin)} value='Login' />
        </div>
      </div>
    </div>
  );
}