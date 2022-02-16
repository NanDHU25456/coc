import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";

const MobileStorySection = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 4, 8, 4),
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
      <StoryTitle>Here’s the deal.</StoryTitle>
      <StoryInfo variant="body1">
        It’s 2030 or something. Doping is legal now. There’s no scratched faces
        no mo. Sugar’s sold at groceries. Shrooms are sold with veggies. No
        one’s gotta wriggle down a forest in the middle of the night and there
        ain’t no mo gun shots and shiz. Everything’s pretty chill. But the cats
        miss being hunted by dem dogs.
      </StoryInfo>
      <StoryInfo variant="body1">
        So, it’s just a bunch of cool cats, who’re upto a whole of rat shit that
        are livin’, and chillin’ and vibin’ together. They’re pickin bullshit
        catfights, posting their own mugshots, cat calling the cops and stirrin
        whatever they can to keep the high going. They’re too clean now to be
        called a gang but too dirty to be called a fam. So let’s just say it’s
        the coolest fucking crew or whatever that shit is.
      </StoryInfo>
      <StoryInfo variant="body1">
        Bro, this litter don’t know shit about how to clean up.
      </StoryInfo>
    </MobileStorySection>
  );
}
