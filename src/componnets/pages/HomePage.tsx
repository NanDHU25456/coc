import BackgroundLayout from "../layout/BackgroundLayout";
import { Box } from "@mui/material";
import ComingSoon from "../../assets/images/coming-soon-gif.gif";
import { CustomStyled } from "../../utils/styles/DefaultTheme";
import React from "react";

const Container = CustomStyled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
}));

const ImageContaier = CustomStyled(Box)(({ theme }) => ({
  height: "270px",
  width: "70%",
  "& img": {
    height: "100%",
    width: "100%",
  },
}));

export default function HomePage() {
  return (
    <BackgroundLayout>
      <Container>
        <ImageContaier>
          <img src={ComingSoon} alt="coming-soon" />
        </ImageContaier>
      </Container>
    </BackgroundLayout>
  );
}
