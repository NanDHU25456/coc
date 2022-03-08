import { DiscordContainer, DiscordText } from "../layout/BackgroundLayout";

import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as GameIcon } from "../../assets/images/icons/game.svg";
import { Icon } from "../pages/HomePage";
import catLogo from "../../assets/images/cat-logo.png";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

interface MobileNavProps {
  showDiscord: boolean;
  setShowDiscord: (val: boolean) => void;
}

const MobileNav = ({ showDiscord, setShowDiscord }: MobileNavProps) => {
  return (
    <>
      <Box
        position="absolute"
        top={"24px"}
        left={"12px"}
        display="flex"
        justifyContent={"space-between"}
        width="100%"
        paddingRight={3}
      >
        <Box>
          <Icon>
            <img src={catLogo} alt="catLogo" />
          </Icon>
        </Box>
        <Box position="relative">
          <Icon
            sx={{ marginRight: "10px" }}
            onClick={() => setShowDiscord(!showDiscord)}
          >
            <GameIcon />
          </Icon>
          <Icon
            onClick={() => window.open("https://twitter.com/catsoncrack_2")}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Icon>
          {showDiscord && (
            <DiscordContainer>
              <DiscordText variant="body2">
                Discord is currently private :P Follow us on twitter and turn on
                the push notification so you don’t miss the next invite.
              </DiscordText>
            </DiscordContainer>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MobileNav;
