import "./CTA.css";

import { Button, Container } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CTA() {

return (

<section className="cta">

<Container maxWidth="md">

<h2>

Become Part of Something Greater

</h2>

<p>

Join a growing international community dedicated to friendship,
leadership, community development and cultural excellence.

</p>

<div className="cta-buttons">

<Button

variant="contained"

color="warning"

size="large"

endIcon={<ArrowForwardIcon/>}

>

Join The Club

</Button>

<Button

variant="outlined"

color="inherit"

size="large"

>

Contact Us

</Button>

</div>

</Container>

</section>

);

}