import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { Box } from "@mui/material";
import React from "react";
import featuredArtist from "../../assets/images/featuredArtist.png";

const FeatureSeection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.SECONDARY,
  height: "120px",
  width: "100%",
}));

const FeatureTitleSection = CustomStyled(Box)(({ theme }) => ({
  height: "40px",
  background: `url(${featuredArtist})`,
}));

export default function MobileFeatureSection() {
  return (
    <FeatureSeection>
      <FeatureTitleSection />
    </FeatureSeection>
  );
}
