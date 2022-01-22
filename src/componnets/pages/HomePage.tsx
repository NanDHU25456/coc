import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";
import React, { useCallback, useRef, useState } from "react";

import DesktopHome from "../home/DesktopHome";
import HomeOverlay from "../home/HomeOverlay";
import MobileHome from "../home/MobileHome";

export const catAudio = require("../../assets/audio/cat-audio.mp4");

export const Container = CustomStyled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
}));

export const ImageContaier = CustomStyled(Box)(({ theme }) => ({
  width: "70%",
  "& img": {
    height: "100%",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const Icon = CustomStyled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: "40px",
  right: "80px",
  background: Colors.PRIMARY,
  padding: theme.spacing(1),
  height: "55px",
  width: "55px",
  borderRadius: 0,
  [theme.breakpoints.down("md")]: {
    position: "relative",
    right: 0,
    "& svg": {
      color: Colors.SECONDARY,
    },
  },
}));

export default function HomePage() {
  const [playing, setPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const audioRef = useRef<any>(null);

  const toggle = useCallback(() => {
    try {
      if (audioRef && audioRef.current) {
        // console.log("playing..", playing);
        if (!playing) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        setPlaying(!playing);
      }
    } catch (error) {
      console.log("error..", error);
    }
  }, [playing]);

  return (
    <Box>
      <audio ref={audioRef} id="audio" autoPlay loop>
        <source src={catAudio} type="audio/mpeg" />
      </audio>
      {showOverlay && (
        <HomeOverlay
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          toggle={toggle}
        />
      )}
      {isLargeScreen ? (
        <DesktopHome toggle={toggle} playing={playing} />
      ) : (
        <MobileHome toggle={toggle} playing={playing} />
      )}
    </Box>
  );
}
