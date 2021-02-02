import {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function EditCharityPage({handleUpdateCharity}){

  const location = useLocation()

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.charity)
  
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateCharity(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Edit Charity</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Street</label>
          <input
            className="form-control"
            name="street"
            value={ formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            className="form-control"
            name="city"
            value={ formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            className="form-control"
            name="state"
            value={ formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Zipcode</label>
          <input
            className="form-control"
            name="zip"
            value={ formData.zip}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>EIN-Number</label>
          <input
            className="form-control"
            name="ein"
            value={ formData.ein}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            className="form-control"
            name="phone"
            value={ formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Logo</label>
          <input
            className="form-control"
            name="logo"
            value={ formData.logo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Banner Picture</label>
          <input
            className="form-control"
            name="picture"
            value={ formData.picture}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Snippet for Card</label>
          <input
            className="form-control"
            name="snippet"
            value={ formData.snippet}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Company Mission</label>
          <input
            className="form-control"
            name="mission"
            value={ formData.mission}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Hex Color: #</label>
          <input
            className="form-control"
            name="color"
            value={ formData.color}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          SAVE CHARITY
        </button>
         &nbsp;&nbsp;
        <Link to='/'>CANCEL</Link>
      </form>
    </>
  );
}