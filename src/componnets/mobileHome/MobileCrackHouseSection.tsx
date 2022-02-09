import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";

const CrackHouseSection = CustomStyled(Box)(({ theme }) => ({
  borderTop: `3px solid ${Colors.SECONDARY}`,
  borderBottom: `3px solid ${Colors.SECONDARY}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const CrackTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  background:
    "linear-gradient(87.22deg, #FF00C7 5.62%, #00FFD1 50.96%, #FFF500 98.22%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: theme.spacing(2),
  textAlign: "center",
}));

const CrackInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  opacity: 0.8,
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

export default function MobileCrackHouseSection() {
  return (
    <CrackHouseSection>
      <Box marginTop={-6} style={{ background: Colors.PRIMARY }}>
        <CrackTitle variant="h2">WELCOME TO THE CRACKHOUSE</CrackTitle>
      </Box>
      <CrackInfo variant="h6">
        Cats on Crack is a collection of 6,969 cat NFTs—unique digital
        collectibles living on the Solana blockchain. Your Cat doubles as your
        Club membership card, and grants access to members-only benefits.
      </CrackInfo>
      <CrackInfo variant="h6">
        Future areas and perks can be unlocked by the community through roadmap
        activation.
      </CrackInfo>
    </CrackHouseSection>
  );
}
