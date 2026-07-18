import "./Leadership.css";

import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

// ===== IMPORT IMAGES =====

import chancellor2024 from "../../assets/emma-chike-nwanju-club-chancellor-2024-till-date.webp";
import viceChancellor from "../../assets/vice-chancellor.webp";
import secretaryGeneral from "../../assets/secretary-general.webp";
import assistantSecretaryGeneral from "../../assets/assistant-secretary-general.webp";
import financialSecretary from "../../assets/exchequer-(financial -secretary).webp";
import directorOfWelfare from "../../assets/director-of-welfare.webp";
import directorOfDiscipline from "../../assets/director-of-discipline.webp";
import informationManager from "../../assets/information-manager-(PRO).webp";

import members10thAnniversary from "../../assets/bot-members-pose-on-our-10th-anniversary.webp";
import membersWithChancellor from "../../assets/bot-members-with-the-chancellor-at-the -centre.webp";
import crossSectionMembers from "../../assets/cross-section-of-members.webp";
import membersGroup from "../../assets/members-group-image.webp";
import ihie1 from "../../assets/ihiee-1-of-ezienyi.webp";

import formerChancellor2020 from "../../assets/desmond-obisike-club-chancellor-2020-till-2024.webp";
import formerChancellor2015 from "../../assets/ezienyi-paully-ndubueze-club-chancellor-2015-till-2020.webp";
import anniversary10Years from "../../assets/10-years-aniversery-2015-2025.webp";

// ================================

const images = [
  {
    image: chancellor2024,
    title: "Chancellor (2024 - Present)",
    featured: true,
  },

  {
    image: viceChancellor,
    title: "Vice Chancellor",
  },

  {
    image: secretaryGeneral,
    title: "Secretary-General",
  },

  {
    image: assistantSecretaryGeneral,
    title: "Assistant Secretary-General",
  },

  {
    image: financialSecretary,
    title: "Exchequer (Financial Secretary)",
  },

  {
    image: informationManager,
    title: "Information Manager (PRO)",
  },

  {
    image: directorOfWelfare,
    title: "Director of Welfare",
  },

  {
    image: directorOfDiscipline,
    title: "Director of Discipline",
  },

  {
    image: formerChancellor2020,
    title: "Former Chancellor (2020 - 2024)",
    featured: true,
  },

  {
    image: formerChancellor2015,
    title: "Former Chancellor (2015 - 2020)",
    featured: true,
  },

  {
    image: members10thAnniversary,
    title: "Members at the 10th Anniversary",
  },

  {
    image: membersWithChancellor,
    title: "Members with the Chancellor",
  },

  {
    image: crossSectionMembers,
    title: "Cross Section of Members",
  },

  {
    image: membersGroup,
    title: "Members Group Photograph",
  },

  {
    image: ihie1,
    title: "Ihie I of Ezienyi",
  },

  {
  image: anniversary10Years,
  title: "10th Anniversary (2015 - 2025)",
},
];

export default function Leadership() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="leadership-header">
        <Container>
          <Typography
            variant="h2"
            fontWeight={800}
          >
            Leadership & Members Gallery
          </Typography>

          <Typography className="leadership-subtitle">
            Meet the distinguished leaders and members of Ezienyi Amaka
            International Club whose commitment, unity and service continue to
            strengthen our organization and positively impact society.
          </Typography>
        </Container>
      </section>

      <section className="leadership-section">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {images.map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <div
                  className={`leadership-card ${
                    item.featured ? "gold-card" : "green-card"
                  }`}
                  onClick={() => setSelected(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="leadership-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth="lg"
      >
        <DialogContent className="dialog-content">
          <IconButton
            className="close-btn"
            onClick={() => setSelected(null)}
          >
            <CloseIcon />
          </IconButton>

          {selected && (
            <>
              <img
                src={selected.image}
                alt={selected.title}
                className="dialog-image"
              />

              <Typography
                align="center"
                mt={3}
                fontWeight={700}
                fontSize="1.3rem"
              >
                {selected.title}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
