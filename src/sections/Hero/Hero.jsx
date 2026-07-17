import "./Hero.css";

import { Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
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
              Ezienyi Amaka International Club promotes brotherhood,
              community development, cultural heritage,
              humanitarian service and international collaboration,
              empowering members to make lasting impacts in society.
            </p>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              mt={5}
            >

              <Button
                component={Link}
                to="/becomemember"
                variant="contained"
                color="success"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Become A Member
              </Button>

              <Button
                component={Link}
                to="/about"
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9 }}
          >

            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              speed={900}
              preloadImages={false}
              watchSlidesProgress={true}
              lazyPreloadPrevNext={1}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true
              }}
            >

              {images.map((image, index) => (

                <SwiperSlide key={index}>

                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
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