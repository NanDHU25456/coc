import { Box, IconButton } from "@mui/material";
import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import React from "react";
import backgroundImage from "../../assets/images/background.png";
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

const Icon = CustomStyled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: "30px",
  right: "60px",
  background: Colors.PRIMARY,
  padding: theme.spacing(1),
  height: "55px",
  width: "55px",
  borderRadius: 0,
  opacity: 0.7,
  zIndex: 999,
}));

interface HeroSectionProps {
  toggle: () => void;
  playing: boolean;
  showOverlay: boolean;
}

export default function HeroSection({
  toggle,
  playing,
  showOverlay,
}: HeroSectionProps) {
  return (
    <Container>
      {!showOverlay && (
        <Icon onClick={() => toggle()} id="cat-play">
          <img src={playing ? pause : play} alt="audio" />
        </Icon>
      )}
    </Container>
  );
}
