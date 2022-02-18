import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";
import nofur from "../../assets/images/nofur.png";

const CustomFooterSection = CustomStyled(Box)(({ theme }) => ({
  height: "auto",
  width: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    height: "100%",
    width: "100%",
  },
}));

const FooterCreditSection = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: "300px",
  [theme.breakpoints.down("md")]: {
    right: "50px",
    maxWidth: "55%",
  },
}));

const CreditTitle = CustomStyled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontFamily: Fonts.Cedarville,
  color: Colors.SECONDARY,
  textAlign: "right",
  marginBottom: theme.spacing(0.5),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
}));

export default function FooterSection() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={"70px"}
      overflow="hidden"
      paddingTop={isLargeScreen ? 10 : 0}
      position="relative"
    >
      <CustomFooterSection>
        <img src={nofur} alt="nofur" />
      </CustomFooterSection>
      <FooterCreditSection>
        <CreditTitle>music credits:</CreditTitle>
        <Box
          display="flex"
          justifyContent={isLargeScreen ? "space-around" : "space-between"}
        >
          <CreditTitle
            onClick={() => {
              window.open("https://twitter.com/thisisneer");
            }}
            style={{ color: Colors.YELLOW, cursor: "pointer" }}
          >
            @thisisneer
          </CreditTitle>
          <CreditTitle
            onClick={() => {
              window.open("https://twitter.com/notonft");
            }}
            style={{ color: Colors.YELLOW, cursor: "pointer" }}
          >
            @notonft
          </CreditTitle>
          <CreditTitle
            onClick={() => {
              window.open("https://twitter.com/tunelunatic");
            }}
            style={{ color: Colors.YELLOW, cursor: "pointer" }}
          >
            @tunelunatic
          </CreditTitle>
        </Box>
      </FooterCreditSection>
    </Box>
  );
}
