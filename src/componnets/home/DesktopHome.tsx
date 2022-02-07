import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import BackgroundLayout from "../layout/BackgroundLayout";
import { Icon } from "../pages/HomePage";
import React from "react";
import backgroundImage from "../../assets/images/background.png";
import futureImage from "../../assets/images/future-image.png";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";

const Container = CustomStyled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
}));

const StorySection = CustomStyled(Box)(({ theme }) => ({
  width: "100%",
  height: "70vh",
  background: Colors.PRIMARY,
  border: "1px solid white",
  position: "relative",
}));

const StoryContainer = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-80px",
  left: "60px",
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
  fontSize: "3.75rem",
  background:
    "linear-gradient(87.22deg, #FF00C7 5.62%, #00FFD1 50.96%, #FFF500 98.22%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: theme.spacing(2),
}));

const StoryInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  marginBottom: theme.spacing(2),
  opacity: 0.8,
}));

const FutureSection = CustomStyled(Box)(({ theme }) => ({
  background: `url(${futureImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "150px",
  margin: theme.spacing(0, -2.2),
}));
interface DesktopHomeProps {
  toggle: () => void;
  playing: boolean;
  showOverlay: boolean;
}

export default function DesktopHome({
  toggle,
  playing,
  showOverlay,
}: DesktopHomeProps) {
  return (
    <BackgroundLayout showOverlay={showOverlay}>
      <Container>
        <Icon onClick={() => toggle()} id="cat-play">
          <img src={playing ? pause : play} alt="audio" />
        </Icon>
      </Container>
      <StorySection>
        <StoryContainer>
          <StoryTitle>THE STORY</StoryTitle>
          <StoryInfo variant="h5">
            It’s 2030 or something. Doping is legal now. There’s no scratched
            faces no more. Sugar’s sold at groceries. Shrooms are sold with
            veggies. No one’s gotta wriggle down a forest in the middle of the
            night and there ain’t no more gun shots and shit. Everything’s
            pretty chill. But the cats miss being hunted by them dogs. And
            ofcourse, they miss that fucking OG prison cell. So, they’re picking
            bullshit catfights, posting their own mugshots, cat calling the cops
            and stirring whatever rat shit they can to keep the high going.
          </StoryInfo>
          <StoryInfo variant="h5">
            Bro, this litter don’t know shit about how to clean up.
          </StoryInfo>
        </StoryContainer>
      </StorySection>
      <FutureSection />
    </BackgroundLayout>
  );
}
