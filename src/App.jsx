
// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// import Home from "./pages/Home/Home";

// // Uncomment after fixing them
// import AboutUs from "./pages/AboutUs/AboutUs";
// import Members from "./pages/Members/Members";
// import ContactUs from "./pages/ContactUs/ContactUs";
// import BecomeMember from "./pages/BecomeMember/BecomeMember";
// import OurProgrammes from "./pages/OurProgrammes/OurProgrammes";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">

//         <Navbar />

//         <main className="app-main">
//           <Routes>

//             {/* Home */}
//             <Route
//               path="/"
//               element={<Home />}
//             />

            
//             Uncomment after About page is fixed

//             <Route
//               path="/about"
//               element={<AboutUs />}
//             />
           

            
//             Uncomment after Members page is fixed

//             <Route
//               path="/members"
//               element={<Members />}
//             />
           
//            <Route
//               path="/contactus"
//               element={<ContactUs />}
//             />

//            <Route
//               path="/becomemember"
//               element={<BecomeMember />}
//             />
 
 
//           <Route
//               path="/our-programmes"
//               element={<OurProgrammes />}
//             />

//           </Routes>
//         </main>

//         <Footer />

//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Leadership from "./pages/Leadership/Leadership";
import ContactUs from "./pages/ContactUs/ContactUs";
import BecomeMember from "./pages/BecomeMember/BecomeMember";
import OurProjectsAndActivities from "./pages/OurProjectsAndActivities/OurProjectsAndActivities";
import Constitution from "./pages/Constitution/Constitution";
function App() {
  return (
    <BrowserRouter>

      {/* Automatically scrolls every page to the top */}
      <ScrollToTop />

      <div className="app">

        <Navbar />

        <main className="app-main">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<AboutUs />}
            />

            <Route
              path="/constitution"
              element={<Constitution />}
            />

            <Route
              path="/leadership"
              element={<Leadership />}
            />

            <Route
              path="/contactus"
              element={<ContactUs />}
            />

            <Route
              path="/becomemember"
              element={<BecomeMember />}
            />
        
            <Route
              path="/our-projects-and-activities"
              element={<OurProjectsAndActivities />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;