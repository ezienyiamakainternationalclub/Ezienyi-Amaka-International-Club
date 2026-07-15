import "./CoreValues.css";

import { Container, Paper, Typography } from "@mui/material";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import HandshakeIcon from "@mui/icons-material/Handshake";

const values = [

{
icon:<HandshakeIcon fontSize="large"/>,
title:"Brotherhood",
description:"Building lasting friendships and strengthening the bond among members."
},

{
icon:<VolunteerActivismIcon fontSize="large"/>,
title:"Service",
description:"Serving humanity through impactful community development initiatives."
},

{
icon:<PublicIcon fontSize="large"/>,
title:"Global Unity",
description:"Connecting members across countries while preserving our cultural heritage."
},

{
icon:<EmojiEventsIcon fontSize="large"/>,
title:"Excellence",
description:"Promoting professionalism, integrity and continuous improvement."
},

{
icon:<SchoolIcon fontSize="large"/>,
title:"Leadership",
description:"Developing responsible leaders capable of creating positive change."
},

{
icon:<Diversity3Icon fontSize="large"/>,
title:"Community",
description:"Supporting one another while improving society."
}

];

export default function CoreValues(){

return(

<section className="core-values">

<Container maxWidth="lg">

<Typography
variant="h3"
align="center"
fontWeight="bold"
gutterBottom
color="primary"
>

Our Core Values

</Typography>

<Typography
align="center"
sx={{mb:6}}
>

The principles that define who we are.

</Typography>

<div className="values-grid">

{

values.map((value)=>(

<Paper
key={value.title}
className="value-card"
>

<div className="value-icon">

{value.icon}

</div>

<Typography
variant="h6"
fontWeight="bold"
gutterBottom
>

{value.title}

</Typography>

<Typography>

{value.description}

</Typography>

</Paper>

))

}

</div>

</Container>

</section>

)

}