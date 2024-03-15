import { Avatar, Box } from "@mui/material";
import vikasSajanani from "../bio-images/profilepic.jpg";

const MyBackground = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Avatar
        alt="Vikas Sajanani"
        src={vikasSajanani}
        sx={{ width: 56, height: 56, marginLeft: "15px", marginRight: "15px" }}
      />
      <div className="lp-column bio slogan-style" id="ABOUT">
        
Welcome to the digital playground of an electronics engineer turned coding maestro - 89% remaining! 
Hailing from the halls of the University of Warwick, where circuitry danced with electrons, 
I found my rhythm in the binary beats of software engineering.
<br></br>
<br></br>
<b>My journey began with a curious Google search on "How to be a software engineer," 
evolving through the corridors of self-learning and mentorship at Accenture. </b>
<br></br>
<br></br>
Guided by the wisdom of seasoned tech gurus, I honed my craft and embraced the artistry of code.
Fast forward a few orbits around the sun, and I've metamorphosed into a full-stack virtuoso,
fluent in the languages of Node.js and Java. 
<br></br>
<br></br>
From bits to bytes, I've navigated through intricate systems, weaving solutions 
that resonate with both functionality and finesse.
Among my adventures, I've had the honor of <b>collaborating with the UK government </b> 
on projects that touch the lives of over <b>30 million citizens</b>,
influencing a budget as hefty as <b>£7 billion</b>. 
Each line of code bears the weight of responsibility and the promise of progress.

<br></br>
<br></br>
When I'm not coding, I'm either with friends, reading, at the gym, or
playing chess!
      </div>
    </Box>
  );
};

export default MyBackground;
