import "./Executives.css";

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import chancellor from "../../assets/emma-chike-nwanju-club-chancellor-2024-till-date.webp";
// import viceChancellor from "../../assets/vice-chancellor.webp";
import secretaryGeneral from "../../assets/Ezienyi Iyke Umeh (Secretary-General).jpeg";
import assistantSecretaryGeneral from "../../assets/Ezienyi Samuel Ihezuonu (Asst. Secretary General).jpeg";
import financialSecretary from "../../assets/Ezienyi Daniel Onyema (Exchequer).jpeg";
import treasurer from "../../assets/Ezienyi Uba Christian (Treasurer).jpeg";
import informationManager from "../../assets/Ezienyi Obioma Nwaiwu (PRO).jpeg";
// import directorOfWelfare from "../../assets/director-of-welfare.webp";
// import directorOfDiscipline from "../../assets/director-of-discipline.webp";
import provost1 from "../../assets/Ezienyi Kyrian Ndum (Provost).jpeg";
import provost2 from "../../assets/Ezienyi Mathias Nkoku (Provost 2).jpeg";

const executives = [
  {
    name: "Ezienyi Emma Chike Nwanju",
    position: "Chancellor",
    image: chancellor,
  },

  // {
  //   name: "Vice-Chancellor",
  //   position: "Vice-Chancellor",
  //   image: viceChancellor,
  // },

  {
    name: "Ezienyi Iyke Umeh",
    position: "Secretary-General",
    image: secretaryGeneral,
  },

  {
    name: "Ezienyi Samuel Ihezuonu",
    position: "Assistant Secretary-General",
    image: assistantSecretaryGeneral,
  },

  {
    name: "Ezienyi Daniel Onyema ",
    position: "Financial Secretary(Exchequer)",
    image: financialSecretary,
  },

  {
    name: "Ezienyi Uba Christian",
    position: "Treasurer",
    image: treasurer,
  },

  {
    name: "Ezienyi Obioma Nwaiwu",
    position: "Public Relations Officer (PRO)",
    image: informationManager,
  },

 {
    name: "Ezienyi Kyrian Ndum",
    position: "Provost",
    image: provost1,
  },

  {
    name: "Ezienyi Mathias Nkoku",
    position: "Provost 2",
    image: provost2,
  },


  // {
  //   name: "Director of Welfare",
  //   position: "Director of Welfare",
  //   image: directorOfWelfare,
  // },

  // {
  //   name: "Director of Discipline",
  //   position: "Director of Discipline",
  //   image: directorOfDiscipline,
  // },
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