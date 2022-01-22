import { Container, Icon, ImageContaier } from "../pages/HomePage";

import { Box } from "@mui/material";
import { ReactComponent as CatIcon } from "../../assets/images/icons/cat.svg";
import { Colors } from "../../utils/styles/DefaultTheme";
import ComingSoon from "../../assets/images/coming-soon-gif.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as GameIcon } from "../../assets/images/icons/game.svg";
import { MobileBackgroundContainer } from "../layout/BackgroundLayout";
import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";

interface MobileHomeProps {
  toggle: () => void;
  playing: boolean;
  showOverlay: boolean;
}

export default function MobileHome({
  toggle,
  playing,
  showOverlay,
}: MobileHomeProps) {
  return (
    <MobileBackgroundContainer
      overflow={"hidden !important"}
      height={"100vh !important"}
      width="100vw !important"
    >
      <Container>
        {!showOverlay && (
          <>
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
          </>
        )}

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
  );
}
