
import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { SiX } from "react-icons/si";

import logo from "../../assets/Ezienyiamakainternationalclub-logo.webp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-content">

        {/* Logo */}

        <div className="footer-logo">

          <img src={logo} alt="Club Logo" />

          <p>
            Building Brotherhood, Unity, Leadership and Community
            Development through friendship, service and excellence.
          </p>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact Us</h3>

          <div className="contact">
            <FaEnvelope />
            <span>
              ezienyiamakainternationalclub@gmail.com
            </span>
          </div>

          <div className="contact">
            <FaPhoneAlt />
            <span>+234 806 732 3369</span>
          </div>

          <div className="contact">
            <FaMapMarkerAlt />
            <span>
              10 Wetheral Road,
              <br />
              Owerri,
              <br />
              Imo State,
              Nigeria
            </span>
          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About Us</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/contact">Contact Us</Link>
          <Link to="/become-a-member">Become a Member</Link>
          <Link to="/our programmes">Our Programmes</Link>

        </div>

      </div>

      {/* Social Media */}

      <div className="footer-social">

        <p>Follow Us</p>

        <IconButton
          component="a"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FaFacebookF />
        </IconButton>

        <IconButton
          component="a"
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="x"
        >
          <SiX />
        </IconButton>

        <IconButton
          component="a"
          href="https://wa.me/2348067323369"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <FaWhatsapp />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:ezienyiamakainternationalclub@gmail.com"
          className="gmail"
        >
          <FaEnvelope />
        </IconButton>

      </div>

      <div className="copyright">
        © {year} Ezienyi Amaka International Club. All Rights Reserved.
      </div>

    </footer>
  );
}