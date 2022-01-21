import BackgroundLayout, {
  MobileBackgroundContainer,
} from "../layout/BackgroundLayout";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { ReactComponent as CatIcon } from "../../assets/images/icons/cat.svg";
import ComingSoon from "../../assets/images/coming-soon-gif.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as GameIcon } from "../../assets/images/icons/game.svg";
import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";
import useAudio from "../../utils/helper/audio/Audio";

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
  },
}));

export default function HomePage() {
  const [playing, toggle] = useAudio(catAudio);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
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
              top={"24px"}
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
    </>
  );
}
