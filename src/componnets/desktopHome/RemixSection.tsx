import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import slider from "../../assets/images/slider.png";

const CustomRemixSection = CustomStyled(Box)(({ theme }) => ({
  width: "103%",
  marginTop: theme.spacing(-30),
  background: Colors.SECONDARY,
  padding: "2px 0px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("xl")]: {
    marginTop: theme.spacing(-14),
  },
}));

const RemixImageContainer = CustomStyled(Box)(({ theme }) => ({
  height: "60%",
  display: "flex",
  flexDirection: "row",
  "& img": {
    flex: 1,
    flexBasis: "120px",
    width: "120px",
    height: "100%",
  },
}));

const ScrollingContainer = CustomStyled(Box)(({ theme }) => ({
  height: "85%",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  transform: "translate3d(0, 0, 0)",
  background: Colors.SECONDARY,
}));

const Scrolling = CustomStyled(Box)(({ theme }) => ({
  height: "70%",
  width: "300%",
  // padding: theme.spacing(2),
  background: `url(${slider})`,
  backgroundRepeat: "repeat-x",
  // background: Colors.SECONDARY,
  position: "absolute",
  display: "flex",
  top: 0,
  left: 0,
  transform: "translate3d(0, 0, 0)",
  animation: "moveSlideshow 25s linear infinite",
  "@keyframes moveSlideshow": {
    "100%": {
      transform: "translateX(-66.6666%)",
    },
  },
}));

const FeaturedContainer = CustomStyled(Box)(({ theme }) => ({
  display: "flex",
  marginRight: theme.spacing(0.5),
  "& svg": {
    height: "12px",
    width: "12px",
    fontSize: "12px",
    marginTop: theme.spacing(1),
  },
}));

const FeaturedTitle = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.PRIMARY,
  fontFamily: Fonts.BebasNeue,
  marginRight: theme.spacing(1),
  textTransform: "uppercase",
  letterSpacing: "-0.011em",
}));

const ScrollingTitle = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.PRIMARY,
  fontFamily: Fonts.BebasNeue,
  textTransform: "uppercase",
  letterSpacing: "-0.011em",
  fontSize: "2rem",
}));

const RemixGradientContainer = CustomStyled(Box)(({ theme }) => ({
  height: "20px",
  width: "100%",
  background:
    "linear-gradient(87.22deg, #FF00C7 5.62%, #00FFD1 50.96%, #FFF500 98.22%)",
}));

interface RemixSectionProps {
  imageList: string[];
  setShowQuestion: (val: boolean) => void;
}

export default function RemixSection({
  imageList,
  setShowQuestion,
}: RemixSectionProps) {
  return (
    <CustomRemixSection>
      <RemixImageContainer onMouseEnter={() => setShowQuestion(false)}>
        {imageList.map((val, i) => (
          <img src={val} alt="remix" key={i} />
        ))}
      </RemixImageContainer>
      <RemixGradientContainer />
      <Box height="100px" style={{ border: "1px solid red" }}>
        <Box
          height="40px"
          padding={1.2}
          overflow="hidden"
          display="flex"
          flexWrap="nowrap"
        >
          {new Array(10).fill("empty").map((val, i) => (
            <FeaturedContainer flex={1} display="flex">
              <FeaturedTitle variant="h5">Featured Artist</FeaturedTitle>
              <FontAwesomeIcon icon={faCircle} />
            </FeaturedContainer>
          ))}
        </Box>
        <ScrollingContainer>
          <Scrolling></Scrolling>
        </ScrollingContainer>
      </Box>
    </CustomRemixSection>
  );
}
