import "./CoreValues.css";

import { Container, Paper, Typography } from "@mui/material";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import HandshakeIcon from "@mui/icons-material/Handshake";

const values = [
  {
    icon: <HandshakeIcon fontSize="large" />,
    title: "Brotherhood",
    description:
      "Building lasting friendships and a strong bond among members through mutual trust, respect and support."
  },

  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    title: "Philanthropy",
    description:
      "Improving lives through humanitarian projects, charitable outreach and meaningful community development."
  },

  {
    icon: <PublicIcon fontSize="large" />,
    title: "Positive Social Impact",
    description:
      "Creating lasting value in society by supporting communities and responding to genuine social needs."
  },

  {
    icon: <EmojiEventsIcon fontSize="large" />,
    title: "Excellence",
    description:
      "Maintaining high standards of integrity, professionalism, accountability and responsible leadership."
  },

  {
    icon: <SchoolIcon fontSize="large" />,
    title: "Capacity Building",
    description:
      "Empowering members through education, mentorship, networking and continuous personal development."
  },

  {
    icon: <Diversity3Icon fontSize="large" />,
    title: "Unity",
    description:
      "Promoting peace, friendship and collaboration among members while preserving our shared cultural heritage."
  }
];

export default function CoreValues() {
  return (
    <section className="core-values">

      <Container maxWidth="lg">

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
          color="primary"
        >
          Our Core Values
        </Typography>

        <Typography
          align="center"
          sx={{ mb: 6 }}
        >
          The principles that guide every decision, activity and relationship
          within Ezienyi Amaka International Club.
        </Typography>

        <div className="values-grid">

          {values.map((value) => (

            <Paper
              key={value.title}
              className="value-card"
            >

              <div className="value-icon">
                {value.icon}
              </div>

              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
              >
                {value.title}
              </Typography>

              <Typography>
                {value.description}
              </Typography>

            </Paper>

          ))}

        </div>

      </Container>

    </section>
  );
}