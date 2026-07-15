import "./OurProgrammes.css";

import {
  Container,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";

const programmes = [
  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    title: "Community Development",
    description:
      "Supporting communities through empowerment programmes, infrastructure support and humanitarian projects."
  },
  {
    icon: <SchoolIcon fontSize="large" />,
    title: "Youth Empowerment",
    description:
      "Mentorship, scholarships, entrepreneurship and leadership development for young people."
  },
  {
    icon: <PublicIcon fontSize="large" />,
    title: "Cultural Promotion",
    description:
      "Promoting Igbo culture, language and traditions both locally and internationally."
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    title: "Annual Convention",
    description:
      "A yearly gathering of members worldwide for networking, celebrations and planning."
  },
  {
    icon: <FavoriteIcon fontSize="large" />,
    title: "Charity Outreach",
    description:
      "Visiting hospitals, orphanages and less privileged communities with relief materials."
  },
  {
    icon: <Diversity3Icon fontSize="large" />,
    title: "International Networking",
    description:
      "Connecting members across countries to build friendship, unity and opportunities."
  }
];

export default function OurProgrammes() {
  return (
    <section className="programmes">

      <Container maxWidth="lg">

        <Typography
          variant="h3"
          align="center"
          color="primary"
          fontWeight={700}
          gutterBottom
        >
          Our Programmes
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          We organize impactful programmes that strengthen unity,
          promote culture and improve lives.
        </Typography>

        <div className="programme-grid">

          {programmes.map((programme) => (

            <Card
              key={programme.title}
              className="programme-card"
            >

              <CardContent>

                <div className="programme-icon">
                  {programme.icon}
                </div>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                >
                  {programme.title}
                </Typography>

                <Typography color="text.secondary">
                  {programme.description}
                </Typography>

              </CardContent>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}