import "./BecomeMember.css";

import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";

export default function BecomeMember() {
  return (
    <section className="become-member">
      <Container maxWidth="md">
        <Paper className="membership-form">

          <Typography
            variant="h3"
            align="center"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Become A Member
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 5 }}
          >
            Complete the form below and one of our executives will contact you.
          </Typography>

          <div className="form-grid">

            <TextField
              fullWidth
              label="First Name"
            />

            <TextField
              fullWidth
              label="Last Name"
            />

            <TextField
              fullWidth
              label="Phone Number"
            />

            <TextField
              fullWidth
              label="Email Address"
            />

            <TextField
              fullWidth
              select
              label="Country"
              defaultValue=""
              className="full-width"
            >
              <MenuItem value="Nigeria">Nigeria</MenuItem>
              <MenuItem value="Ghana">Ghana</MenuItem>
              <MenuItem value="United Kingdom">United Kingdom</MenuItem>
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Residential Address"
              className="full-width"
            />

            <TextField
              fullWidth
              multiline
              rows={5}
              label="Why do you want to join the Club?"
              className="full-width"
            />

            <Button
              fullWidth
              variant="contained"
              color="success"
              size="large"
              className="full-width"
            >
              Submit Membership Application
            </Button>

          </div>

        </Paper>
      </Container>
    </section>
  );
}