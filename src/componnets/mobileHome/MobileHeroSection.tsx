import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { Box } from "@mui/material";
import { Icon } from "../pages/HomePage";
import MobileNav from "./MobileNav";
import React from "react";
import mobileBackground from "../../assets/images/background-mobile.png";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";

const Container = CustomStyled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: `url(${mobileBackground})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
}));

interface MobileHeroSectionProps {
  showOverlay: boolean;
  showDiscord: boolean;
  setShowDiscord: (val: boolean) => void;
  playing: boolean;
  toggle: () => void;
}

export default function MobileHeroSection({
  showOverlay,
  showDiscord,
  setShowDiscord,
  playing,
  toggle,
}: MobileHeroSectionProps) {
  return (
    <Container>
      {!showOverlay && (
        <MobileNav showDiscord={showDiscord} setShowDiscord={setShowDiscord} />
      )}

      <Icon
        sx={{
          position: "fixed !important",
          bottom: "24px !important",
          right: "24px !important",
          background: Colors.PRIMARY,
        }}
        id="cat-play"
        onClick={() => toggle()}
      >
        <img src={playing ? pause : play} alt="audio" />
      </Icon>
    </Container>
  );
}
