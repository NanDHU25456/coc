import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";
import React, { useCallback, useRef, useState } from "react";

import DesktopHome from "../home/DesktopHome";
import HomeOverlay from "../home/HomeOverlay";
import MobileHome from "../home/MobileHome";

export const catAudio = require("../../assets/audio/cat-audio.mp4");

export const Icon = CustomStyled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
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
    "& img": {
      color: Colors.SECONDARY,
      height: "100%",
      width: "100%",
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
    <Box height="100vh" overflow={showOverlay ? "hidden" : "auto"}>
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
        <DesktopHome
          toggle={toggle}
          showOverlay={showOverlay}
          playing={playing}
        />
      ) : (
        <MobileHome
          toggle={toggle}
          showOverlay={showOverlay}
          playing={playing}
        />
      )}
    </Box>
  );
}
