// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// import Home from "./pages/Home/Home";
// import AboutUs from "./pages/AboutUs/AboutUs";
// import Gallery from "./pages/Gallery/Gallery";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">

//         <Navbar />

//         <main>

//           <Routes>

//             <Route
//               path="/"
//               element={<Home />}
//             />

//             <Route
//               path="/about"
//               element={<AboutUs />}
//             />

//             <Route
//               path="/gallery"
//               element={<Gallery />}
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

import Home from "./pages/Home/Home";

// Uncomment after fixing them
import AboutUs from "./pages/AboutUs/AboutUs";
import Gallery from "./pages/Gallery/Gallery";
import ContactUs from "./pages/ContactUs/ContactUs";
import BecomeMember from "./pages/BecomeMember/BecomeMember";
import OurProgrammes from "./pages/OurProgrammes/OurProgrammes";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main className="app-main">
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            
            Uncomment after About page is fixed

            <Route
              path="/about"
              element={<AboutUs />}
            />
           

            
            Uncomment after Gallery page is fixed

            <Route
              path="/gallery"
              element={<Gallery />}
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
              path="/our-programmes"
              element={<OurProgrammes />}
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;