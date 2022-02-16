import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";
import Ticker from "react-ticker";
import featuredArtist from "../../assets/images/featuredArtist.png";
import slider from "../../assets/images/slider.png";

const FeatureSeection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.SECONDARY,
  height: "auto",
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

const ScrollingTitle = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.PRIMARY,
  fontFamily: Fonts.BebasNeue,
  textTransform: "uppercase",
  fontSize: "1rem",
}));

export default function MobileFeatureSection() {
  return (
    <FeatureSeection>
      <FeatureTitleSection />
      <Box marginTop={1}>
        <>
          <Ticker speed={6}>
            {({ index }) => (
              <div style={{ display: "flex" }}>
                <ScrollingTitle>
                  {
                    "AZAY.KUN ????? THE SAFRON CONCEPT ???? THE ARTIST SPUD ????? ART.THAMBI ???? ERANAM ?????"
                  }
                </ScrollingTitle>
              </div>
            )}
          </Ticker>
        </>
      </Box>
    </FeatureSeection>
  );
}
