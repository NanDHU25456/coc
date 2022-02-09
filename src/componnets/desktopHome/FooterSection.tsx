import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { Box } from "@mui/material";
import React from "react";
import nofur from "../../assets/images/nofur.png";

const CustomFooterSection = CustomStyled(Box)(({ theme }) => ({
  background: `url(${nofur})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "80px",
  width: "80%",
}));

export default function FooterSection() {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop={`3px solid ${Colors.SECONDARY}`}
    >
      <CustomFooterSection />
    </Box>
  );
}
