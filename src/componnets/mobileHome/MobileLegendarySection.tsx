import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";
import { remixImages } from "../home/DesktopHome";

const LegendarySection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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

export default function MobileLegendarySection() {
  return (
    <LegendarySection>
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
    </LegendarySection>
  );
}
