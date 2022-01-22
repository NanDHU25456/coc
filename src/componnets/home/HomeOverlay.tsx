import { Box, Fade, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";

const OverlayText = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.SECONDARY,
  fontFamily: Fonts.BebasNeue,
  textTransform: "uppercase",
}));

interface HomeOverlayProps {
  showOverlay: boolean;
  setShowOverlay: (val: boolean) => void;
  toggle: () => void;
}

export default function HomeOverlay({
  showOverlay,
  setShowOverlay,
  toggle,
}: HomeOverlayProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Fade in={showOverlay}>
      <Box
        position={"fixed"}
        top={0}
        left={0}
        width="100%"
        height="100vh"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: Colors.PRIMARY,
          zIndex: 100,
          opacity: 0.9,
          cursor: "pointer",
        }}
        onClick={() => {
          toggle();
          setShowOverlay(false);
        }}
      >
        <OverlayText variant={isLargeScreen ? "h2" : "h3"}>
          💥 enter the crack house! 💥
        </OverlayText>
      </Box>
    </Fade>
  );
}
