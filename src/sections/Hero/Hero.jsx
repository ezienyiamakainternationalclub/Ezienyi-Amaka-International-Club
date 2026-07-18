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
  Inspiring
  <span> Brotherhood</span>,
  <span> Unity</span> &
  Lasting Social Impact
</h1>
            

            <p>
  Ezienyi Amaka International Club brings together accomplished
  individuals committed to brotherhood, peace, unity and meaningful
  social impact. Through philanthropy, recreation, cultural heritage,
  professional collaboration and community development, we strive to
  positively transform lives locally and internationally.
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