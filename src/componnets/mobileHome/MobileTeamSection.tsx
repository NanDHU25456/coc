import { Box, Grid, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import { Team, teams } from "../desktopHome/TeamSection";

import React from "react";

const TeamSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  padding: theme.spacing(2, 13.75),
}));

const TeamTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  fontSize: "2.25rem",
  color: Colors.SECONDARY,
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

export default function MobileTeamSection() {
  return (
    <TeamSection>
      <TeamTitle>TEAM</TeamTitle>
      <Grid container spacing={1} style={{ width: "100%" }}>
        {teams.map((team) => (
          <Team height="fit-content" key={team.title} {...team} />
        ))}
      </Grid>
    </TeamSection>
  );
}
