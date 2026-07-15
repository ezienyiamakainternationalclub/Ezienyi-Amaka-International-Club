import "./ContactUs.css";

import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="contact-page">
      <Container maxWidth="lg">

        <div className="contact-header">

          <Typography
            variant="h3"
            fontWeight={700}
            color="success.main"
          >
            Contact Us
          </Typography>

          <Typography
            color="text.secondary"
            mt={2}
          >
            We'd love to hear from you. Reach out to us for membership,
            partnerships, community projects or any enquiries.
          </Typography>

        </div>

        <Grid container spacing={5}>

          <Grid size={{ xs: 12, md: 5 }}>

            <Paper className="contact-info">

              <h2>Get In Touch</h2>

              <div className="info-item">
                <FaPhoneAlt />
                <div>
                  <h4>Phone</h4>
                  <p>+234 806 732 3369</p>
                </div>
              </div>

              <div className="info-item">
                <FaWhatsapp />
                <div>
                  <h4>WhatsApp</h4>
                  <p>+234 806 732 3369</p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <p>ezienyiamakainternationalclub@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <h4>Address</h4>
                  <p>
                    10 Wetheral Road,
                    <br />
                    Owerri,
                    <br />
                    Imo State, Nigeria.
                  </p>
                </div>
              </div>

            </Paper>

          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>

            <Paper className="contact-form">

              <Typography
                variant="h5"
                fontWeight={700}
                mb={3}
              >
                Send Us A Message
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Phone Number"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Subject"
                margin="normal"
              />

              <TextField
                fullWidth
                multiline
                rows={6}
                label="Your Message"
                margin="normal"
              />

              <Button
                variant="contained"
                color="success"
                size="large"
                className="send-btn"
              >
                Send Message
              </Button>

            </Paper>

          </Grid>

        </Grid>

      </Container>
    </section>
  );
}