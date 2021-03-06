import { Box, BoxProps, Typography, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import communityMobile from "../../assets/images/community-mobile.png";
import communityPause from "../../assets/images/community-pause.png";
import communityPlay from "../../assets/images/community-play.png";
import communityImg from "../../assets/images/community.png";
import enlightmentMobile from "../../assets/images/enlightment-mobile.png";
import enlightmentImg from "../../assets/images/enlightment.png";
import merchMobile from "../../assets/images/merch-mobile.png";
import merchImg from "../../assets/images/merch.png";
import moneyMobile from "../../assets/images/money-mobile.png";
import moneyImg from "../../assets/images/money.png";
import playOnlyOneAudio from "../../utils/helper/audio/audioHelper";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";


export const communityAudio = require("../../assets/audio/community-audio.mpeg");

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
  top: "-270px",
  left: "8%",
  width: "40%",
  height: "300px",
  zIndex: 1,
  display: "flex",
  "& img": {
    height: "60px",
    width: "60px",
    position: "relative",
    top: "250px",
    left: "-27%",
    zindex: 2,
    cursor: "pointer",
  },
}));

const StoryExtraInfo = CustomStyled(Typography)(({ theme }) => ({
  opacity: 0.6,
  color: Colors.YELLOW,
  fontFamily: Fonts.Cedarville,
  letterSpacing: "-0.011em",
  width: "60%",
}));

type titleStringType = { [Key: string]: string };

interface StoryCard {
  image: string;
  mobileImage: string;
  title: string;
  title2?: string;
  titleStyle: titleStringType;
  titleStyle2?: titleStringType;
  storyCardStyle: BoxProps;
  info: string;
  newLine?: string;
  extra?: boolean;
}

export const storyCards: StoryCard[] = [
  {
    image: merchImg,
    mobileImage: merchMobile,
    title: "Merchanfuckindize",
    titleStyle: { top: "-60px", right: "430px" },
    storyCardStyle: { width: "285px", top: "-100px", right: "140px" },
    info: `Everytime a cat ain???t got no clue what he???s smoking, things start to get real lit, real soon. He gets a bunch of other cats. And they all become a pack.`,
    newLine: `Now they???re walking the streets, looking all woke. Their sweats are cool, their caps got skulls and their skulls got caps. The streets are full of these cool cats wearing dope AF shit.`,
  }, {
    image: moneyImg,
    mobileImage: moneyMobile,
    title: "Smokin???",
    title2: "Money",
    titleStyle2: { top: "20px", left: "120px" },
    titleStyle: { top: "-30px", left: "120px" },
    storyCardStyle: { width: "285px", top: "-120px", left: "240px" },
    info: `Before you know it, you???re walking with them too. 
        And you???re dealing their crack and stuff. 
        No one gives a flying fuck about money. 
        You deal $CRECK in $CRECK and there ain???t no crack head
        in town who can mess with ya. By now, YOU???RE MONEY!`,
  },
  {
    image: enlightmentImg,
    mobileImage: enlightmentMobile,
    title: "enlightenment",
    titleStyle: { top: "-20px", right: "460px" },
    storyCardStyle: { width: "400px", top: "-120px", right: "60px" },
    info: `And then just casually, one someday, you go to a cafe, and end up
            licking rainbow fcking milk that a rocket no shit scientisit made
            and the sun starts to shine out of your ass. You suddenly have 3
            extra brains, a leaf hanging from inside your ear and a fire gun
            inside your eyes. You???re the fucking evolution, m???fo.`,
  },
  {
    image: communityImg,
    mobileImage: communityMobile,
    title: "crew af",
    titleStyle: { top: "5px", right: "360px" },
    storyCardStyle: { width: "285px", top: "-120px", right: "60px" },
    info: `And then stuff gets real. The cats take over the world. Yeah just
            again. It???s a whole cult and shit. You get everyone to vote and all,
            decide for themselves and get the world spinnin like your head on
            meth.`,
    newLine: `So, mofo, let???s trip, flip and rip the fucking world by our
            claws`,
    extra: true,
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
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickImage = () => {
    try {
      if (audioRef && audioRef.current) {
        // console.log("playing..", playing);
        // if (isMainAudioPlaying) {
        //   toggle();
        // }
        playOnlyOneAudio("audio-1");
        if (!isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.log("error..", error);
    }
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
          {storyCard.title2 && (
            <StoryCardTitle style={storyCard.titleStyle2} variant="h2">
              {storyCard.title2}
            </StoryCardTitle>
          )}
          <StoryCardInfoContainer {...storyCard.storyCardStyle}>
            <StoryCardInfo variant="body1">{storyCard.info}</StoryCardInfo>
            {storyCard.newLine && (
              <StoryCardInfo variant="body1">{storyCard.newLine}</StoryCardInfo>
            )}
          </StoryCardInfoContainer>
          {storyCard.extra && (
            <StoryCardExtraContainer>
              <StoryExtraInfo variant="body1">
                catsoncrackoncra <br /> high on pussycat <br /> she msged{" "}
                <span style={{ color: Colors.STYLISH_GREEN }}>GM</span>  <br />{" "}
                <span style={{ textDecoration: "underline" }}>
                  i dnt msg back
                </span> <br />{" "}
                meditate on{" "}
                <span style={{ color: Colors.STYLISH_GREEN }}>deez lines</span>{" "}
                like I???m a priest  <br /> blowin joints like in{" "}
                <span style={{ color: Colors.STYLISH_GREEN }}>UFC</span> <br /> she wnt{" "}
                <span style={{ color: Colors.STYLISH_GREEN }}>69</span> i wnt{" "}
                <span style={{ color: Colors.STYLISH_GREEN }}>420</span> <br />  she
                wanna catch a{" "}
                <span style={{ color: Colors.STYLISH_GREEN }}>vibe</span>,{" "}
                <span style={{ textDecoration: "underline" }}>
                  girl i got plenty
                </span>{" "} <br />
                catsoncra make me feel num{" "} <br />
                <span style={{ color: Colors.STYLISH_GREEN }}>jpegs</span> i be
                dealin m <br /> take my{" "}
                <span style={{ color: Colors.STYLISH_GREEN }}>sol</span> n spare
                me <br /> I got{" "}
                <span style={{ color: Colors.STYLISH_GREEN }}>degen</span>{" "}
                energy
              </StoryExtraInfo>
              <img
                onClick={onClickImage}
                src={isPlaying ? communityPlay : communityPause}
                alt="pause"
              />
            </StoryCardExtraContainer>
          )}
        </StoryCardImageContainer>
      ))}
      <audio
        onPause={() => setIsPlaying(false)}
        ref={audioRef}
        id="audio-1"
        loop
      >
        <source src={communityAudio} type="audio/mpeg" />
      </audio>
    </CustomStoryCardSection>
  );
}
