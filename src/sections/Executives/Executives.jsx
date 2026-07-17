import "./Executives.css";

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import chairman from "../../assets/chairman.webp";
import viceChairman from "../../assets/vice-chairman.webp";
import secretary from "../../assets/secretary.webp";
import financialSecretary from "../../assets/financial-secretary.webp";
import treasurer from "../../assets/treasurer.webp";
import welfareChairman from "../../assets/welfare-chairman.webp";

const executives = [
  {
    name: "Chief Chairman",
    position: "Chairman",
    image: chairman,
  },
  {
    name: "Vice Chairman",
    position: "Vice Chairman",
    image: viceChairman,
  },
  {
    name: "Secretary",
    position: "Secretary",
    image: secretary,
  },
  {
    name: "Financial Secretary",
    position: "Financial Secretary",
    image: financialSecretary,
  },
  {
    name: "Treasurer",
    position: "Treasurer",
    image: treasurer,
  },
  {
    name: "Welfare Chairman",
    position: "Welfare Chairman",
    image: welfareChairman,
  },
];

export default function Executives() {
  return (
    <section className="executives-section">

      <Container maxWidth="xl">

        <div className="section-title">

          <span>Leadership Team</span>

          <h2>Meet Our Executives</h2>

          <p>
            Our executives are dedicated leaders committed to unity,
            integrity, service and community development across the world.
          </p>

        </div>

        <div className="executives-grid">

          {executives.map((leader) => (

            <Card
              className="executive-card"
              key={leader.position}
            >

              <div className="image-wrapper">

                <CardMedia
                  component="img"
                  image={leader.image}
                  alt={leader.position}
                  className="executive-image"
                />

              </div>

              <CardContent className="executive-content">

                <Typography
                  variant="h5"
                  className="executive-name"
                >
                  {leader.name}
                </Typography>

                <Typography
                  className="executive-position"
                >
                  {leader.position}
                </Typography>

              </CardContent>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}