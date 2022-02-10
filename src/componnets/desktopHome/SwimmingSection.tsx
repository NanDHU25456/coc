import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import swimmingImg from "../../assets/images/swimming.png";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";


const SwimmingSectionContainer = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 15),
  background: Colors.PRIMARY,
  height: "300px",
  marginBottom: theme.spacing(27.5),
}));

const CustomSwimmingTypo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.PRIMARY,
  opacity: 0.8,
  textAlign: "left",
  variant: "body1",
  marginTop: theme.spacing(2),
}));

const CustomSwimmingSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  width: "100%",
  display: "flex",
}));

export default function SwimmingSection() {
  const theme = useTheme();
  return (
    <SwimmingSectionContainer>
      <CustomSwimmingSection>
        <Box width="50%" padding={theme.spacing(15, 0, 0, 12)}>
          <CustomSwimmingTypo>
            A bunch of art people ran into the cats when they were fucking
            around on the streets. The artists bought some stuff from the cats,
            and decided to smoke it with them. Turns out, it was the best trip
            of the art people’s lives. They’re so bat shit crazy about the cats
            now that they decided to give them cats something. Well, it takes no
            mf genius to guess they would paint pictures of the cats. But since
            they’re all high, these pictures are gonna be wonky af version of
            the artists’ minds.
          </CustomSwimmingTypo>
        </Box>
        <Box width="50%">
          <img
            src={swimmingImg}
            alt="swimming"
            style={{ width: "100%" }}
          />
        </Box>
      </CustomSwimmingSection>
    </SwimmingSectionContainer>
  );
}
