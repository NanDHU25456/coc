import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import React, { useState } from "react";

import BackgroundLayout from "../layout/BackgroundLayout";
import backgroundImage from "../../assets/images/background.png";
import communityImg from "../../assets/images/community.png";
import eImg from "../../assets/images/e.png";
import enlightmentImg from "../../assets/images/enlightment.png";
import featuredArtist from "../../assets/images/featuredArtist.png";
import mImg from "../../assets/images/m.png";
import merchImg from "../../assets/images/merch.png";
import moneyImg from "../../assets/images/money.png";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";
import questionImg from "../../assets/images/question.png";
import rImg from "../../assets/images/r.png";
import swimmingImg from "../../assets/images/swimming.png";
import xImg from "../../assets/images/x.png";

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
  height: "520px",
  background: Colors.PRIMARY,
  border: "1px solid white",
  position: "relative",
  marginBottom: theme.spacing(8),
}));

const StoryContainer = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-80px",
  left: "90px",
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
  marginTop: theme.spacing(10),
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
  padding: theme.spacing(2.2),
}));

const LegendarySectionContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 15),
  background: Colors.PRIMARY,
  height: "350px",
  marginTop: theme.spacing(-1.2),
}));

const LegendarySection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LegendaryTitle = CustomStyled(Box)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "3.25rem",
  color: Colors.PRIMARY,
}));

const RemixSection = CustomStyled(Box)(({ theme }) => ({
  height: "300px",
  width: "98.8vw",
  margin: theme.spacing(0, -2.2),
  marginTop: theme.spacing(-16),
  border: "1px solid brown",
  background: Colors.SECONDARY,
  padding: "2px 0px",
  display: "flex",
  flexDirection: "column",
}));

const RemixImageContainer = CustomStyled(Box)(({ theme }) => ({
  height: "60%",
  display: "flex",
  flexDirection: "row",
  "& img": {
    flex: 1,
    flexBasis: "220px",
    width: "220px",
    height: "100%",
  },
}));

const RemixGradientContainer = CustomStyled(Box)(({ theme }) => ({
  height: "20px",
  width: "100%",
  background:
    "linear-gradient(87.22deg, #FF00C7 5.62%, #00FFD1 50.96%, #FFF500 98.22%)",
}));

const SwimmingSectionContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 15),
  background: Colors.PRIMARY,
  height: "400px",
}));

const SwimmingSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  height: "100%",
  width: "100%",
  display: "flex",
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
  const [showQuestion, setShowQuestion] = useState(true);
  const theme = useTheme();

  const questionsImages = new Array(5).fill(questionImg);
  const remixImages = [rImg, eImg, mImg, questionImg, xImg];
  const imageList = showQuestion ? questionsImages : remixImages;

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
        <StoryCardImageContainer>
          <img src={moneyImg} alt="money" />
          <StoryCardTitle style={{ top: "-50px", left: "60px" }} variant="h2">
            MONEY
          </StoryCardTitle>
          <StoryCardInfoContainer width="285px" top="-80px" left="160px">
            <StoryCardInfo variant="body1">
              Before you know it, you’re walking with them too. And you’re
              dealing their crack and stuff. No one gives a flying fuck about
              money. You deal crack in crack and there ain’t no crack head in
              town who can mess with ya. By now, you’re money.
            </StoryCardInfo>
          </StoryCardInfoContainer>
        </StoryCardImageContainer>
        <StoryCardImageContainer>
          <img src={enlightmentImg} alt="enlightment" />
          <StoryCardTitle style={{ top: "-50px", right: "350px" }} variant="h2">
            ENLIGHTMENT
          </StoryCardTitle>
          <StoryCardInfoContainer width="347px" top="-80px" right="0px">
            <StoryCardInfo variant="body1">
              And then just casually, one someday, you go to a cafe, and end up
              licking rainbow fcking milk that a rocket no shit scientisit made
              and the sun starts to shine out of your ass. You suddenly have 3
              extra brains, a leaf hanging from inside your ear and a fire gun
              inside your eyes. You’re the fucking evolution, m’fo.
            </StoryCardInfo>
          </StoryCardInfoContainer>
        </StoryCardImageContainer>
        <StoryCardImageContainer marginBottom={"0px !important"}>
          <img src={communityImg} alt="community" />
          <StoryCardTitle style={{ top: "-50px", right: "285px" }} variant="h2">
            COMMUNITY
          </StoryCardTitle>
          <StoryCardInfoContainer width="285px" top="-80px" right="0px">
            <StoryCardInfo variant="body1">
              And then stuff gets real. The cats take over the world. Yeah just
              again. It’s a whole cult and shit. You get everyone to vote and
              all, decide for themselves and get the world spinnin like your
              head on meth. So, mofo, let’s trip, flip and rip the fucking world
              by our claws
            </StoryCardInfo>
          </StoryCardInfoContainer>
        </StoryCardImageContainer>
      </StoryCardsSection>
      <LegendarySectionContainer>
        <LegendarySection>
          <LegendaryTitle>THE LEGENDARY CATS</LegendaryTitle>
        </LegendarySection>
      </LegendarySectionContainer>
      <RemixSection>
        <RemixImageContainer onMouseEnter={() => setShowQuestion(false)}>
          {imageList.map((val, i) => (
            <img src={val} alt="remix" key={i} />
          ))}
        </RemixImageContainer>
        <RemixGradientContainer />
        <Box height="35%" style={{ border: "1px solid red" }}>
          <Box
            height="40px"
            style={{
              background: `url(${featuredArtist})`,
              backgroundSize: "cover",
              backgroundRepeat: "repeat-x",
            }}
          />
        </Box>
      </RemixSection>
      <SwimmingSectionContainer>
        <SwimmingSection>
          <Box width="50%" padding={theme.spacing(12, 0, 0, 12)}>
            <Typography
              style={{ opacity: 0.8, textAlign: "left" }}
              variant="body1"
            >
              A bunch of art people ran into the cats when they were fucking
              around on the streets. The artists bought some stuff from the
              cats, and decided to smoke it with them. Turns out, it was the
              best trip of the art people’s lives. They’re so bat shit crazy
              about the cats now that they decided to give them cats something.
              Well, it takes no mf genius to guess they would paint pictures of
              the cats. But since they’re all high, these pictures are gonna be
              wonky af version of the artists’ minds.
            </Typography>
          </Box>
          <Box width="50%">
            <img
              src={swimmingImg}
              alt="swimming"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </SwimmingSection>
      </SwimmingSectionContainer>
    </BackgroundLayout>
  );
}
