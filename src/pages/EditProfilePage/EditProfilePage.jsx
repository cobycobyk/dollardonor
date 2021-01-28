import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './EditProfilePage.css'

export default function EditProfilePage({ user, handleUpdateUser }) {

  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState(user)
  const [error, setError] = useState('');

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData]);

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const updatedUser = await usersService.update(formData);
      handleUpdateUser(updatedUser);
    } catch {
      setError('Edit failed - Please Try Again');
    }
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('')
  }

  return (
    <>
      <form className="edit-form" ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div class="container">
          <div class="main-body">
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img src={user.avatar} alt="Admin" class="rounded-circle" width="150" />
                      <h6 class="mb-0">Avatar</h6>
                      <input
                        className="form-control"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                      />
                      <div class="mt-3">
                        <h6 class="mb-0">Bio</h6>
                        <input
                          className="form-control"
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                        />
                        <button
                          type="submit"
                          className="btn btn-primary"
                        >
                          SAVE
                    </button>
                        <Link className="btn btn-outline-primary" to='/profile'>CANCEL</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                      <span class="text-secondary">
                        <input
                          className="form-control"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                        /></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {user.email}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">State</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          className="form-control"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Zipcode</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        <input
                          className="form-control"
                          name="zipcode"
                          value={formData.zipcode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}