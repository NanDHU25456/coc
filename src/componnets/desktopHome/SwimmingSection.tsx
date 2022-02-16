import { Box, Typography } from "@mui/material";
import React from "react";
import swimmingImg from "../../assets/images/swimming.png";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";


const SwimmingSectionContainer = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  width: "103%",
  marginBottom: theme.spacing(20),
}));

const CustomSwimmingTypo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.PRIMARY,
  opacity: 0.8,
  textAlign: "left",
  variant: "body1",
  marginTop: theme.spacing(2),
}));

const CustomArtistTypo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Cedarville,
  fontSize: "24px",
  fontWeight: "100",
  lineHeight: "29px",
  letterSpacing: "-0.011em",
  textAlign: "right",
  variant: "body1",
  color: "#4b4747",
  marginTop: theme.spacing(2),
}));

const CustomSwimmingSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.BLUE,
  width: "100%",
  display: "flex",
}));

export default function SwimmingSection() {
  return (
    <SwimmingSectionContainer>
      <CustomSwimmingSection>
        <Box width="50%" padding={"0px 0 0 96px"} paddingTop={"8%"}>
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
          <CustomArtistTypo>
            These artists are dope. <br />
            These artists are on dope.
          </CustomArtistTypo>
        </Box>
        <Box
          width="50%"
          display={"flex"}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={swimmingImg}
            alt="swimming"
            style={{ width: "100%", maxHeight: "500px", maxWidth: "500px" }}
          />
        </Box>
      </CustomSwimmingSection>
    </SwimmingSectionContainer>
  );
}
