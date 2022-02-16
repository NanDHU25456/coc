import { Box, Grid, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import React, { useRef, useState } from "react";

import Efnefknf from "../../assets/images/Efnefknf.png";
import alcepon from "../../assets/images/alcepon.png";
import budbug from "../../assets/images/budbug.png";
import communityPause from "../../assets/images/community-pause.png";
import communityPlay from "../../assets/images/community-play.png";
import dashon from "../../assets/images/dashon.png";
import dev from "../../assets/images/dev.png";
import gestavo from "../../assets/images/gestavo.png";
import peblo from "../../assets/images/peblo.png";
import playOnlyOneAudio from "../../utils/helper/audio/audioHelper";
import spud from "../../assets/images/spud.png";

export const communityAudio = require("../../assets/audio/teamsong.mpeg");

const CustomTeamSection = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 22),
  background: Colors.PRIMARY,
  position: "relative",
}));

const HeroTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "3.25rem",
  color: Colors.SECONDARY,
}));

const TeamTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "2rem",
  color: Colors.PRIMARY,
  textTransform: "uppercase",
  letterSpacing: "-0.011em",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const TeamInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.PRIMARY,
  opacity: 0.4,
  letterSpacing: "0.01em",
  fontSize: "1rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const TeamSongContainer = CustomStyled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-300px",
  right: "0",
  width: "440px",
  display: "flex",
  qlignItems: "center",
  justifyContent: "flex-end",
  "& img": {
    height: "60px",
    width: "60px",
    position: "absolute",
    bottom: "-15%",
    right: 0,
    cursor: "pointer",
  },
}));

const TeamExtraInfo = CustomStyled(Typography)(({ theme }) => ({
  opacity: 0.6,
  color: Colors.YELLOW,
  fontFamily: Fonts.Cedarville,
  textAlign: "right",
  margin: 0,
  width: "45%",
}));

export const teams: TeamProps[] = [
  {
    image: peblo,
    title: "peblo",
    info: `this guy is the ceo. He knows everything..`,
  },
  {
    image: gestavo,
    title: "gestavo",
    info: `Jack of all operations. Master of one. Dumbness. `,
  },
  {
    image: budbug,
    title: "budbug",
    info: `Head of Tech. Belly of beer. `,
  },
  {
    image: spud,
    title: "Artist-Spud",
    info: `Draws characters. Drawn to characters.`,
  },
  {
    image: dashon,
    title: "Dashion1703",
    info: `Fashion the effing world, one design at a time. `,
  },
  {
    image: Efnefknf,
    title: "Efnefknf",
    info: `Discontent Creator.`,
  },
  {
    image: alcepon,
    title: "Al-Cepone",
    info: `Youngest in the team. Oldest in the game of memes.`,
  },
  {
    image: dev,
    title: "Dev-illegit",
    info: `Draws characters. Drawn to characters.`,
  },
];

interface TeamSectionProps {
  toggle: () => void;
  playing: boolean;
}

export default function TeamSection({
  playing: isMainAudioPlaying,
  toggle,
}: TeamSectionProps) {
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickImage = () => {
    try {
      if (audioRef && audioRef.current) {
        // console.log("playing..", playing);
        // if (isMainAudioPlaying) {
        //   toggle();
        // }
        playOnlyOneAudio("audio-2");
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
    <CustomTeamSection>
      <HeroTitle>crewators</HeroTitle>
      <Grid container spacing={1} style={{ width: "100%" }}>
        {teams.map((team) => (
          <Team key={team.title} {...team} />
        ))}
      </Grid>
      <TeamSongContainer>
        <TeamExtraInfo variant="body1">
          Let me begin, in the deep end, with my man{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>Kingpin </span> , let
          the storytelling seep in, pretend it’s the weekend, of the year{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}> 2030 </span>, and
          doping is legal… the end. sugar’s sold in the grocery stores, and
          nobody’s gotta wriggle down a forest no more, there’s no gun shots,
          and we’re not going to war with any dogs, they even sell shrooms in
          the store,{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>
            {" "}
            everything's chill
          </span>
          , couldn’t ask for more,
        </TeamExtraInfo>
        <img
          onClick={onClickImage}
          src={isPlaying ? communityPlay : communityPause}
          alt="pause"
        />
      </TeamSongContainer>
      <audio
        onPause={() => setIsPlaying(false)}
        ref={audioRef}
        id="audio-2"
        loop
      >
        <source src={communityAudio} type="audio/mpeg" />
      </audio>
    </CustomTeamSection>
  );
}

interface TeamProps {
  image: string;
  title: string;
  info: string;
  height?: string;
}

export const Team = ({ image, title, info, height = "100%" }: TeamProps) => {
  return (
    <Grid item md={3} xs={12}>
      <Box height={height} style={{ background: Colors.SECONDARY }} padding={3}>
        <img style={{ width: "100%" }} src={image} alt="team" />
        <TeamTitle>{title}</TeamTitle>
        <TeamInfo>{info}</TeamInfo>
      </Box>
    </Grid>
  );
};
