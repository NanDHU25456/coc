import { Box } from "@mui/material";
import React from "react";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";


const LegendarySectionContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 15),
  background: Colors.PRIMARY,
  height: "350px",
  marginTop: theme.spacing(-1.2),
}));

const CustomLegendarySection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LegendaryTitle = CustomStyled(Box)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "3.25rem",
  color: Colors.PRIMARY,
}));

export default function LegendarySection() {
  return (
    <LegendarySectionContainer>
      <CustomLegendarySection>
        <LegendaryTitle>THE LEGENDARY CATS</LegendaryTitle>
      </CustomLegendarySection>
    </LegendarySectionContainer>
  );
}
