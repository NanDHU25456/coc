import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import React, { PropsWithChildren } from "react";

import { ReactComponent as CatIcon } from "../../assets/images/icons/cat.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullWidthPage from "./FullWidthPage";
import { ReactComponent as GameIcon } from "../../assets/images/icons/game.svg";
import backgroundImage from "../../assets/images/background.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Container = CustomStyled(Box)(({ theme }) => ({
  background: Colors.blackBackground,
  padding: theme.spacing(7, 3, 3, 3),
  position: "relative",
}));

const BackgroundContainer = CustomStyled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "86vh",
}));

const SelfContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(2.1),
  background: Colors.PRIMARY,
  marginRight: theme.spacing(3),
  height: "fit-content",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

const Title = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.SECONDARY,
  textTransform: "uppercase",
  fontFamily: Fonts.BebasNeue,
}));

const Icon = CustomStyled(IconButton)(({ theme }) => ({
  "& svg": {
    color: Colors.SECONDARY,
    height: "28px",
    width: "28px",
  },
}));

interface BackgroundLayoutProps {}

export default function BackgroundLayout({
  children,
}: PropsWithChildren<{}> & BackgroundLayoutProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <FullWidthPage>
      <Container>
        <BackgroundContainer>
          {isLargeScreen && (
            <Box
              paddingX={"100px"}
              width="100%"
              display="flex"
              justifyContent={"space-between"}
              position={"absolute"}
              top={20}
              left={0}
              zIndex={1}
            >
              <Box>
                <SelfContainer>
                  <CatIcon />
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
          )}
          {children}
        </BackgroundContainer>
      </Container>
    </FullWidthPage>
  );
}
