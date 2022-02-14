import { Box, Typography } from "@mui/material";
import {
  Colors,
  CustomStyled,
  Fonts,
  Transition,
} from "../../utils/styles/DefaultTheme";

import React from "react";

const CarckHosueSection = CustomStyled(Box)(({ theme }) => ({
  borderTop: `3px solid ${Colors.SECONDARY}`,
  borderBottom: `3px solid ${Colors.SECONDARY}`,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: theme.spacing(9),
  background: "#0F0F0F",
  width: "100%",
}));

const CrackTitle = CustomStyled(Typography)(({ theme }) => ({
  fontSize: "3.75rem",
  fontFamily: Fonts.BebasNeue,
  background:
    "linear-gradient(87.22deg, #FF00C7 5.62%, #00FFD1 50.96%, #FFF500 98.22%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: Transition.Default,
  animation: "gradient 5s ease infinite",
  backgroundSize: "400% 400%",

  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}));

const CrackInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  textAlign: "center",
  opacity: 0.8,
  width: "60%",
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("xl")]: {
    width: "50%",
  },
}));

export default function CrackHouseSection() {
  return (
    <Box width="100%" maxWidth="1920px" paddingX={0} marginBottom={2}>
      <CarckHosueSection>
        <Box marginTop={-6} style={{ background: Colors.PRIMARY }}>
          <CrackTitle>WELCOME TO THE CRACKHOUSE</CrackTitle>
        </Box>
        <CrackInfo variant="h5">
          Cats on Crack is a collection of 6,969 cat NFTs—unique digital
          collectibles living on the Solana blockchain. Your Cat doubles as your
          Club membership card, and grants access to members-only benefits.{" "}
          <br />
          Future areas and perks can be unlocked by the community through
          roadmap activation.
        </CrackInfo>
      </CarckHosueSection>
    </Box>
  );
}
