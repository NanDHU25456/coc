import { Box, Grid, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";
import alcepon from "../../assets/images/alcepon.png";
import budbug from "../../assets/images/budbug.png";
import foolmaxi from "../../assets/images/foolmaxi.png";
import peblo from "../../assets/images/peblo.png";
import venga from "../../assets/images/venga.png";

const CustomTeamSection = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 37),
  background: Colors.PRIMARY,
}));

const HeroTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "3.25rem",
  color: Colors.SECONDARY,
}));

const TeamTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "2.25rem",
  color: Colors.PRIMARY,
  textTransform: "uppercase",
  letterSpacing: "-0.011em",
}));

const TeamInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.PRIMARY,
  opacity: 0.4,
  letterSpacing: "0.01em",
}));

export const teams: TeamProps[] = [
  {
    image: peblo,
    title: "peblo",
    info: `this guy is the ceo. he knows everything.`,
  },
  {
    image: alcepon,
    title: "al cepon",
    info: `Youngest in the team. Oldest in the game of memes.`,
  },
  {
    image: budbug,
    title: "budbug",
    info: `Head of Tech. Belly of beer.`,
  },
  {
    image: foolmaxi,
    title: "foolmaxi",
    info: `Jack of all operations. Master of one. Dumbness.`,
  },
  {
    image: venga,
    title: "venga",
    info: `Fashion the effing world, one design at a time.`,
  },
  {
    image: peblo,
    title: "Efnefknf",
    info: `Discontent Creator.`,
  },
  {
    image: peblo,
    title: "spud",
    info: `Draws characters. Drawn to characters.`,
  },
];

export default function TeamSection() {
  return (
    <CustomTeamSection>
      <HeroTitle>TEAM</HeroTitle>
      <Grid container spacing={1} style={{ width: "100%" }}>
        {teams.map((team) => (
          <Team key={team.title} {...team} />
        ))}
      </Grid>
    </CustomTeamSection>
  );
}

interface TeamProps {
  image: string;
  title: string;
  info: string;
  height?: string;
}

export const Team = ({ image, title, info, height = "340px" }: TeamProps) => {
  return (
    <Grid item md={3} xs={12}>
      <Box height={height} style={{ background: Colors.SECONDARY }} padding={3}>
        <img style={{ width: "100%" }} src={image} alt="team" />
        <TeamTitle>{title}</TeamTitle>
        <TeamInfo variant="body2">{info}</TeamInfo>
      </Box>
    </Grid>
  );
};
