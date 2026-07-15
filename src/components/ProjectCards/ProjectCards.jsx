import "./ProjectCards.css";

import {
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Button,
  Container,
} from "@mui/material";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SchoolIcon from "@mui/icons-material/School";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ParkIcon from "@mui/icons-material/Park";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Community Development",
    icon: <VolunteerActivismIcon />,
    description:
      "Supporting communities through outreach programmes, welfare support and sustainable development initiatives.",
  },
  {
    title: "Educational Support",
    icon: <SchoolIcon />,
    description:
      "Scholarships, educational materials, mentoring programmes and youth empowerment.",
  },
  {
    title: "Health Outreach",
    icon: <MedicalServicesIcon />,
    description:
      "Medical outreach, health awareness campaigns and free health screenings.",
  },
  {
    title: "Cultural Heritage",
    icon: <Diversity3Icon />,
    description:
      "Promoting Igbo culture, unity and international cultural exchange.",
  },
  {
    title: "Environmental Projects",
    icon: <ParkIcon />,
    description:
      "Tree planting, environmental sanitation and community beautification.",
  },
  {
    title: "Youth Development",
    icon: <VolunteerActivismIcon />,
    description:
      "Leadership development, entrepreneurship and capacity building.",
  },
];

export default function ProjectCards() {
  return (
    <section className="projects">

      <Container maxWidth="lg">

        <Typography
          variant="h3"
          align="center"
          color="primary"
          fontWeight={700}
          gutterBottom
        >
          Community Projects
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 7 }}
        >
          Creating positive impact through sustainable projects and humanitarian
          services.
        </Typography>

        <Grid container spacing={4}>

          {projects.map((project, index) => (

            <Grid item xs={12} md={4} key={index}>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: .3 }}
              >

                <Card className="project-card">

                  <CardContent>

                    <div className="project-icon">

                      {project.icon}

                    </div>

                    <Typography
                      variant="h5"
                      gutterBottom
                      fontWeight={700}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                    >
                      {project.description}
                    </Typography>

                    <Chip
                      label="Ongoing"
                      color="success"
                      sx={{ mt: 3 }}
                    />

                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{ mt: 3 }}
                    >
                      Learn More
                    </Button>

                  </CardContent>

                </Card>

              </motion.div>

            </Grid>

          ))}

        </Grid>

      </Container>

    </section>
  );
}