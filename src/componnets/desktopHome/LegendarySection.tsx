import { Box } from "@mui/material";
import React from "react";
import legendary from "../../assets/images/legendary.png";
import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";


const LegendarySectionContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  background: Colors.PRIMARY,
  height: "350px",
  marginTop: theme.spacing(-1),
  width: "103%",
}));

const CustomLegendarySection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  marginTop: "-1px",
  width: "100%",
  height: "auto",
  display: "flex",
  "& img": {
    height: "100%",
    width: "100%",
  },
}));

export default function LegendarySection() {
  return (
    <LegendarySectionContainer>
      <CustomLegendarySection>
        <img src={legendary} alt="legendary" />
      </CustomLegendarySection>
    </LegendarySectionContainer>
  );
}
