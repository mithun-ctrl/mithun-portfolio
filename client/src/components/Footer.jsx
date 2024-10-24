// Footer.jsx
import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom'
import facebook from './fimages/footer_facebook.webp';
import x from './fimages/footer_x.webp';
import linkedin from './fimages/footer_linkedin.webp';
import mail from './fimages/footer_mail.webp';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Me</h3>
          <ul>
            <li>
              <NavLink to="https://www.linkedin.com/in/mithun-yadav-19a011249/" target='_blank'>
                <img src={linkedin} alt='linkedin' />
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <img src={facebook} alt='facebook' />
              </NavLink>
            </li>
            <li>
              <NavLink to="mailto:itsmithun01@gmail.com">
                <img src={mail} alt='mail' />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://x.com/IgrisTheRedd" target='_blank'>
                <img src={x} alt='x' />
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className='quick-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/achievement">Achievement</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: itsmithun01@gmail.com</p>
          <p>Phone: +9187xxxxx485</p>
          <p>Address: Prayagraj, Uttar Pradesh India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mithun. All rights reserved.</p>
      </div>
    </footer>
  )
}

