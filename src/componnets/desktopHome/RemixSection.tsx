import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";

import { Box } from "@mui/material";
import React from "react";
import featuredArtist from "../../assets/images/featuredArtist.png";
import slider from "../../assets/images/slider.png";

const CustomRemixSection = CustomStyled(Box)(({ theme }) => ({
  height: "300px",
  width: "99vw",
  margin: theme.spacing(0, -2.2),
  marginTop: theme.spacing(-16),
  // border: "1px solid brown",
  background: Colors.SECONDARY,
  padding: "2px 0px",
  display: "flex",
  flexDirection: "column",
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
  height: "100%",
  width: "100%",
  position: "relative",
  overflow: "hiddenn",
  transform: "translate3d(0, 0, 0)",
}));

const Scrolling = CustomStyled(Box)(({ theme }) => ({
  height: "60%",
  width: "400%",
  background: `url(${slider})`,
  backgroundRepeat: "repeat-x",
  position: "absolute",
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
      <Box height="35%" style={{ border: "1px solid red" }}>
        <Box
          height="40px"
          style={{
            background: `url(${featuredArtist})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat-x",
          }}
        />
        <ScrollingContainer>
          <Scrolling />
        </ScrollingContainer>
      </Box>
    </CustomRemixSection>
  );
}
