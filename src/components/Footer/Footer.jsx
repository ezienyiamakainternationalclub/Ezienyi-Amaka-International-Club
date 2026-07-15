// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IconButton } from '@mui/material';
// import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { SiX } from 'react-icons/si';
// import logo from '../assets/dubem4life-logo1.png';

// import './Footer2.css';

// const Footer2 = () => {
//   const navigate = useNavigate();

//   const handleNavigate = (path, scrollToId) => {
//     navigate(path);

//     if (scrollToId && typeof scrollToId === 'string') {
//       setTimeout(() => {
//         const target = document.getElementById(scrollToId);
//         if (target) {
//           target.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 300);
//     } else {
//       setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }, 300);
//     }
//   };

//   const quickLinks = [
//     { label: 'Home', path: '/' },
//     { label: 'ECU/Brainbox Products', path: '/products' },
//     { label: 'Services & Programming', path: '/services' },
//     { label: 'About Us', path: '/about-us' },
//     { label: 'Contact Us', path: '/contact-us', scrollTo: 'contactUsForm' },
//     { label: 'FAQs', path: '/faqs' },
//   ];

//   return (
//     <footer className="footer2">
//       <div className="footer2-content">
//         <div className="footer2-logo-container">
//           <img src={logo} alt="Dubem4life Logo" className="footer2-logo" />
//         </div>
        
//         <div className="footer2-center">
//           <div className="contact-info">
//             <div className="contact-item"><FaEnvelope /><p>dubem4life@gmail.com</p></div>
//             <div className="contact-item"><FaPhoneAlt /><p>Phone: (+234) 8034270511</p></div>
//             <div className="contact-item"><FaPhoneAlt /><p>Phone: (+234) 8028845358</p></div>
//             <div className="contact-item">
//               <FaMapMarkerAlt />
//               <p>Block A7 Shop 29 Alaba Market<br />Opp Empire Energy, Nnaze, Aba Road, Owerri, Imo State</p>
//             </div>
//             <div className="contact-item"><FaEnvelope /><p>Business Hours: 7 am - 5 pm, Mon - Sat</p></div>
//           </div>
//         </div>

//         <div className="footer2-links">
//           <h3>Quick Links</h3>
//           <ul>
//             {quickLinks.map((link, index) => (
//               <li key={index}>
//                 <button
//                   className="footer2-link-button"
//                   onClick={() => handleNavigate(link.path, link.scrollTo)}
//                 >
//                   {link.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Section placed directly before copyright */}
//       <div className="social-media-icons">
//         <p>Follow Us On:</p>
//         <IconButton component="a" href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
//           <FaFacebookF />
//         </IconButton>
//         <IconButton component="a" href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="social-icon x">
//           <SiX />
//         </IconButton>
//         <IconButton component="a" href="https://wa.me/2348028845358" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
//           <FaWhatsapp />
//         </IconButton>
//         <IconButton component="a" href="mailto:dubem4life@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon gmail">
//           <FaEnvelope />
//         </IconButton>
//       </div>

//       <p className="footer2-copy">&copy; 2026 | DUBEM4LIFE INVESTMENT | All Rights Reserved</p>
//     </footer>
//   );
// };

// export default Footer2;


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

import logo from "../../assets/Ezienyiamakainternationalclub-logo.jpg";

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