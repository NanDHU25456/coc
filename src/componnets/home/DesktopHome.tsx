import { Box, IconButton, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import BackgroundLayout from "../layout/BackgroundLayout";
import React from "react";
import backgroundImage from "../../assets/images/background.png";
import merchImg from "../../assets/images/merch.png";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";

const Container = CustomStyled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
}));

const Icon = CustomStyled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: "30px",
  right: "60px",
  background: Colors.PRIMARY,
  padding: theme.spacing(1),
  height: "55px",
  width: "55px",
  borderRadius: 0,
  opacity: 0.7,
  zIndex: 999,
}));

const StorySection = CustomStyled(Box)(({ theme }) => ({
  width: "100%",
  height: "70vh",
  background: Colors.PRIMARY,
  border: "1px solid white",
  position: "relative",
  marginBottom: theme.spacing(8),
}));

const StoryContainer = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-80px",
  left: "60px",
  width: "890px",
  borderWidth: "3px",
  borderStyle: "solid",
  borderImage:
    "linear-gradient(180.13deg, #FFFFFF 0.11%, rgba(255, 255, 255, 0) 61.68%) 1  1 25%",
  padding: theme.spacing(3),
  background: Colors.PRIMARY,
}));

const StoryTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  color: Colors.SECONDARY,
  marginBottom: theme.spacing(2.2),
}));

const StoryInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  marginBottom: theme.spacing(2),
  opacity: 0.8,
}));

const CarckHosueSection = CustomStyled(Box)(({ theme }) => ({
  borderTop: `3px solid ${Colors.SECONDARY}`,
  borderBottom: `3px solid ${Colors.SECONDARY}`,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: theme.spacing(9),
}));

const CrackTitle = CustomStyled(Typography)(({ theme }) => ({
  fontSize: "3.75rem",
  fontFamily: Fonts.BebasNeue,
  background:
    "linear-gradient(87.22deg, #FF00C7 5.62%, #00FFD1 50.96%, #FFF500 98.22%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const CrackInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  textAlign: "center",
  opacity: 0.8,
  width: "78%",
  marginTop: theme.spacing(5),
}));

const VisionSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(15),
}));

const VisionTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "23.12rem",
  opacity: 0.1,
  textTransform: "uppercase",
  color: Colors.SECONDARY,
  width: "90%",
  letterSpacing: "-0.04em",
  textAlign: "center",
}));

const StoryCardsSection = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 15),
  width: "100%",
  border: "1px solid white",
  marginTop: theme.spacing(-28),
  marginBottom: 0,
}));

const StoryCardImageContainer = CustomStyled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  marginBottom: theme.spacing(27.5),
  "& img": {
    width: "100%",
    height: "100%",
  },
}));

const StoryCardTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  color: Colors.SECONDARY,
  position: "absolute",
}));

const StoryCardInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  opacity: 0.8,
}));

const StoryCardInfoContainer = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  opacity: 0.8,
  display: "flex",
  alignItems: "center",
  position: "absolute",
}));
interface DesktopHomeProps {
  toggle: () => void;
  playing: boolean;
  showOverlay: boolean;
}

export default function DesktopHome({
  toggle,
  playing,
  showOverlay,
}: DesktopHomeProps) {
  return (
    <BackgroundLayout showOverlay={showOverlay}>
      <Container>
        <Icon onClick={() => toggle()} id="cat-play">
          <img src={playing ? pause : play} alt="audio" />
        </Icon>
      </Container>
      <StorySection>
        <StoryContainer>
          <StoryTitle variant="h2">THE BEGINING</StoryTitle>
          <StoryInfo variant="h5">
            It’s 2030 or something. Doping is legal now. There’s no scratched
            faces no more. Sugar’s sold at groceries. Shrooms are sold with
            veggies. No one’s gotta wriggle down a forest in the middle of the
            night and there ain’t no more gun shots and shit. Everything’s
            pretty chill. But the cats miss being hunted by them dogs. And
            ofcourse, they miss that fucking OG prison cell. So, they’re picking
            bullshit catfights, posting their own mugshots, cat calling the cops
            and stirring whatever rat shit they can to keep the high going.
          </StoryInfo>
          <StoryInfo variant="h5">
            Bro, this litter don’t know shit about how to clean up.
          </StoryInfo>
        </StoryContainer>
      </StorySection>
      <CarckHosueSection>
        <Box marginTop={-6} style={{ background: Colors.PRIMARY }}>
          <CrackTitle>WELCOME TO THE CRACKHOUSE</CrackTitle>
        </Box>
        <CrackInfo variant="h5">
          Cats on Crack is a collection of 6,969 cat NFTs—unique digital
          collectibles living on the Solana blockchain. Your Cat doubles as your
          Club membership card, and grants access to members-only benefits.
          Future areas and perks can be unlocked by the community through
          roadmap activation.
        </CrackInfo>
      </CarckHosueSection>
      <VisionSection>
        <VisionTitle>our vision</VisionTitle>
      </VisionSection>
      <StoryCardsSection>
        <StoryCardImageContainer>
          <img src={merchImg} alt="storycard" />
          <StoryCardTitle style={{ top: "-50px", right: "360px" }} variant="h2">
            MERCH
          </StoryCardTitle>
          <StoryCardInfoContainer width="285px" top={"-80px"} right="70px">
            <StoryCardInfo variant="body1">
              Everytime a cat ain’t got no clue what he’s smoking, things start
              to get real lit, real soon. He gets a bunch of other cats. And
              they all become a pack. Now they’re walking the streets, looking
              all woke. Their sweats are cool, their caps got skulls and their
              skulls got caps. The streets are full of these cool cats wearing
              dope af shift.
            </StoryCardInfo>
          </StoryCardInfoContainer>
        </StoryCardImageContainer>
      </StoryCardsSection>
    </BackgroundLayout>
  );
}
