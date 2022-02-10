import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { Box } from "@mui/material";
import React from "react";
import ourVision from "../../assets/images/our-vision.png";

const VisionContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 15),
  background: Colors.PRIMARY,
}));

const CustomVisionSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "280px",
  marginTop: theme.spacing(10),
  "& img": {
    width: "100%",
    height: "100%",
  },
}));

// const VisionTitle = CustomStyled(Typography)(({ theme }) => ({
//   fontFamily: Fonts.BebasNeue,
//   fontSize: "23.12rem",
//   opacity: 0.1,
//   textTransform: "uppercase",
//   color: Colors.SECONDARY,
//   width: "90%",
//   letterSpacing: "-0.04em",
//   textAlign: "center",
// }));

export default function VisionSection() {
  return (
    <VisionContainer>
      <CustomVisionSection>
        <img src={ourVision} alt="vision" />
        {/* <VisionTitle>our vision</VisionTitle> */}
      </CustomVisionSection>
    </VisionContainer>
  );
}
