import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

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

export default function FooterSection() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="70px"
      borderTop={`3px solid ${Colors.SECONDARY}`}
      overflow="hidden"
      paddingTop={isLargeScreen ? 10 : 0}
    >
      <CustomFooterSection>
        <img src={nofur} alt="nofur" />
      </CustomFooterSection>
    </Box>
  );
}
