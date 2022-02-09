import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";
import doodle from "../../assets/images/doodle.png";

const CustomStorySection = CustomStyled(Box)(({ theme }) => ({
  width: "100%",
  height: "520px",
  background: `url(${doodle})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  marginBottom: theme.spacing(8),
}));

const StoryContainer = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-80px",
  left: "90px",
  width: "890px",
  borderWidth: "3px",
  borderStyle: "solid",
  borderImage:
    "linear-gradient(180.13deg, #FFFFFF 0.11%, rgba(255, 255, 255, 0) 61.68%) 1  1 25%",
  padding: theme.spacing(3),
  background: Colors.PRIMARY,
}));

const StoryTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  color: Colors.SECONDARY,
  marginBottom: theme.spacing(2.2),
}));

const StoryInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  marginBottom: theme.spacing(2),
  opacity: 0.8,
}));

export default function StorySection() {
  return (
    <CustomStorySection>
      <StoryContainer>
        <StoryTitle variant="h2">THE BEGINING</StoryTitle>
        <StoryInfo variant="h5">
          It’s 2030 or something. Doping is legal now. There’s no scratched
          faces no more. Sugar’s sold at groceries. Shrooms are sold with
          veggies. No one’s gotta wriggle down a forest in the middle of the
          night and there ain’t no more gun shots and shit. Everything’s pretty
          chill. But the cats miss being hunted by them dogs. And ofcourse, they
          miss that fucking OG prison cell. So, they’re picking bullshit
          catfights, posting their own mugshots, cat calling the cops and
          stirring whatever rat shit they can to keep the high going.
        </StoryInfo>
        <StoryInfo variant="h5">
          Bro, this litter don’t know shit about how to clean up.
        </StoryInfo>
      </StoryContainer>
    </CustomStorySection>
  );
}
