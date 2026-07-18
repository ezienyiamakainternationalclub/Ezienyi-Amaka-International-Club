import "./BecomeMember.css";

import countries from "../Countries/countries";
import {
  Checkbox,
  FormControlLabel,
} from "@mui/material";

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
            Complete the application below. Submission of this
form does not guarantee membership. All applications
are subject to screening and approval in accordance
with the Constitution of Ezienyi Amaka International
Club.

{/* Membership Requirements

• Applicant must be at least 35 years old.

• Applicant must be married.

• Applicant must be of good character.

• Applicant must be recommended by two members of the Club.

• Applicant shall undergo screening by the Screening Committee.

• Membership is subject to approval by the General Congress.

• Application Form Fee:
₦100,000 (Non-refundable)

• Registration Fee after approval:
₦1,000,000 */}

          </Typography>

        <div className="form-grid">

  <TextField
    fullWidth
    label="First Name"
    required
  />

  <TextField
    fullWidth
    label="Middle Name"
  />

  <TextField
    fullWidth
    label="Last Name"
    required
  />

  <TextField
    fullWidth
    label="Email Address"
    type="email"
    required
  />

  <TextField
    fullWidth
    label="Phone Number"
    required
  />

  <TextField
    fullWidth
    type="date"
    label="Date of Birth"
    InputLabelProps={{ shrink: true }}
  />

  <TextField
    select
    fullWidth
    label="Gender"
    defaultValue=""
  >
    <MenuItem value="Male">Male</MenuItem>
    <MenuItem value="Female">Female</MenuItem>
  </TextField>

  <TextField
    select
    fullWidth
    label="Marital Status"
    defaultValue=""
  >
    <MenuItem value="Single">Single</MenuItem>
    <MenuItem value="Married">Married</MenuItem>
    <MenuItem value="Divorced">Divorced</MenuItem>
    <MenuItem value="Widowed">Widowed</MenuItem>
  </TextField>

  <TextField
    select
    fullWidth
    label="Country"
    defaultValue=""
  >
    {countries.map((country) => (
      <MenuItem
        key={country}
        value={country}
      >
        {country}
      </MenuItem>
    ))}
  </TextField>

  <TextField
    fullWidth
    label="State of Origin"
  />

  <TextField
    fullWidth
    label="L.G.A."
  />

  <TextField
    fullWidth
    label="Occupation"
  />

  <TextField
    fullWidth
    label="Residential Address"
    className="full-width"
  />

  <TextField
    fullWidth
    label="Office Address"
    className="full-width"
  />

  <TextField
    select
    fullWidth
    label="Blood Group"
    defaultValue=""
  >
    <MenuItem value="A+">A+</MenuItem>
    <MenuItem value="A-">A-</MenuItem>
    <MenuItem value="B+">B+</MenuItem>
    <MenuItem value="B-">B-</MenuItem>
    <MenuItem value="AB+">AB+</MenuItem>
    <MenuItem value="AB-">AB-</MenuItem>
    <MenuItem value="O+">O+</MenuItem>
    <MenuItem value="O-">O-</MenuItem>
    <MenuItem value="Unknown">Unknown</MenuItem>
  </TextField>

  <TextField
    select
    fullWidth
    label="Genotype"
    defaultValue=""
  >
    <MenuItem value="AA">AA</MenuItem>
    <MenuItem value="AS">AS</MenuItem>
    <MenuItem value="AC">AC</MenuItem>
    <MenuItem value="SS">SS</MenuItem>
    <MenuItem value="SC">SC</MenuItem>
    <MenuItem value="CC">CC</MenuItem>
    <MenuItem value="Unknown">Unknown</MenuItem>
  </TextField>

  <TextField
    fullWidth
    label="Next of Kin"
  />

  <TextField
    fullWidth
    label="Relationship"
  />

  <TextField
    fullWidth
    label="Next of Kin Phone Number"
  />

  <TextField
    fullWidth
    multiline
    rows={4}
    label="Why do you want to join Ezienyi Amaka International Club?"
    className="full-width"
  />

  <TextField
    fullWidth
    multiline
    rows={4}
    label="What would you like the Executive Committee to Add, Remove or Improve?"
    className="full-width"
  />

  <Typography
    className="full-width"
    sx={{
      mt:2,
      fontWeight:600,
      lineHeight:1.8
    }}
  >
    I hereby declare that the information supplied above is true and
    correct. I agree to abide by the constitution, rules and regulations
    of Ezienyi Amaka International Club and to support the objectives,
    unity and growth of the Club.
  </Typography>

  <FormControlLabel
    className="full-width"
    control={<Checkbox color="success" />}
    label="I have read and agree to the declaration above."
  />

  <TextField
    fullWidth
    label="Signature (Type your Full Name)"
  />

  <TextField
    fullWidth
    type="date"
    label="Date"
    InputLabelProps={{
      shrink:true
    }}
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