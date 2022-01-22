import { Container, Icon, ImageContaier } from "../pages/HomePage";

import BackgroundLayout from "../layout/BackgroundLayout";
import ComingSoon from "../../assets/images/coming-soon-gif.gif";
import React from "react";
import pause from "../../assets/images/icons/pause.svg";
import play from "../../assets/images/icons/play.svg";

interface DesktopHomeProps {
  toggle: () => void;
  playing: boolean;
}

export default function DesktopHome({ toggle, playing }: DesktopHomeProps) {
  return (
    <BackgroundLayout>
      <Container>
        <ImageContaier>
          <img src={ComingSoon} alt="coming-soon" />
        </ImageContaier>
        <Icon onClick={() => toggle()} id="cat-play">
          <img src={playing ? pause : play} alt="audio" />
        </Icon>
      </Container>
    </BackgroundLayout>
  );
}
