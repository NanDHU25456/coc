import { Box, IconButton, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import React, { PropsWithChildren, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullWidthPage from "./FullWidthPage";
import { ReactComponent as GameIcon } from "../../assets/images/icons/game.svg";
import catLogo from "../../assets/images/cat-logo.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Container = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  padding: theme.spacing(2.2),
  position: "relative",
  minHeight: "100vh",
  width: "100%",
  overflowX: "hidden",
}));

export const MobileBackgroundContainer = CustomStyled(Box)(({ theme }) => ({
 
  minHeight: "100vh",
  width: "100%",
  position: "relative",
}));

const SelfContainer = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  display: "flex",
  flexDirection: "row",
  marginRight: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const Icon = CustomStyled(IconButton)(({ theme }) => ({
  "& svg": {
    color: Colors.SECONDARY,
  },
}));

const Title = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.SECONDARY,
  fontFamily: Fonts.BebasNeue,
  textTransform: "uppercase",
}));

export const DiscordContainer = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  background: "rgba(0, 0, 0, 0.6)",
  padding: theme.spacing(2),
  top: "60px",
  right: 0,
  width: "300px",
}));

export const DiscordText = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Poppins,
  color: Colors.SECONDARY,
}));

interface BackgroundLayoutProps {
  showOverlay: boolean;
}

export default function BackgroundLayout({
  children,
  showOverlay,
}: PropsWithChildren<{}> & BackgroundLayoutProps) {
  const [showDiscord, setShowDiscord] = useState(false);

  return (
    <FullWidthPage>
      <Container>
        {!showOverlay && (
          <Box
            display="flex"
            justifyContent={"space-between"}
            paddingX={"60px"}
            position="absolute"
            top={"17px"}
            left={0}
            width="100%"
            zIndex={1}
          >
            <Box>
              <SelfContainer
                height={"55px"}
                sx={{ padding: "11px 20px 11px 5px" }}
              >
                <img
                  src={catLogo}
                  alt="catlogo"
                  style={{ height: "54px", width: "55px", marginRight: 5 }}
                />
                <Title variant="h2">cats on Crack</Title>
              </SelfContainer>
            </Box>
            <Box position="relative" display="flex">
              <SelfContainer height={"55px"} width="55px" padding={1}>
                <Icon onClick={() => setShowDiscord(!showDiscord)}>
                  <GameIcon />
                </Icon>
              </SelfContainer>
              <SelfContainer
                onClick={() => {
                  window.open("https://twitter.com/catsoncrack_");
                }}
                height={"55px"}
                width="55px"
                padding={1}
              >
                <Icon
                  onClick={() =>
                    window.open("https://twitter.com/catsoncrack_")
                  }
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Icon>
              </SelfContainer>
              {showDiscord && (
                <DiscordContainer>
                  <DiscordText variant="body2">
                    Discord is currently private :P Follow us on twitter and
                    turn on the push notification so you don’t miss the next
                    invite.
                  </DiscordText>
                </DiscordContainer>
              )}
            </Box>
          </Box>
        )}

        {children}
      </Container>
    </FullWidthPage>
  );
}
