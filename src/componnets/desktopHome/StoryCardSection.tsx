import { Box, BoxProps, Typography, useTheme } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import React, { useState } from "react";

import communityImg from "../../assets/images/community.png";
import communityMobile from "../../assets/images/community-mobile.png";
import communityPause from "../../assets/images/community-pause.png";
import communityPlay from "../../assets/images/community-play.png";
import enlightmentImg from "../../assets/images/enlightment.png";
import enlightmentMobile from "../../assets/images/enlightment-mobile.png";
import merchImg from "../../assets/images/merch.png";
import merchMobile from "../../assets/images/merch-mobile.png";
import moneyImg from "../../assets/images/money.png";
import moneyMobile from "../../assets/images/money-mobile.png";

const CustomStoryCardSection = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  width: "115%",
  // border: "1px solid white",
  marginTop: theme.spacing(-10),
  marginBottom: 0,
}));

const StoryCardImageContainer = CustomStyled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
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
  marginBottom: theme.spacing(1),
}));

const StoryCardInfoContainer = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  opacity: 0.8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(2.2),
}));

const StoryCardExtraContainer = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-230px",
  left: "6%",
  width: "400px",
  height: "300px",
  zIndex: 1,
  display: "flex",
  "& img": {
    height: "60px",
    width: "60px",
    position: "absolute",
    top: "220px",
    left: "55%",
    zindex: 2,
    cursor: "pointer",
  },
}));

const StoryExtraInfo = CustomStyled(Typography)(({ theme }) => ({
  opacity: 0.4,
  color: Colors.SECONDARY,
  fontFamily: Fonts.Balsamic,
  width: "60%",
  // zIndex: 9,
}));

type titleStringType = { [Key: string]: string };

interface StoryCard {
  image: string;
  mobileImage: string;
  title: string;
  titleStyle: titleStringType;
  storyCardStyle: BoxProps;
  info: string;
  newLine?: string;
  extra?: string;
}

export const storyCards: StoryCard[] = [
  {
    image: merchImg,
    mobileImage: merchMobile,
    title: "MERCH",
    titleStyle: { top: "-60px", right: "430px" },
    storyCardStyle: { width: "285px", top: "-100px", right: "140px" },
    info: `Everytime a cat ain’t got no clue what he’s smoking, things start to
            get real lit, real soon. He gets a bunch of other cats. And they all
            become a pack.`,
    newLine: `Now they’re walking the streets, looking all woke.
            Their sweats are cool, their caps got skulls and their skulls got
            caps. The streets are full of these cool cats wearing dope af shift.`,
  },
  {
    image: moneyImg,
    mobileImage: moneyMobile,
    title: "MONEY",
    titleStyle: { top: "-60px", left: "100px" },
    storyCardStyle: { width: "285px", top: "-120px", left: "210px" },
    info: `Before you know it, you’re walking with them too. And you’re dealing
            their crack and stuff. No one gives a flying fuck about money. You
            deal crack in crack and there ain’t no crack head in town who can
            mess with ya. By now, you’re money.`,
  },
  {
    image: enlightmentImg,
    mobileImage: enlightmentMobile,
    title: "ENLIGHTMENT",
    titleStyle: { top: "-60px", right: "440px" },
    storyCardStyle: { width: "400px", top: "-120px", right: "20px" },
    info: `And then just casually, one someday, you go to a cafe, and end up
            licking rainbow fcking milk that a rocket no shit scientisit made
            and the sun starts to shine out of your ass. You suddenly have 3
            extra brains, a leaf hanging from inside your ear and a fire gun
            inside your eyes. You’re the fucking evolution, m’fo.`,
  },
  {
    image: communityImg,
    mobileImage: communityMobile,
    title: "COMMUNITY",
    titleStyle: { top: "-60px", right: "340px" },
    storyCardStyle: { width: "285px", top: "-120px", right: "40px" },
    info: `And then stuff gets real. The cats take over the world. Yeah just
            again. It’s a whole cult and shit. You get everyone to vote and all,
            decide for themselves and get the world spinnin like your head on
            meth.`,
    newLine: `So, mofo, let’s trip, flip and rip the fucking world by our
            claws`,
    extra: `catsoncrackoncra high on pussycat she msged GM i dnt msg back meditate on deez lines like I’m a priest blowin joints like in UFC she wnt 69 i wnt 420 she wanna catch a vibe, girl i got plenty catsoncra make me feel num jpegs i be dealin m take my sol n spare me I got degen energy`,
  },
];

interface StoryCardProps {
  toggle: () => void;
  playing: boolean;
}

export default function StoryCardSection({
  toggle,
  playing: isMainAudioPlaying,
}: StoryCardProps) {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickImage = () => {
    if (isMainAudioPlaying) {
      toggle();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <CustomStoryCardSection>
      {storyCards.map((storyCard, i) => (
        <StoryCardImageContainer
          marginBottom={i === storyCards.length - 1 ? 0 : theme.spacing(27.5)}
          key={storyCard.title}
        >
          <img src={storyCard.image} alt="storycard" />
          <StoryCardTitle style={storyCard.titleStyle} variant="h2">
            {storyCard.title}
          </StoryCardTitle>
          <StoryCardInfoContainer {...storyCard.storyCardStyle}>
            <StoryCardInfo variant="body1">{storyCard.info}</StoryCardInfo>
            {storyCard.newLine && (
              <StoryCardInfo variant="body1">{storyCard.newLine}</StoryCardInfo>
            )}
          </StoryCardInfoContainer>
          {storyCard.extra && (
            <StoryCardExtraContainer>
              <StoryExtraInfo variant="body1">{storyCard.extra}</StoryExtraInfo>
              <img
                onClick={onClickImage}
                src={isPlaying ? communityPlay : communityPause}
                alt="pause"
              />
            </StoryCardExtraContainer>
          )}
        </StoryCardImageContainer>
      ))}
    </CustomStoryCardSection>
  );
}
