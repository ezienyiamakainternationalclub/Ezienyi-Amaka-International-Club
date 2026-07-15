// import React, { useEffect, useState } from "react";
// import "./Navbar.css";

// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Box,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import { Link, useLocation } from "react-router-dom";

// import logo from "../../assets/Ezienyiamakainternationalclub-logo.jpg";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about" },
//   { name: "Gallery", path: "/gallery" },
//    { name: "Our Programmes", path: "/our-programmes" },
//   { name: "Contact Us", path: "/contactus" },
// ];

// export default function Navbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 60);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <AppBar
//         elevation={0}
//         className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
//       >
//         <Toolbar className="navbar-container">

//           <Link to="/" className="logo-wrapper">
//             <img src={logo} alt="Logo" className="club-logo" />

//             <Box>
//               <Typography className="club-name">
//                 Ezienyi Amaka
//               </Typography>

//               <Typography className="club-subtitle">
//                 International Club
//               </Typography>
//             </Box>
//           </Link>

//           <Box className="desktop-menu">

//             {navLinks.map((item) => (

//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`nav-link ${
//                   location.pathname === item.path ? "active" : ""
//                 }`}
//               >
//                 {item.name}
//               </Link>

//             ))}

//             <Button
//               variant="contained"
//               color="success"
//               size="large"
//               sx={{
//                 borderRadius: "30px",
//                 textTransform: "none",
//                 fontWeight: 600,
//                 px: 3,
//               }}
//             >
//               Become a Member
//             </Button>

//           </Box>

//           <IconButton
//             className="mobile-menu"
//             onClick={() => setDrawerOpen(true)}
//           >
//             <MenuIcon />
//           </IconButton>

//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//       >
//         <Box sx={{ width: 260 }}>

//           <List>

//             {navLinks.map((item) => (

//               <ListItem key={item.name} disablePadding>

//                 <ListItemButton
//                   component={Link}
//                   to={item.path}
//                   onClick={() => setDrawerOpen(false)}
//                 >
//                   <ListItemText primary={item.name} />
//                 </ListItemButton>

//               </ListItem>

//             ))}

//             <Box sx={{ p: 2 }}>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 color="success"
//               >
//                 Become a Member
//               </Button>
//             </Box>

//           </List>

//         </Box>
//       </Drawer>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import "./Navbar.css";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/Ezienyiamakainternationalclub-logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Our Programmes", path: "/our-programmes" },
  { name: "Contact Us", path: "/contactus" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        elevation={0}
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Toolbar className="navbar-container">

          {/* Logo */}
          <Link to="/" className="logo-wrapper">
            <img
              src={logo}
              alt="Club Logo"
              className="club-logo"
            />

            <Box>
              <Typography className="club-name">
                Ezienyi Amaka
              </Typography>

              <Typography className="club-subtitle">
                International Club
              </Typography>
            </Box>
          </Link>

          {/* Desktop Menu */}
          <Box className="desktop-menu">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Button
              component={Link}
              to="/becomemember"
              variant="contained"
              color="success"
              size="large"
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
              }}
            >
              Become a Member
            </Button>

          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            className="mobile-menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 270 }}>

          <List>

            {navLinks.map((item) => (
              <ListItem
                key={item.name}
                disablePadding
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}

            <Box sx={{ p: 2 }}>

              <Button
                component={Link}
                to="/becomemember"
                fullWidth
                variant="contained"
                color="success"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  borderRadius: "30px",
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.3,
                }}
              >
                Become a Member
              </Button>

            </Box>

          </List>

        </Box>
      </Drawer>
    </>
  );
}