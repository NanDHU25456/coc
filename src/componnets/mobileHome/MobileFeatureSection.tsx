import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { Box } from "@mui/material";
import React from "react";
import featuredArtist from "../../assets/images/featuredArtist.png";
import slider from "../../assets/images/slider.png";

const FeatureSeection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.SECONDARY,
  height: "120px",
  width: "100%",
}));

const FeatureTitleSection = CustomStyled(Box)(({ theme }) => ({
  height: "40px",
  background: `url(${featuredArtist})`,
}));

const ScrollingContainer = CustomStyled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  overflow: "hiddenn",
  transform: "translate3d(0, 0, 0)",
}));

const Scrolling = CustomStyled(Box)(({ theme }) => ({
  height: "45%",
  width: "400%",
  background: `url(${slider})`,
  backgroundRepeat: "repeat-x",
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translate3d(0, 0, 0)",
  animation: "moveSlideshow 15s linear infinite",
  "@keyframes moveSlideshow": {
    "100%": {
      transform: "translateX(-66.6666%)",
    },
  },
}));

export default function MobileFeatureSection() {
  return (
    <FeatureSeection>
      <FeatureTitleSection />
      <ScrollingContainer>
        <Scrolling />
      </ScrollingContainer>
    </FeatureSeection>
  );
}
