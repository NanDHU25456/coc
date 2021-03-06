import { Box, Typography } from "@mui/material";
import {
  Colors,
  CustomStyled,
  Fonts,
  Transition,
} from "../../utils/styles/DefaultTheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

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
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up("xl")]: {
    width: "50%",
  },
}));

const CracDescContainer = CustomStyled(Box)(({ theme }) => ({
  display: "flex",
  width: "58%",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("xl")]: {
    width: "50%",
  },
  "& svg": {
    width: "12px",
    height: "12px",
    fontSize: "12px",
    color: Colors.SECONDARY,
    margin: theme.spacing(0, 3),
  },
}));

const CrackDesc = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  textAlign: "center",
}));

export default function CrackHouseSection() {
  return (
    <Box width="100%" maxWidth="1920px" paddingX={0} marginBottom={2}>
      <CarckHosueSection>
        <Box marginTop={-6} style={{ background: Colors.PRIMARY }}>
          <CrackTitle>WELCOME TO THE CRACKHOUSE</CrackTitle>
        </Box>
        <CrackInfo variant="h5">
          Cats on Crack is a collection of 6,969 NFTs - dope digital
          collectibles chilling on the Solana blockchain. If you???re part of the
          crew, you get to hang out on SOL like a fkin lion. All benefits, perks
          and dope shit will be unlocked as we slowly venture into the Cat
          world. So, watch out!
        </CrackInfo>
        <CracDescContainer>
          <CrackDesc variant="h5">
            {" "}
            <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>SUPPLY: </span>
            6,969
          </CrackDesc>
          <FontAwesomeIcon color={Colors.SECONDARY} icon={faCircle} />
          <CrackDesc variant="h5">
            {" "}
            <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>PRICE: </span>
            TBD
          </CrackDesc>
          <FontAwesomeIcon color={Colors.SECONDARY} icon={faCircle} />
          <CrackDesc variant="h5">
            {" "}
            <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              MINT DATE:
            </span>{" "}
            10/3/2022
          </CrackDesc>
        </CracDescContainer>
      </CarckHosueSection>
    </Box>
  );
}
