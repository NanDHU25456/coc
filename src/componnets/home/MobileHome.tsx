import { Colors, CustomStyled } from "../../utils/styles/DefaultTheme";
import React, { useState } from "react";

import { Box } from "@mui/material";
import CustomMobileStorySection from "../mobileHome/MobileStorySection";
import FooterSection from "../desktopHome/FooterSection";
import { MobileBackgroundContainer } from "../layout/BackgroundLayout";
import MobileCrackHouseSection from "../mobileHome/MobileCrackHouseSection";
import MobileFeatureSection from "../mobileHome/MobileFeatureSection";
import MobileHeroSection from "../mobileHome/MobileHeroSection";
import MobileLegendarySection from "../mobileHome/MobileLegendarySection";
import MobileStoryCardSection from "../mobileHome/MobileStoryCardSection";
import MobileTeamSection from "../mobileHome/MobileTeamSection";
import ourVision from "../../assets/images/our-vision.png";

const VisionSection = CustomStyled(Box)(({ theme }) => ({
  background: Colors.PRIMARY,
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  height: "100px",
  width: "100%",
  marginTop: theme.spacing(2),
  "& img": {
    width: "100%",
    height: "100%",
  },
}));
interface MobileHomeProps {
  toggle: () => void;
  playing: boolean;
  showOverlay: boolean;
}

export default function MobileHome({
  toggle,
  playing,
  showOverlay,
}: MobileHomeProps) {
  const [showDiscord, setShowDiscord] = useState(false);

  return (
    <MobileBackgroundContainer overflow={"hidden !important"}>
      <MobileHeroSection
        toggle={toggle}
        playing={playing}
        showDiscord={showDiscord}
        setShowDiscord={setShowDiscord}
        showOverlay={showOverlay}
      />
      <CustomMobileStorySection />
      <MobileCrackHouseSection />
      <VisionSection>
        <img src={ourVision} alt="vision" />
      </VisionSection>
      <MobileStoryCardSection />
      <MobileLegendarySection />
      <MobileFeatureSection />
      <MobileTeamSection />
      <FooterSection />
    </MobileBackgroundContainer>
  );
}
