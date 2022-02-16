import { Box, Typography } from "@mui/material";
import { Colors, CustomStyled, Fonts } from "../../utils/styles/DefaultTheme";

import React from "react";
import { storyCards } from "../desktopHome/StoryCardSection";

const StoryCardSection = CustomStyled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StoryCardTitle = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.BebasNeue,
  color: Colors.SECONDARY,
  fontSize: "2.25rem",
  marginBottom: theme.spacing(1),
}));

const StoryCardInfo = CustomStyled(Typography)(({ theme }) => ({
  fontFamily: Fonts.Balsamic,
  color: Colors.SECONDARY,
  opacity: 0.8,
  marginBottom: theme.spacing(2),
}));

export default function MobileStoryCardSection() {
  return (
    <StoryCardSection>
      {storyCards.map((storyCard) => (
        <Box key={storyCard.title} marginBottom={3}>
          <Box display="flex">
            <StoryCardTitle>{storyCard.title}</StoryCardTitle>
            {storyCard.title2 && (
              <StoryCardTitle>{storyCard.title2}</StoryCardTitle>
            )}
          </Box>
          <img
            src={storyCard.mobileImage}
            alt="storyCard"
            style={{ width: "100%", marginBottom: "8px" }}
          />
          <StoryCardInfo variant="body2">{`${storyCard.info}`}</StoryCardInfo>
          {storyCard.newLine && (
            <StoryCardInfo variant="body2">{storyCard.newLine}</StoryCardInfo>
          )}
        </Box>
      ))}
    </StoryCardSection>
  );
}
