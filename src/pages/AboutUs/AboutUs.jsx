import "./AboutUs.css";

import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Link } from "react-router-dom";

import members from "../../assets/cross-section-of-members.webp";

export default function AboutUs() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <Container>
          <Typography
            variant="h2"
            fontWeight={800}
            gutterBottom
          >
            About Our Club
          </Typography>

          <Typography className="about-hero-text">
            Ezienyi Amaka International Club is a respected social
            organization founded by like-minded friends who united
            under one body to promote peace, brotherhood, unity,
            philanthropy, recreation and meaningful social impact
            within Nigeria and beyond.
          </Typography>
        </Container>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <Container maxWidth="lg">

          <Grid
            container
            spacing={6}
            alignItems="center"
          >

            <Grid size={{ xs: 12, md: 6 }}>
              <img
                src={members}
                alt="Club Members"
                className="about-image"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

              <Typography
                variant="h3"
                color="primary"
                gutterBottom
              >
                Our Story
              </Typography>

              <Typography paragraph>
                Ezienyi Amaka International Club was founded by a
                group of like-minded friends who resolved to come
                together under one organization to pursue peace,
                unity, brotherhood and the common good while
                positively impacting society through responsible
                leadership, philanthropy and service.
              </Typography>

              <Typography paragraph>
                Today, the Club continues to strengthen friendship
                among members while advancing philanthropy,
                recreation, professional networking, community
                development, capacity building and the preservation
                of our rich cultural heritage.
              </Typography>

              <Typography paragraph>
                We remain committed to inspiring meaningful social
                impact by partnering with accomplished individuals
                from diverse professions and backgrounds while
                promoting welfare, integrity, excellence and
                lifelong friendship among members.
              </Typography>

              <Button
                component={Link}
                to="/becomemember"
                variant="contained"
                color="success"
                endIcon={<ArrowForwardIcon />}
              >
                Join Our Mission
              </Button>

            </Grid>

          </Grid>

        </Container>
      </section>

      {/* VISION & MISSION */}
      <section className="mission-section">
        <Container>

          <Grid container spacing={4}>

            <Grid size={{ xs: 12, md: 6 }}>

              <Paper className="mission-card">

                <PublicIcon
                  color="success"
                  sx={{ fontSize: 60 }}
                />

                <Typography
                  variant="h4"
                  gutterBottom
                >
                  Our Vision
                </Typography>

                <Typography>
                  We exist to inspire a difference and refinement
                  in the perception of social clubs by advancing
                  and fostering meaningful social impact through
                  partnerships with accomplished personalities
                  from diverse backgrounds and professions.
                </Typography>

              </Paper>

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

              <Paper className="mission-card">

                <VolunteerActivismIcon
                  color="warning"
                  sx={{ fontSize: 60 }}
                />

                <Typography
                  variant="h4"
                  gutterBottom
                >
                  Our Mission
                </Typography>

                <Typography>
                  At Ezienyi Amaka International Club, we champion
                  the welfare of members and give more meaning to
                  life through well-defined philanthropy,
                  recreation, social activities, community
                  development and responsible leadership.
                </Typography>

              </Paper>

            </Grid>

          </Grid>

        </Container>
      </section>

      {/* OBJECTIVES */}
      <section className="objectives">
        <Container>

          <Typography
            variant="h3"
            align="center"
            color="primary"
            gutterBottom
          >
            Our Objectives
          </Typography>

          <Grid container spacing={4}>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>

              <Paper className="objective-card">

                <GroupsIcon
                  sx={{ fontSize: 55 }}
                  color="success"
                />

                <Typography variant="h6">
                  Member Welfare
                </Typography>

                <Typography>
                  Respond to members' welfare and legitimate needs
                  whenever it is reasonable to do so.
                </Typography>

              </Paper>

            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>

              <Paper className="objective-card">

                <VolunteerActivismIcon
                  sx={{ fontSize: 55 }}
                  color="warning"
                />

                <Typography variant="h6">
                  Community Impact
                </Typography>

                <Typography>
                  Positively impact the lives of the less
                  privileged through humanitarian and community
                  development initiatives.
                </Typography>

              </Paper>

            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>

              <Paper className="objective-card">

                <WorkspacePremiumIcon
                  sx={{ fontSize: 55 }}
                  color="primary"
                />

                <Typography variant="h6">
                  Capacity Building
                </Typography>

                <Typography>
                  Engage professionals to educate, mentor and
                  broaden members' knowledge and leadership
                  capacity.
                </Typography>

              </Paper>

            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>

              <Paper className="objective-card">

                <PublicIcon
                  sx={{ fontSize: 55 }}
                  color="error"
                />

                <Typography variant="h6">
                  Professional Networking
                </Typography>

                <Typography>
                  Encourage members to support one another's
                  businesses, professions and areas of
                  specialization.
                </Typography>

              </Paper>

            </Grid>

          </Grid>

        </Container>
      </section>

      {/* WHY JOIN */}
      <section className="why-join">
        <Container maxWidth="md">

          <Typography
            variant="h3"
            align="center"
            sx={{
              color: "#111",
              fontWeight: 700,
            }}
            gutterBottom
          >
            Why Join Ezienyi Amaka?
          </Typography>

          <ul className="why-list">
            <li>✔ Lifelong brotherhood and genuine friendship.</li>
            <li>✔ Strong professional and business networking.</li>
            <li>✔ Meaningful philanthropy and community development.</li>
            <li>✔ Recreation and quality social activities.</li>
            <li>✔ Leadership and personal development.</li>
            <li>✔ Welfare support among members.</li>
            <li>✔ Capacity-building and professional enlightenment.</li>
            <li>✔ Preservation of our rich cultural heritage.</li>
            <li>✔ International networking opportunities.</li>
            <li>✔ The opportunity to make a lasting positive impact on society.</li>
          </ul>

        </Container>
      </section>
    </>
  );
}