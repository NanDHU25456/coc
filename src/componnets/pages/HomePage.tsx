import BackgroundLayout, {
  MobileBackgroundContainer,
} from "../layout/BackgroundLayout";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { ReactComponent as CatIcon } from "../../assets/images/icons/cat.svg";
import ComingSoon from "../../assets/images/coming-soon-gif.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as GameIcon } from "../../assets/images/icons/game.svg";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";

const catAudio = require("../../assets/audio/cat-audio.mp4");

const Container = CustomStyled(Box)(({ theme }) => ({
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

const ImageContaier = CustomStyled(Box)(({ theme }) => ({
  width: "70%",
  "& img": {
    height: "100%",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const Icon = CustomStyled(IconButton)(({ theme }) => ({
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

  useEffect(() => {
    window.onload = () => {
      // eslint-disable-next-line no-restricted-globals
      var r = confirm("Would You Like To AutoPlay Music?");
      console.log("value...", r);

      if (r === true) {
        console.log("true");

        toggle();
      }
    };
  }, [toggle]);

  return (
    <Box>
      <audio ref={audioRef} id="audio" autoPlay loop>
        <source src={catAudio} type="audio/mpeg" />
      </audio>
      {isLargeScreen ? (
        <BackgroundLayout>
          <Container>
            <ImageContaier>
              <img src={ComingSoon} alt="coming-soon" />
            </ImageContaier>
            <Icon onClick={() => toggle()} id="cat-play">
              <img src={playing ? pause : play} alt="audio" />
            </Icon>
          </Container>
        </BackgroundLayout>
      ) : (
        <MobileBackgroundContainer
          overflow={"hidden !important"}
          height={"100vh !important"}
          width="100vw !important"
        >
          <Container>
            <Box
              position="absolute"
              top={"54px"}
              left={"12px"}
              display="flex"
              justifyContent={"space-between"}
              width="100%"
              paddingRight={3}
            >
              <Box>
                <Icon>
                  <CatIcon />
                </Icon>
              </Box>
              <Box>
                <Icon sx={{ marginRight: "10px" }}>
                  <GameIcon />
                </Icon>
                <Icon
                  onClick={() =>
                    window.open("https://twitter.com/catsoncrack_")
                  }
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Icon>
              </Box>
            </Box>
            <ImageContaier>
              <img src={ComingSoon} alt="coming-soon" />
            </ImageContaier>
            <Icon
              sx={{
                position: "absolute !important",
                bottom: "24px !important",
                right: "24px !important",
                background: Colors.PRIMARY,
              }}
              id="cat-play"
              onClick={() => toggle()}
            >
              <img src={playing ? pause : play} alt="audio" />
            </Icon>
          </Container>
        </MobileBackgroundContainer>
      )}
    </Box>
  );
}
