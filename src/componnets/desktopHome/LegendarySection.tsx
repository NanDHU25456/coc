import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { Box } from "@mui/material";
import React from "react";
import legendary from "../../assets/images/legendary.png";

const LegendarySectionContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  background: Colors.PRIMARY,
  height: "350px",
  marginTop: theme.spacing(-1),
  width: "103%",
}));

const CustomLegendarySection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  width: "100%",
  height: "auto",
  display: "flex",
  padding: theme.spacing(8, 0),
  // alignItems: "center",
  // justifyContent: "center",
  "& img": {
    height: "100%",
    width: "100%",
  },
}));

// const LegendaryTitle = CustomStyled(Box)(({ theme }) => ({
//   fontFamily: Fonts.BebasNeue,
//   fontSize: "12rem",
//   color: Colors.SECONDARY,
//   maxWidth: "100%",
// }));

export default function LegendarySection() {
  return (
    <LegendarySectionContainer>
      <CustomLegendarySection>
        <img src={legendary} alt="legendary" />
        {/* <LegendaryTitle>THE LEGENDARY CATS</LegendaryTitle> */}
      </CustomLegendarySection>
    </LegendarySectionContainer>
  );
}
