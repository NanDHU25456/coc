import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ticker from "react-ticker";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const CustomRemixSection = CustomStyled(Box)(({ theme }) => ({
  width: "110%",
  marginTop: theme.spacing(-30),
  maxWidth: "110%",
  overflow: "hidden",
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
    width: "110px",
    // maxHeight: "90%",
    // height: "10%",
  },
}));

const FeaturedContainer = CustomStyled("div")(({ theme }) => ({
  display: "flex",
  marginRight: "2px",
  "& svg": {
    height: "12px",
    width: "12px",
    fontSize: "12px",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1.2),
  },
}));

const FeaturedTitle = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.PRIMARY,
  fontFamily: Fonts.BebasNeue,
  // marginRight: "2px",
  marginRight: theme.spacing(1.2),
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  letterSpacing: "-0.011em",
}));

const ScrollingContainer = CustomStyled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  "& svg": {
    height: "12px",
    width: "12px",
    fontSize: "12px",
    margin: "25px 8px",
  },
}));

const ScrollingTitle = CustomStyled(Typography)(({ theme }) => ({
  color: Colors.PRIMARY,
  fontFamily: Fonts.BebasNeue,
  textTransform: "uppercase",
  fontSize: "3rem",
  whiteSpace: "nowrap",
}));

const RemixGradientContainer = CustomStyled(Box)(({ theme }) => ({
  height: "20px",
  width: "100%",
  background:
    "linear-gradient(87.22deg, #FF00C7 5.62%, #00FFD1 50.96%, #FFF500 98.22%)",
}));

interface RemixSectionProps {
  questionImages: string[];
  remixImages: string[];
}

export default function RemixSection({
  questionImages,
  remixImages,
}: RemixSectionProps) {
  const [show, setShow] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const onMouseEnter = (i: number) => {
    const newShow: any = {};

    for (let index = 0; index < 5; index++) {
      newShow[index] = index === i ? true : false;
    }

    setShow(newShow);
  };

  const getImage = (i: number) => {
    if (show[i]) {
      return remixImages[i];
    }

    return questionImages[i];
  };

  return (
    <CustomRemixSection>
      <RemixImageContainer>
        {questionImages.map((val, i) => (
          <img
            onMouseEnter={() => onMouseEnter(i)}
            onMouseOut={() =>
              setShow({
                ...show,
                [i]: false,
              })
            }
            src={getImage(i)}
            alt="remix"
            key={i}
          />
        ))}
      </RemixImageContainer>
      <RemixGradientContainer />
      <Box height="auto">
        <>
          {/* <FeaturedContainer style={{ maxWidth: "100%", display: "flex", overflow: "hidden" }}>
            {new Array(20).fill("empty").map((val) => (
              <>
                <FeaturedTitle variant="h6">Featured Artist</FeaturedTitle>
                <FontAwesomeIcon icon={faCircle} />
              </>
            ))}
          </FeaturedContainer> */}

          <Ticker move={false}>
            {({ index }) => (
              <FeaturedContainer style={{ margin: "10px", display: "flex" }}>
                <FeaturedTitle variant="h5">Featured Artist</FeaturedTitle>
                <FontAwesomeIcon icon={faCircle} />
              </FeaturedContainer>
            )}
          </Ticker>
        </>
        <>
          <Ticker speed={6}>
            {({ index }) => (
              <ScrollingContainer>
                <ScrollingTitle>AZAY.KUN</ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                <ScrollingTitle>????</ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                <ScrollingTitle>THE SAFRON CONCEPT</ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                <ScrollingTitle>????</ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} />
                <ScrollingTitle>THE ARTIST SPUD </ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                <ScrollingTitle>????</ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                <ScrollingTitle>ART.THAMBI</ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                <ScrollingTitle>????</ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                <ScrollingTitle>ERANAM</ScrollingTitle>
                <FontAwesomeIcon icon={faCircle} />
                {/* <ScrollingTitle style={{ whiteSpace: "nowrap" }}>
                  {`AZAY.KUN ????? THE SAFRON CONCEPT ???? THE ARTIST SPUD ????? ART.THAMBI ???? ERANAM ?????`}
                </ScrollingTitle> */}
              </ScrollingContainer>
            )}
          </Ticker>
        </>
      </Box>
    </CustomRemixSection>
  );
}
