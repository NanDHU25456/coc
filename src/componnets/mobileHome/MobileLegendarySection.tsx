import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import communityPause from "../../assets/images/community-pause.png";
import communityPlay from "../../assets/images/community-play.png";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import { remixImages } from "../home/DesktopHome";


export const communityAudio = require("../../assets/audio/community-audio.mpeg");

const LegendarySection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

const LegendaryTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "2.25rem",
  color: Colors.SECONDARY,
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

const LegendaryInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.PRIMARY,
  opacity: 0.8,
  textAlign: "center",
  marginTop: theme.spacing(2),
}));

const ArtistInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Cedarville,
  color: "#4b4747",
  fontSize: "20px",
  opacity: 0.8,
  textAlign: "right",
  marginTop: theme.spacing(2),
}));

const SongContainer = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  height: "300px",
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  top: "-300px",
  left: 0,
  "& img": {
    height: "60px",
    width: "60px",
    position: "absolute",
    top: "220px",
    left: "54%",
    zindex: 2,
    cursor: "pointer",
  },
}));

const SongText = CustomStyled(Box)(({ theme }) => ({
  fontFamily: Fonts.Cedarville,
  color: Colors.YELLOW,
  fontSize: "1.25rem",
  width: "50%",
  opacity: 0.6,
  transform: "rotate(-30deg)",
  position: "absolute",
  bottom: "0px",
  zIndex: 9,
}));

interface MobileLegendarySectionProps {
  toggle: () => void;
  playing: boolean;
}

export default function MobileLegendarySection({
  playing: isMainAudioPlaying,
  toggle,
}: MobileLegendarySectionProps) {
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickImage = () => {
    try {
      if (audioRef && audioRef.current) {
        // console.log("playing..", playing);
        if (isMainAudioPlaying) {
          toggle();
        }
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
    <LegendarySection>
      <SongContainer>
        <SongText>
          catsoncrackoncra high on pussycat she msged{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>GM</span>{" "}
          <span style={{ textDecoration: "underline" }}>i dnt msg back</span>{" "}
          meditate on{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>deez lines</span> like
          I’m a priest blowin joints like in{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>UFC</span> she wnt{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>69</span> i wnt{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>420</span> she wanna
          catch a <span style={{ color: Colors.STYLISH_GREEN }}>vibe</span>,{" "}
          <span style={{ textDecoration: "underline" }}>girl i got plenty</span>{" "}
          catsoncra make me feel num{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>jpegs</span> i be dealin
          m take my <span style={{ color: Colors.STYLISH_GREEN }}>sol</span> n
          spare me I got{" "}
          <span style={{ color: Colors.STYLISH_GREEN }}>degen</span> energy
        </SongText>
        <img
          onClick={onClickImage}
          src={isPlaying ? communityPlay : communityPause}
          alt="pause"
        />
      </SongContainer>
      <LegendaryTitle>THE LEGENDARY CATS</LegendaryTitle>
      <Box width="200px" display="flex" flexDirection="column">
        {remixImages.map((remix, i) => (
          <img src={remix} alt="remix" key={i} style={{ width: "100%" }} />
        ))}
      </Box>
      <LegendaryInfo variant="body2">
        A bunch of art people ran into the cats when they were fucking around on
        the streets. The artists bought some stuff from the cats, and decided to
        smoke it with them. Turns out, it was the best trip of the art people’s
        lives. They’re so bat shit crazy about the cats now that they decided to
        give them cats something. Well, it takes no mf genius to guess they
        would paint pictures of the cats. But since they’re all high, these
        pictures are gonna be wonky af version of the artists’ minds.
      </LegendaryInfo>
      <ArtistInfo variant="body2">
        These artists are dope. <br />
        These artists are on dope.
      </ArtistInfo>
      <audio ref={audioRef} id="audio-1" loop>
        <source src={communityAudio} type="audio/mpeg" />
      </audio>
    </LegendarySection>
  );
}
