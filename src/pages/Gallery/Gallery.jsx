import "./Gallery.css";

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

import group from "../../assets/members-group-pic.jpg";
import chairman from "../../assets/chairman.jpg";
import viceChairman from "../../assets/vice-chairman.jpg";
import secretary from "../../assets/secretary.jpg";
import financialSecretary from "../../assets/financial-secretary.jpg";
import treasurer from "../../assets/treasurer.jpg";
import welfareChairman from "../../assets/welfare-chairman.jpg";

const images = [
  {
    image: group,
    title: "Members Group Photograph",
  },
  {
    image: chairman,
    title: "Chairman",
  },
  {
    image: viceChairman,
    title: "Vice Chairman",
  },
  {
    image: secretary,
    title: "Secretary",
  },
  {
    image: financialSecretary,
    title: "Financial Secretary",
  },
  {
    image: treasurer,
    title: "Treasurer",
  },
  {
    image: welfareChairman,
    title: "Welfare Chairman",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="gallery-header">
        <Container>
          <Typography variant="h2" fontWeight={800}>
            Members
          </Typography>

          <Typography className="gallery-subtitle">
            Memories, leadership, friendship and community service in pictures.
          </Typography>
        </Container>
      </section>

      <section className="gallery-section">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {images.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div
                  className="gallery-card"
                  onClick={() => setSelected(item)}
                >
                  <img src={item.image} alt={item.title} />

                  <div className="gallery-overlay">
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
                mt={2}
                fontWeight={700}
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