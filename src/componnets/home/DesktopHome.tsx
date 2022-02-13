import React, { useState } from "react";

import BackgroundLayout from "../layout/BackgroundLayout";
import CrackHouseSection from "../desktopHome/CrackHouseSection";
import FooterSection from "../desktopHome/FooterSection";
import HeroSection from "../desktopHome/HeroSection";
import LegendarySection from "../desktopHome/LegendarySection";
import RemixSection from "../desktopHome/RemixSection";
import StoryCardSection from "../desktopHome/StoryCardSection";
import StorySection from "../desktopHome/StorySection";
import SwimmingSection from "../desktopHome/SwimmingSection";
import TeamSection from "../desktopHome/TeamSection";
import VisionSection from "../desktopHome/VisionSection";
import eImg from "../../assets/images/e.png";
import mImg from "../../assets/images/m.png";
import questionImg from "../../assets/images/question.png";
import rImg from "../../assets/images/r.png";
import xImg from "../../assets/images/x.png";

interface DesktopHomeProps {
  toggle: () => void;
  playing: boolean;
  showOverlay: boolean;
}

export const questionsImages = new Array(5).fill(questionImg);
export const remixImages = [rImg, eImg, mImg, questionImg, xImg];

export default function DesktopHome({
  toggle,
  playing,
  showOverlay,
}: DesktopHomeProps) {
  const [showQuestion, setShowQuestion] = useState(true);
  const imageList = showQuestion ? questionsImages : remixImages;

  return (
    <BackgroundLayout showOverlay={showOverlay}>
      <HeroSection
        showOverlay={showOverlay}
        playing={playing}
        toggle={toggle}
      />
      <StorySection showOverlay={showOverlay} />
      <CrackHouseSection />
      <VisionSection />
      <StoryCardSection />
      <LegendarySection />
      <RemixSection imageList={imageList} setShowQuestion={setShowQuestion} />
      <SwimmingSection />
      <TeamSection />
      <FooterSection />
    </BackgroundLayout>
  );
}
