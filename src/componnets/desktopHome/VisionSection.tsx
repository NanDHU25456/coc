import { Box, Typography } from "@mui/material";
import React from "react";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";


const CustomVisionSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(10),
}));

const VisionTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "23.12rem",
  opacity: 0.1,
  textTransform: "uppercase",
  color: Colors.SECONDARY,
  width: "90%",
  letterSpacing: "-0.04em",
  textAlign: "center",
}));

export default function VisionSection() {
  return (
    <CustomVisionSection>
      <VisionTitle>our vision</VisionTitle>
    </CustomVisionSection>
  );
}
