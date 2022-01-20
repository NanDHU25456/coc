import { Box, IconButton, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import React, { PropsWithChildren } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullWidthPage from "./FullWidthPage";
import { ReactComponent as GameIcon } from "../../assets/images/icons/game.svg";
import backgroundImage from "../../assets/images/background.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Container = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  padding: theme.spacing(7, 3, 3, 3),
}));

const BackgroundContainer = CustomStyled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "90vh",
}));

const SelfContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(2.1),
  background: Colors.PRIMARY,
  marginRight: theme.spacing(3),
  height: "fit-content",
}));

const Title = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.SECONDARY,
  textTransform: "uppercase",
  fontFamily: Fonts.BebasNeue,
}));

const Icon = CustomStyled(IconButton)(({ theme }) => ({
  "& svg": {
    color: Colors.SECONDARY,
    height: "25px",
    width: "25px",
  },
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
            paddingX={"100px"}
            width="100%"
            marginTop="-20px"
            display="flex"
            justifyContent={"space-between"}
          >
            <Box>
              <SelfContainer>
                <Title variant="h2">Cats on crack</Title>
              </SelfContainer>
            </Box>
            <Box display="flex" flexDirection={"row"}>
              <SelfContainer>
                <Icon>
                  <GameIcon />
                </Icon>
              </SelfContainer>
              <SelfContainer>
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
