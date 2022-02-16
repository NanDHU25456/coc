import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";
import doodle from "../../assets/images/doodle.png";

const CustomStorySection = CustomStyled(Box)(({ theme }) => ({
  width: "100%",
  height: "520px",
  // background: `url(${doodle})`,
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  position: "relative",
  marginBottom: theme.spacing(8),
  "& img": {
    height: "100%",
    width: "100%",
  },
}));

const StoryContainer = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  // top: "-60px",
  // left: "110px",
  // width: "890px",
  top: "-15%",
  left: "6%",
  width: "70%",
  borderWidth: "3px",
  borderStyle: "solid",
  borderImage:
    "linear-gradient(180.13deg, #FFFFFF 0.11%, rgba(255, 255, 255, 0) 61.68%) 1  1 25%",
  padding: theme.spacing(5),
  background: Colors.PRIMARY,
}));

const StoryTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  color: Colors.SECONDARY,
  marginBottom: theme.spacing(2.2),
  textTransform: "uppercase",
}));

const StoryInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  marginBottom: theme.spacing(2),
  opacity: 0.8,
}));

interface StorySectionProps {
  showOverlay: boolean;
}

export default function StorySection({ showOverlay }: StorySectionProps) {
  const theme = useTheme();
  const isExtralargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <CustomStorySection>
      <img src={doodle} alt="doodle" />
      {!showOverlay && (
        <StoryContainer>
          <StoryTitle
            sx={{ fontSize: isExtralargeScreen ? "3.25rem" : "3rem" }}
            variant="h2"
          >
            Here’s the deal
          </StoryTitle>
          <StoryInfo variant="h6">
            It’s 2030 or something. Doping is legal now. There’s no scratched
            faces no mo. Sugar’s sold at groceries. Shrooms are sold with
            veggies. No one’s gotta wriggle down a forest in the middle of the
            night and there ain’t no mo gun shots and shiz. Everything’s pretty
            chill. But the cats miss being hunted by dem dogs.
          </StoryInfo>
          <StoryInfo variant="h6">
            {" "}
            So, it’s just a bunch of cool cats, who’re upto a whole of rat shit
            that are livin’, and chillin’ and vibin’ together. They’re pickin
            bullshit catfights, posting their own mugshots, cat calling the cops
            and stirrin whatever they can to keep the high going. They’re too
            clean now to be called a gang but too dirty to be called a fam. So
            let’s just say it’s the coolest fucking crew or whatever that shit
            is.
          </StoryInfo>
          <StoryInfo variant="h6">
            {" "}
            Bro, this litter don’t know shit about how to clean up.
          </StoryInfo>
        </StoryContainer>
      )}
    </CustomStorySection>
  );
}
