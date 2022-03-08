import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CrackHouseSection = CustomStyled(Box)(({ theme }) => ({
  borderTop: `3px solid ${Colors.SECONDARY}`,
  borderBottom: `3px solid ${Colors.SECONDARY}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4, 2, 4, 2),
  "& svg": {
    color: Colors.SECONDARY,
    height: "10px",
    width: "10px",
    fontSize: "10px",
    margin: theme.spacing(5, 0),
  },
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
  textAlign: "justify",
  marginBottom: theme.spacing(2),
}));

const CrackDesc = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
}));

export default function MobileCrackHouseSection() {
  return (
    <CrackHouseSection>
      <Box marginTop={-6} style={{ background: Colors.PRIMARY }}>
        <CrackTitle variant="h2">WELCOME TO THE CRACKHOUSE</CrackTitle>
      </Box>
      <CrackInfo variant="h6">
        Cats on Crack is a collection of 6,969 NFTs - dope digital collectibles
        chilling on the Solana blockchain. If you’re part of the crew, you get
        to hang out on SOL like a fkin lion. All benefits, perks and dope shit
        will be unlocked as we slowly venture into the Cat world. So, watch out!
      </CrackInfo>
      <FontAwesomeIcon icon={faCircle} />
      <Box display={"flex"}>
        <CrackDesc variant="h6" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
          SUPPLY :{" "}
        </CrackDesc>
        <CrackDesc style={{ marginLeft: "8px" }} variant="h6">
          6,969
        </CrackDesc>
      </Box>
      <Box display={"flex"}>
        <CrackDesc variant="h6" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
          PRICE :{" "}
        </CrackDesc>
        <CrackDesc style={{ marginLeft: "8px" }} variant="h6">
          TBD
        </CrackDesc>
      </Box>
      <Box display={"flex"}>
        <CrackDesc variant="h6" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
          MINT DATE :{" "}
        </CrackDesc>
        <CrackDesc style={{ marginLeft: "8px" }} variant="h6">
          10/3/2022
        </CrackDesc>
      </Box>
    </CrackHouseSection>
  );
}
