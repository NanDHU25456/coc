import { Box, IconButton, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import React, { PropsWithChildren } from "react";

import { ReactComponent as CatIcon } from "../../assets/images/icons/cat.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullWidthPage from "./FullWidthPage";
import { ReactComponent as GameIcon } from "../../assets/images/icons/game.svg";
import backgroundImage from "../../assets/images/background.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Container = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  padding: theme.spacing(2.2),
  position: "relative",
  height: "100vh",
  width: "100vw",
}));

export const BackgroundContainer = CustomStyled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
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

interface BackgroundLayoutProps {}

export default function BackgroundLayout({
  children,
}: PropsWithChildren<{}> & BackgroundLayoutProps) {
  return (
    <FullWidthPage>
      <Container>
        <BackgroundContainer>
          <Box
            display="flex"
            justifyContent={"space-between"}
            paddingX={"100px"}
            position="absolute"
            top={0}
            left={0}
            width="100%"
          >
            <Box>
              <SelfContainer
                height={"55px"}
                sx={{ padding: "11px 20px 11px 5px" }}
              >
                <CatIcon
                  style={{ height: "54px", width: "55px", marginRight: 5 }}
                />
                <Title variant="h2">cats on Crack</Title>
              </SelfContainer>
            </Box>
            <Box display="flex">
              <SelfContainer height={"55px"} width="55px" padding={1}>
                <Icon>
                  <GameIcon />
                </Icon>
              </SelfContainer>
              <SelfContainer height={"55px"} width="55px" padding={1}>
                <Icon>
                  <FontAwesomeIcon icon={faTwitter} />
                </Icon>
              </SelfContainer>
            </Box>
          </Box>
          {children}
        </BackgroundContainer>
      </Container>
    </FullWidthPage>
  );
}
