import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { Box } from "@mui/material";
import React from "react";
import ourVision from "../../assets/images/our-vision.png";

const VisionContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  background: Colors.PRIMARY,
  width: "100%",
}));

const CustomVisionSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  marginTop: theme.spacing(10),
  "& img": {
    width: "100%",
    height: "100%",
  },
}));

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
