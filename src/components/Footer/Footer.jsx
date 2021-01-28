import { useState } from 'react';
import './Footer.css'

export default function Footer() {
  const [newsletter, setNewsletter] = useState('')

  function handleChange(evt) {
    setNewsletter({ ...newsletter, [evt.target.name]: evt.target.value})
  }

  return (
    <>
      <footer className="bg-mint d-flex flex-column">
        <div className="container py-3">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3"/>
              <p className="font-italic text-muted">Follow our social channels for your daily piece of feel good :)</p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item"><a href="twitter.com" target="_blank" title="twitter"><img className="social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" alt=""/></a></li>
                <li className="list-inline-item"><a href="facebook.com" target="_blank" title="facebook"><img className="social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt=""/></a></li>
                <li className="list-inline-item"><a href="instagram.com" target="_blank" title="instagram"><img className="social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt=""/></a></li>
                <li className="list-inline-item"><a href="youtube.com" target="_blank" title="youtube"><img className="social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png" alt=""/></a></li>
              </ul>
            </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-xs-0">
                <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><a href="/about" className="text-muted">About Us</a></li>
                  <li className="mb-2"><a href="/" className="text-muted">Our Charities</a></li>
                  <li className="mb-2"><a href="/login" className="text-muted">Login</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                <p className="text-muted mb-4">Sign up for our newsletter to get the latest updates on all the good we are doing!</p>
                <div className="p-1 rounded border">
                  <div className="input-group">
                    <input onChange={handleChange} type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                    <div className="input-group-append">
                      <button type="submit" className="newsletter-button"><img className="newsletter" src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-42-256.png" alt=""/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light py-2">
            <div className="container text-center">
              <p className="text-muted mb-0 py-2">© 2021 DollarDonor All rights reserved.</p>
            </div>
          </div>
  </footer>
  </>
  );
}