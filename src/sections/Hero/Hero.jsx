// import "./Hero.css";

// import { Button, Container, Stack } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { motion } from "framer-motion";

// import hero from "../../assets/hero1.png";

// export default function Hero() {
//   return (
//     <section className="hero">
//       <Container maxWidth="xl">
//         <div className="hero-grid">

//           <motion.div
//             className="hero-content"
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="hero-tag">
//               Welcome To Ezienyi Amaka International Club
//             </span>

//             <h1>
//               Building Brotherhood,
//               <span> Unity</span> &
//               <span> Global Excellence</span>
//             </h1>

//             <p>
//               Ezienyi Amaka International Club is committed to promoting
//               brotherhood, community development, cultural heritage and
//               international collaboration while empowering members to make
//               lasting impacts in society.
//             </p>

//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               spacing={2}
//               mt={5}
//             >
//               <Button
//                 variant="contained"
//                 color="success"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//               >
//                 Become a Member
//               </Button>

//               <Button
//                 variant="outlined"
//                 color="warning"
//                 size="large"
//               >
//                 Learn More
//               </Button>
//             </Stack>

//           </motion.div>

//           <motion.div
//             className="hero-image"
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//           >
//             <img
//               src={hero}
//               alt="Ezienyi Amaka International Club"
//             />
//           </motion.div>

//         </div>
//       </Container>
//     </section>
//   );
// }

import "./Hero.css";

import { Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../../assets/hero1.png";
import logo from "../../assets/Ezienyiamakainternationalclub-logo.jpg";
import chairman from "../../assets/chairman.jpg";
import viceChairman from "../../assets/vice-chairman.jpg";
import secretary from "../../assets/secretary.jpg";
import financialSecretary from "../../assets/financial-secretary.jpg";
import treasurer from "../../assets/treasurer.jpg";
import welfareChairman from "../../assets/welfare-chairman.jpg";
import membersGroup from "../../assets/members-group-pic.jpg";

const images = [
  hero1,
  membersGroup,
  chairman,
  viceChairman,
  secretary,
  financialSecretary,
  treasurer,
  welfareChairman,
  logo,
];

export default function Hero() {
  return (
    <section className="hero">
      <Container maxWidth="xl">
        <div className="hero-grid">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">
              Welcome To Ezienyi Amaka International Club
            </span>

            <h1>
              Building Brotherhood,
              <span> Unity</span> &
              <span> Global Excellence</span>
            </h1>

            <p>
              Ezienyi Amaka International Club is committed to promoting
              brotherhood, community development, cultural heritage,
              humanitarian service and international collaboration while
              empowering members to make lasting impacts in society.
            </p>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              mt={5}
            >
              <Button
                variant="contained"
                color="success"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Become a Member
              </Button>

              <Button
                variant="outlined"
                color="warning"
                size="large"
              >
                Learn More
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}