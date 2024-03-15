import ContactMethods from "./contact/ContactMethods";
import NavigationContainer from "./navigation/NavigationContainer";
import accenture from "./bio-images/ACN-cce5b411.png";
import { Box } from "@mui/material";

const BiographyColumn = () => {
  return (
    <>
      <div id="bio-container" className="lp-column">
        <h1 id="vikas-sajanani">Vikas Sajanani</h1>
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: "15px" }}>
          <h3 id="description">Full-stack Developer at Accenture</h3>
          <img id="accenture" alt="accenture logo" src={accenture} />
        </Box>
        <h5 className="slogan-style" id="opaque">
          Creating 360 degrees value using evolving technology
          <br></br>for clients that create impact 
        </h5>
        <NavigationContainer />
        <ContactMethods />
      </div>
    </>
  );
};

export default BiographyColumn;
