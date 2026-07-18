import "./Executives.css";

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import chancellor from "../../assets/emma-chike-nwanju-club-chancellor-2024-till-date.webp";
import viceChancellor from "../../assets/vice-chancellor.webp";
import secretaryGeneral from "../../assets/secretary-general.webp";
import assistantSecretaryGeneral from "../../assets/assistant-secretary-general.webp";
import exchequer from "../../assets/exchequer-(financial -secretary).webp";
import treasurer from "../../assets/treasurer.webp";
import informationManager from "../../assets/information-manager-(PRO).webp";
import directorOfWelfare from "../../assets/director-of-welfare.webp";
import directorOfDiscipline from "../../assets/director-of-discipline.webp";

const executives = [
  {
    name: "Emma Chike Nwanju",
    position: "Chancellor",
    image: chancellor,
  },

  {
    name: "Vice-Chancellor",
    position: "Vice-Chancellor",
    image: viceChancellor,
  },

  {
    name: "Secretary-General",
    position: "Secretary-General",
    image: secretaryGeneral,
  },

  {
    name: "Assistant Secretary-General",
    position: "Assistant Secretary-General",
    image: assistantSecretaryGeneral,
  },

  {
    name: "Exchequer",
    position: "Financial Secretary",
    image: exchequer,
  },

  {
    name: "Treasurer",
    position: "Treasurer",
    image: treasurer,
  },

  {
    name: "Information Manager",
    position: "Public Relations Officer (PRO)",
    image: informationManager,
  },

  {
    name: "Director of Welfare",
    position: "Director of Welfare",
    image: directorOfWelfare,
  },

  {
    name: "Director of Discipline",
    position: "Director of Discipline",
    image: directorOfDiscipline,
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