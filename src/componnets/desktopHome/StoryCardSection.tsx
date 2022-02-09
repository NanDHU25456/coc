import { Box, BoxProps, Typography, useTheme } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";
import communityImg from "../../assets/images/community.png";
import enlightmentImg from "../../assets/images/enlightment.png";
import merchImg from "../../assets/images/merch.png";
import moneyImg from "../../assets/images/money.png";

const CustomStoryCardSection = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 15),
  width: "100%",
  // border: "1px solid white",
  marginTop: theme.spacing(-28),
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
}));

const StoryCardInfoContainer = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  opacity: 0.8,
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(2.2),
}));

type titleStringType = { [Key: string]: string };

interface StoryCard {
  image: string;
  title: string;
  titleStyle: titleStringType;
  storyCardStyle: BoxProps;
  info: string;
}

const storyCards: StoryCard[] = [
  {
    image: merchImg,
    title: "MERCH",
    titleStyle: { top: "-50px", right: "360px" },
    storyCardStyle: { width: "285px", top: "-80px", right: "70px" },
    info: `Everytime a cat ain’t got no clue what he’s smoking, things start to
            get real lit, real soon. He gets a bunch of other cats. And they all
            become a pack. Now they’re walking the streets, looking all woke.
            Their sweats are cool, their caps got skulls and their skulls got
            caps. The streets are full of these cool cats wearing dope af shift.`,
  },
  {
    image: moneyImg,
    title: "MONEY",
    titleStyle: { top: "-50px", left: "60px" },
    storyCardStyle: { width: "285px", top: "-80px", left: "160px" },
    info: `Before you know it, you’re walking with them too. And you’re dealing
            their crack and stuff. No one gives a flying fuck about money. You
            deal crack in crack and there ain’t no crack head in town who can
            mess with ya. By now, you’re money.`,
  },
  {
    image: enlightmentImg,
    title: "ENLIGHTMENT",
    titleStyle: { top: "-50px", right: "350px" },
    storyCardStyle: { width: "347px", top: "-80px", right: "0px" },
    info: `And then just casually, one someday, you go to a cafe, and end up
            licking rainbow fcking milk that a rocket no shit scientisit made
            and the sun starts to shine out of your ass. You suddenly have 3
            extra brains, a leaf hanging from inside your ear and a fire gun
            inside your eyes. You’re the fucking evolution, m’fo.`,
  },
  {
    image: communityImg,
    title: "COMMUNITY",
    titleStyle: { top: "-50px", right: "285px" },
    storyCardStyle: { width: "285px", top: "-80px", right: "0px" },
    info: `And then stuff gets real. The cats take over the world. Yeah just
            again. It’s a whole cult and shit. You get everyone to vote and all,
            decide for themselves and get the world spinnin like your head on
            meth. So, mofo, let’s trip, flip and rip the fucking world by our
            claws`,
  },
];

export default function StoryCardSection() {
  const theme = useTheme();
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
          </StoryCardInfoContainer>
        </StoryCardImageContainer>
      ))}
    </CustomStoryCardSection>
  );
}
