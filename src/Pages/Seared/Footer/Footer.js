import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Footer.css'
import Facebook from "../../../Asset/Social/Facebook.png"
import Linked from "../../../Asset/Social/LinkedIn.png"
import Skype from "../../../Asset/Social/Skype.png"
import Instagram from "../../../Asset/Social/Instagram.png"
import Twitter from "../../../Asset/Social/Twitter.png"
const Footer = () =>
  <footer className="page-footer font-small blue footer-image p-5">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase text-white fs-2 fw-bold">Car-Deal-Management</h5>
          <p className='text-white py-2 '>We believe in making simple and fair pricing plans. Choose your next successful plan and get started today!</p>
          <div className="Social">
            <img src={Facebook} alt=""/>
            <img src={Linked} alt=""/>
            <img src={Skype} alt=""/>
            <img src={Instagram} alt=""/>
            <img src={Twitter} alt=""/>
          </div>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase text-white fs-4">Featured Makes</h5>
          <ul className="list-unstyled mt-4">
            <li>Mercedes Benz</li>
            <li>Explorer Platinum</li>
            <li>Sportage</li>
            <li>Audi International</li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 ">
          <h5 className="text-uppercase fs-4 text-white">Quick Links</h5>
          <ul className="list-unstyled d-flex flex-column my-3">
            <Link to="/" className="py-1 text-decoration-none text-white fw-bold">HOME</Link>
            <Link to="/inventory" className="py-1 text-decoration-none text-white fw-bold">INVENTORY</Link>
            <Link to="/signup" className="py-1 text-decoration-none text-white fw-bold">SIGNUP</Link>
            <Link to="/login" className="py-1 text-decoration-none text-white fw-bold">LOGIN</Link>

          </ul>
        </div>
      </div>
    </div>
    <hr className="border-2 border-white mb-3" />
    <div className="footer-copyright text-center pt-4 text-white fw-bold">Copyright 2022 ©  All Rights Reserved.
      <Link to="/" className="text-decoration-none ms-2 text-white">Car-Deal-Management</Link>
    </div>

  </footer>

export default Footer;