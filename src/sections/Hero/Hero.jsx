import "./Hero.css";

import { Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";

export default function Hero() {
  return (
    <section className="hero">
      <Container maxWidth="xl">
        <div className="hero-grid">

          <div className="hero-content">

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

          </div>

          <div className="hero-image">
            <Carousel />
          </div>

        </div>
      </Container>
    </section>
  );
}