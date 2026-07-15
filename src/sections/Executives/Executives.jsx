import "./Executives.css";

import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";

import chairman from "../../assets/chairman.jpg";
import viceChairman from "../../assets/vice-chairman.jpg";
import secretary from "../../assets/secretary.jpg";
import financialSecretary from "../../assets/financial-secretary.jpg";
import treasurer from "../../assets/treasurer.jpg";
import welfareChairman from "../../assets/welfare-chairman.jpg";

const executives = [
  {
    name: "Chief Ebenezer",
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

      <Container maxWidth="lg">

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          Our Executives
        </Typography>

        <Typography align="center" sx={{ mb: 6 }}>
          Dedicated leaders committed to service, unity and excellence.
        </Typography>

        <div className="executives-grid">

          {executives.map((leader) => (

            <Card
              className="executive-card"
              key={leader.position}
            >

              <CardMedia
                component="img"
                image={leader.image}
                alt={leader.position}
                className="executive-image"
              />

              <CardContent>

                <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                >
                  {leader.name}
                </Typography>

                <Typography
                  align="center"
                  color="primary"
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