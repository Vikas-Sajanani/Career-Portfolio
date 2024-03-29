import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ProjectCardFace } from "./MyProjects";
import { ReactNode } from "react";
import SongDiary from "./project-images/SongDiaryAPI.png";
import RobotArm from "./project-images/RoboticArm.jpg";

interface ExperienceCardProps {
  cardInfo: ProjectCardFace;
}

const ProjectCard = ({ cardInfo }: ExperienceCardProps) => {
  const renderSkillChips = (skillsArray: string[]) => {
    return skillsArray.map((entry) => {
      return (
        <>
          <Chip
            sx={{ marginRight: "5px", marginBottom: "5px" }}
            key={entry}
            label={entry}
          />
        </>
      );
    });
  };

  const returnImg = (): ReactNode => {
    if (cardInfo.projectTitle === "SongDiary")
      return (
        <img id="image-container" alt="song diary landing page" src={SongDiary} />
      );
    if (cardInfo.projectTitle === "Robot Arm")
      return <img id="image-container" alt="robot arm" src={RobotArm} />;
  };

  return (
    <>
      <Card
        className="experience-card"
        key={cardInfo.projectTitle}
        onClick={() =>
          window.open(cardInfo.link, "_blank") ||
          window.location.assign(cardInfo.link)
        }
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: "25px",
              "@media screen and (max-width: 400px)": { columnGap: "20px" },
            }}
          >
            <Box
              sx={{
                borderRadius: "2px",
                minWidth: "125px",
                height: "75px",
                "@media screen and (max-width: 400px)": { minWidth: "100px" },
              }}
            >
              {returnImg()}
            </Box>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    mb: 1.5,
                    fontFamily: "Inter",
                    fontWeight: 600,
                    letterSpacing: "-0.5px",
                  }}
                  className="experience-card-role"
                >
                  <div>{cardInfo.projectTitle}</div>
                </Typography>
                <Box>
                  <OpenInNewIcon sx={{ paddingLeft: "5px", width: "15px" }} />
                </Box>
              </Box>
              <Typography
                sx={{ mb: 1.5, fontSize: "14px" }}
                color="text.secondary"
              >
                {cardInfo.description}
              </Typography>
              {renderSkillChips(cardInfo.skills)}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
