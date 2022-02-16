import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Ticker from "react-ticker";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CustomRemixSection = CustomStyled(Box)(({ theme }) => ({
  width: "110%",
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

const FeaturedContainer = CustomStyled("div")(({ theme }) => ({
  display: "flex",
  marginRight: "8px",
  "& svg": {
    height: "12px",
    width: "12px",
    fontSize: "12px",
    marginTop: theme.spacing(1),
    marginRight: "8px",
  },
}));

const FeaturedTitle = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.PRIMARY,
  fontFamily: Fonts.BebasNeue,
  marginRight: "8px",
  // marginRight: theme.spacing(1),
  textTransform: "uppercase",
  letterSpacing: "-0.011em",
}));

const ScrollingTitle = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.PRIMARY,
  fontFamily: Fonts.BebasNeue,
  textTransform: "uppercase",
  fontSize: "3rem",
  "& svg": {
    height: "12px",
    width: "12px",
    fontSize: "12px",
    marginTop: theme.spacing(1),
    marginRight: "8px",
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
      <Box height="auto">
        <>
          <Ticker move={false}>
            {({ index }) => (
              <FeaturedContainer style={{ display: "flex" }}>
                <FeaturedTitle variant="h5">Featured Artist</FeaturedTitle>
                <FontAwesomeIcon icon={faCircle} />
              </FeaturedContainer>
            )}
          </Ticker>
        </>
        <>
          <Ticker speed={6}>
            {({ index }) => (
              <div style={{ display: "flex" }}>
                <ScrollingTitle style={{ whiteSpace: "nowrap" }}>
                  {`AZAY.KUN ????? THE SAFRON CONCEPT ???? THE ARTIST SPUD ????? ART.THAMBI ???? ERANAM ?????`}
                </ScrollingTitle>
              </div>
            )}
          </Ticker>
        </>
      </Box>
    </CustomRemixSection>
  );
}
