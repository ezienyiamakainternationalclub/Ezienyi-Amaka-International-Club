import "./Constitution.css";

import {
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@mui/material";

import GavelIcon from "@mui/icons-material/Gavel";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PublicIcon from "@mui/icons-material/Public";

export default function Constitution() {
  return (
    <>

      {/* ================= HERO ================= */}

      <section className="constitution-hero">

        <Container maxWidth="lg">

          <Typography
            variant="h2"
            fontWeight={800}
            gutterBottom
          >
            Constitution of
            <br />
            Ezienyi Amaka International Club
          </Typography>

          <Typography className="constitution-subtitle">

            Our Constitution serves as the foundation of our
            identity, governance, values, membership and
            commitment to friendship, philanthropy,
            recreation and meaningful social impact.

          </Typography>

        </Container>

      </section>

      {/* ================= PREAMBLE ================= */}

      <section className="constitution-section">

        <Container maxWidth="lg">

          <Paper className="constitution-card">

            <Typography
              variant="h3"
              color="primary"
              gutterBottom
            >
              Preamble
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Typography paragraph>

              We, a group of friends with like minds,
              having resolved to come together under one
              body (club) for the purpose of pursuing
              the common good of peace, unity,
              brotherhood and positively impacting our
              immediate environment and beyond,
              hereby adopt this Constitution as the
              guiding document of Ezienyi Amaka
              International Club.

            </Typography>

          </Paper>

        </Container>

      </section>

      {/* ================= CLUB IDENTITY ================= */}

      <section className="constitution-section grey-bg">

        <Container maxWidth="lg">

          <Typography
            variant="h3"
            align="center"
            color="primary"
            gutterBottom
          >
            Club Identity
          </Typography>

          <Grid container spacing={4}>

            <Grid size={{ xs: 12, md: 4 }}>

              <Paper className="info-card">

                <MenuBookIcon
                  color="success"
                  sx={{ fontSize: 60 }}
                />

                <Typography
                  variant="h5"
                  mt={2}
                  gutterBottom
                >
                  Official Name
                </Typography>

                <Typography>

                  Ezienyi Amaka Mara Nma
                  Social Club,
                  popularly known as
                  <strong> Ezienyi Amaka International Club.</strong>

                </Typography>

              </Paper>

            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>

              <Paper className="info-card">

                <EmojiEventsIcon
                  color="warning"
                  sx={{ fontSize: 60 }}
                />

                <Typography
                  variant="h5"
                  mt={2}
                  gutterBottom
                >
                  Motto
                </Typography>

                <Typography>

                  <strong>
                    "Onuru Ube Nwanne Agbala Oso"
                  </strong>

                </Typography>

              </Paper>

            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>

              <Paper className="info-card">

                <GroupsIcon
                  color="primary"
                  sx={{ fontSize: 60 }}
                />

                <Typography
                  variant="h5"
                  mt={2}
                  gutterBottom
                >
                  Official Slogan
                </Typography>

                <Typography>

                  <strong>
                    Ezienyi! Ezienyi!!
                  </strong>

                  <br /><br />

                  Response:

                  <br />

                  <strong>

                    Ezienyi Amaka!
                    Ezienyi Amaka!
                    Ezienyi Amaka!

                  </strong>

                  <br /><br />

                  "Onuru Ube Nwanne Agbala Oso"

                </Typography>

              </Paper>

            </Grid>

          </Grid>

        </Container>

      </section>

      {/* ================= VISION & MISSION ================= */}

      <section className="constitution-section">

        <Container maxWidth="lg">

          <Grid
            container
            spacing={4}
          >

            <Grid size={{ xs: 12, md: 6 }}>

              <Paper className="vision-card">

                <PublicIcon
                  color="success"
                  sx={{ fontSize: 65 }}
                />

                <Typography
                  variant="h4"
                  mt={2}
                  gutterBottom
                >
                  Our Vision
                </Typography>

                <Typography>

                  We exist to inspire a difference and
                  refinement in the popular perception
                  of social clubs while advancing
                  meaningful social impact through
                  partnerships with accomplished
                  personalities from diverse
                  professions and backgrounds.

                </Typography>

              </Paper>

            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>

              <Paper className="vision-card">

                <VolunteerActivismIcon
                  color="warning"
                  sx={{ fontSize: 65 }}
                />

                <Typography
                  variant="h4"
                  mt={2}
                  gutterBottom
                >
                  Our Mission
                </Typography>

                <Typography>

                  To champion the welfare of members
                  while giving more meaning to life
                  through well-defined philanthropy,
                  recreation and impactful
                  social activities.

                </Typography>

              </Paper>

            </Grid>

          </Grid>

        </Container>

      </section>

      {/* ================= AIMS & OBJECTIVES ================= */}

      <section className="constitution-section grey-bg">

        <Container maxWidth="lg">

          <Typography
            variant="h3"
            align="center"
            color="primary"
            gutterBottom
          >
            Aims & Objectives
          </Typography>

          <Typography
            align="center"
            className="section-intro"
          >
            The Club is committed to promoting friendship,
            welfare, capacity building and positive
            contributions to society.
          </Typography>

          <Grid
            container
            spacing={4}
            mt={2}
          >

                        <Grid size={{ xs: 12, md: 6 }}>
              <Paper className="objective-card">
                <Typography variant="h6" gutterBottom>
                  ✓ Member Welfare
                </Typography>

                <Typography>
                  Always be responsive to the welfare and
                  legitimate needs of members whenever it
                  is reasonable to do so.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper className="objective-card">
                <Typography variant="h6" gutterBottom>
                  ✓ Community Impact
                </Typography>

                <Typography>
                  Positively impact the lives of the
                  less privileged through charitable
                  and humanitarian projects.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper className="objective-card">
                <Typography variant="h6" gutterBottom>
                  ✓ Recreation & Wellness
                </Typography>

                <Typography>
                  Encourage physical, recreational and
                  social activities that promote healthy
                  living and stronger relationships.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper className="objective-card">
                <Typography variant="h6" gutterBottom>
                  ✓ Capacity Building
                </Typography>

                <Typography>
                  Engage professionals to educate members
                  and broaden their knowledge through
                  seminars and human capacity development.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper className="objective-card">
                <Typography variant="h6" gutterBottom>
                  ✓ Professional Networking
                </Typography>

                <Typography>
                  Build lasting relationships among
                  members and encourage support for one
                  another's businesses and professions.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper className="objective-card">
                <Typography variant="h6" gutterBottom>
                  ✓ Unity & Brotherhood
                </Typography>

                <Typography>
                  Promote peace, unity, friendship and
                  brotherhood among members while
                  preserving our shared values.
                </Typography>
              </Paper>
            </Grid>

          </Grid>

        </Container>

      </section>

      {/* ================= MEMBERSHIP ================= */}

      <section className="constitution-section">

        <Container maxWidth="lg">

          <Paper className="constitution-card">

            <Typography
              variant="h3"
              color="primary"
              gutterBottom
            >
              Membership Requirements
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Typography paragraph>
              Membership into Ezienyi Amaka International
              Club is governed by the Constitution and is
              reserved for qualified applicants who meet
              the Club's standards.
            </Typography>

            <ul className="constitution-list">
              <li>Applicant must be at least 35 years old.</li>
              <li>Applicant must be married.</li>
              <li>Applicant must be recommended by two members.</li>
              <li>Applicant must possess good character.</li>
              <li>Applicant must successfully pass the screening process.</li>
              <li>Membership is subject to approval by the General Congress.</li>
            </ul>

          </Paper>

        </Container>

      </section>

      {/* ================= GOVERNANCE ================= */}

      <section className="constitution-section grey-bg">

        <Container maxWidth="lg">

          <Typography
            variant="h3"
            align="center"
            color="primary"
            gutterBottom
          >
            Governing Council
          </Typography>

          <Typography
            align="center"
            className="section-intro"
          >
            The affairs of the Club are administered by
            elected officers serving in various leadership
            positions.
          </Typography>

          <Grid
            container
            spacing={3}
            mt={2}
          >

            {[
              "Chancellor",
              "Vice Chancellor",
              "Secretary General",
              "Assistant Secretary General",
              "Exchequer (Financial Secretary)",
              "Treasurer",
              "Information Manager (PRO)",
              "Director of Welfare",
              "Director of Discipline",
            ].map((office) => (

              <Grid
                key={office}
                size={{ xs: 12, sm: 6, md: 4 }}
              >
                <Paper className="office-card">

                  <GavelIcon
                    color="success"
                    sx={{ fontSize: 45 }}
                  />

                  <Typography
                    variant="h6"
                    mt={2}
                  >
                    {office}
                  </Typography>

                </Paper>
              </Grid>

            ))}

          </Grid>

        </Container>

      </section>

      {/* ================= CONGRESSES ================= */}

      <section className="constitution-section">

        <Container maxWidth="lg">

          <Paper className="constitution-card">

            <Typography
              variant="h3"
              color="primary"
              gutterBottom
            >
              Club Congresses
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Typography paragraph>

              The Constitution recognizes three official
              congresses:

            </Typography>

            <ul className="constitution-list">

              <li>
                <strong>General Congress</strong> —
                held on the first Saturday of every month.
              </li>

              <li>
                <strong>Governing Council Congress</strong> —
                held before each General Congress.
              </li>

              <li>
                <strong>Emergency Congress</strong> —
                convened whenever urgent matters arise.
              </li>

            </ul>

          </Paper>

        </Container>

      </section>

      {/* ================= MEMBER WELFARE ================= */}

      <section className="constitution-section grey-bg">

        <Container maxWidth="lg">

          <Typography
            variant="h3"
            align="center"
            color="primary"
            gutterBottom
          >
            Member Welfare
          </Typography>

          <Grid container spacing={4}>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper className="info-card">

                <Typography
                  variant="h5"
                  gutterBottom
                >
                  Welfare Support
                </Typography>

                <Typography>
                  The Club promotes the welfare of members
                  through structured support, charitable
                  assistance and mutual cooperation during
                  important life events.
                </Typography>

              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper className="info-card">

                <Typography
                  variant="h5"
                  gutterBottom
                >
                  Philanthropy
                </Typography>

                <Typography>
                  The Club also extends support to the
                  less privileged through community
                  development, donations and humanitarian
                  projects.
                </Typography>

              </Paper>
            </Grid>

          </Grid>

        </Container>

      </section>

      {/* ================= FOOTER NOTE ================= */}

      <section className="constitution-footer">

        <Container maxWidth="md">

          <Typography
            align="center"
            fontWeight={700}
            gutterBottom
          >
            Constitutional Notice
          </Typography>

          <Typography
            align="center"
          >
            This page provides a concise summary of the
            Constitution of Ezienyi Amaka International
            Club. Members should consult the official
            Constitution for the complete provisions,
            procedures and regulations governing the Club.
          </Typography>

        </Container>

      </section>

    </>
  );
}