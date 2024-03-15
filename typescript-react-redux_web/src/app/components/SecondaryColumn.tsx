import { Box } from "@mui/material";
import MyBackground from "./information-components/MyBackground";
import MyExperiences from "./information-components/experience/MyExperiences";
import MyProjects from "./information-components/projects/MyProjects";


const SecondaryColumn = () => {
  return (
    <div className="lp-column secondary-column">
      <MyBackground />
      <Box sx={{ marginTop: "125px" }} />
      <MyExperiences />
      <Box sx={{ marginTop: "35px" }} />
      <MyProjects />
      <Box sx={{ marginTop: "35px" }} />

      <p className="column-end-info">
        <b>
          Original design by{" "}
          <a className="brittany" href="https://brittanychiang.com/">
            Brittany Chiang
          </a>
          ; Accenture theme by{" "} 
          <a className="brittany" href="https://www.jan-bock.dev/">
            Jan Bock
          </a>
        </b>
        . Developed in Visual Studio Code; primarily built in React and
        Typescript.
      </p>
    </div>
  );
};

export default SecondaryColumn;
