// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="mt-4 bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link href="/about" className=" nav-link text-light">About Us</Link></li>
              <li><Link href="/careers" className="nav-link text-light">Careers</Link></li>
              <li><Link href="/blog" className=" nav-link text-light">Blog</Link></li>
              <li><Link href="/terms" className="nav-link text-light">Terms of Service</Link></li>
              <li><Link href="/privacy" className="nav-link text-light">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><Link href="/faq" className=" nav-link text-light">FAQ</Link></li>
              <li><Link href="/contact" className="nav-link text-light">Contact Us</Link></li>
              <li><Link href="/support" className="nav-link text-light">Support</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled ">
              <li><Link href="https://facebook.com" className="nav-link text-light me-3">Facebook</Link></li>
              <li><Link href="https://twitter.com" className="nav-link text-light me-3">Twitter</Link></li>
              <li><Link href="https://instagram.com" className="nav-link text-light me-3">Instagram</Link></li>
              <li><Link href="https://linkedin.com" className="nav-link text-light">LinkedIn</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Download Our App</h5>
            <ul className="list-unstyled">
              <li><Link href="/appstore" className="nav-link text-light">App Store</Link></li>
              <li><Link href="/playstore" className="nav-link text-light">Google Play</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
