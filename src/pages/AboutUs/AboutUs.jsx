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

import members from "../../assets/members-group-pic.jpg";

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

            Ezienyi Amaka International Club is a distinguished
            organization built on friendship, unity,
            leadership, cultural heritage and community
            development.

          </Typography>

        </Container>

      </section>

      {/* STORY */}

      <section className="about-story">

        <Container maxWidth="lg">

          <Grid
            container
            spacing={6}
            alignItems="center"
          >

            <Grid item md={6} xs={12}>

              <img
                src={members}
                alt="Members"
                className="about-image"
              />

            </Grid>

            <Grid item md={6} xs={12}>

              <Typography
                variant="h3"
                color="primary"
                gutterBottom
              >
                Our Story
              </Typography>

              <Typography paragraph>

                Ezienyi Amaka International Club was
                established with a vision of bringing
                together individuals who share common
                values of brotherhood, integrity,
                community development and cultural pride.

              </Typography>

              <Typography paragraph>

                Over the years, the club has continued
                to grow, creating meaningful impact
                through humanitarian activities,
                educational support, social welfare,
                youth empowerment and international
                collaboration.

              </Typography>

              <Button
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

      {/* MISSION */}

      <section className="mission-section">

        <Container>

          <Grid container spacing={4}>

            <Grid item xs={12} md={6}>

              <Paper className="mission-card">

                <PublicIcon
                  color="success"
                  sx={{ fontSize:60 }}
                />

                <Typography
                  variant="h4"
                  gutterBottom
                >
                  Our Vision
                </Typography>

                <Typography>

                  To become one of Africa's leading
                  international clubs promoting
                  excellence, unity, cultural heritage,
                  leadership and humanitarian service.

                </Typography>

              </Paper>

            </Grid>

            <Grid item xs={12} md={6}>

              <Paper className="mission-card">

                <VolunteerActivismIcon
                  color="warning"
                  sx={{ fontSize:60 }}
                />

                <Typography
                  variant="h4"
                  gutterBottom
                >
                  Our Mission
                </Typography>

                <Typography>

                  To inspire members to contribute
                  positively to society while fostering
                  friendship, integrity, development
                  and lifelong service.

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

            <Grid item md={3} sm={6} xs={12}>

              <Paper className="objective-card">

                <GroupsIcon
                  sx={{ fontSize:55 }}
                  color="success"
                />

                <Typography variant="h6">

                  Brotherhood

                </Typography>

                <Typography>

                  Strengthen relationships among members.

                </Typography>

              </Paper>

            </Grid>

            <Grid item md={3} sm={6} xs={12}>

              <Paper className="objective-card">

                <VolunteerActivismIcon
                  sx={{ fontSize:55 }}
                  color="warning"
                />

                <Typography variant="h6">

                  Community Service

                </Typography>

                <Typography>

                  Improve lives through impactful projects.

                </Typography>

              </Paper>

            </Grid>

            <Grid item md={3} sm={6} xs={12}>

              <Paper className="objective-card">

                <WorkspacePremiumIcon
                  sx={{ fontSize:55 }}
                  color="primary"
                />

                <Typography variant="h6">

                  Excellence

                </Typography>

                <Typography>

                  Promote professionalism and integrity.

                </Typography>

              </Paper>

            </Grid>

            <Grid item md={3} sm={6} xs={12}>

              <Paper className="objective-card">

                <PublicIcon
                  sx={{ fontSize:55 }}
                  color="error"
                />

                <Typography variant="h6">

                  Global Unity

                </Typography>

                <Typography>

                  Connecting members worldwide.

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
            color="primary"
            gutterBottom
          >
            Why Join Ezienyi Amaka?
          </Typography>

          <ul className="why-list">

            <li>✔ Lifelong friendships and networking.</li>

            <li>✔ Leadership development opportunities.</li>

            <li>✔ Community development projects.</li>

            <li>✔ Welfare and member support.</li>

            <li>✔ Cultural preservation and promotion.</li>

            <li>✔ International collaboration.</li>

          </ul>

        </Container>

      </section>

    </>
  );
}