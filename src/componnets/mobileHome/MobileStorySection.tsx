import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";

const MobileStorySection = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: Colors.PRIMARY,
  marginBottom: theme.spacing(3),
}));

const StoryTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  color: Colors.SECONDARY,
  fontSize: "2.25rem",
  textTransform: "uppercase",
  marginBottom: theme.spacing(2),
}));

const StoryInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  opacity: 0.8,
  marginBottom: theme.spacing(2),
}));

export default function CustomMobileStorySection() {
  return (
    <MobileStorySection>
      <StoryTitle>the beginning</StoryTitle>
      <StoryInfo variant="body1">
        It’s 2030 or something. Doping is legal now. There’s no scratched faces
        no more. Sugar’s sold at groceries. Shrooms are sold with veggies. No
        one’s gotta wriggle down a forest in the middle of the night and there
        ain’t no more gun shots and shit. Everything’s pretty chill. But the
        cats miss being hunted by them dogs. And ofcourse, they miss that
        fucking OG prison cell. So, they’re picking bullshit catfights, posting
        their own mugshots, cat calling the cops and stirring whatever rat shit
        they can to keep the high going.
      </StoryInfo>
      <StoryInfo variant="body1">
        Bro, this litter don’t know shit about how to clean up.
      </StoryInfo>
    </MobileStorySection>
  );
}
