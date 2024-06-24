import { Box, keyframes, styled } from '@mui/material';
import { spacing } from '@psycron/theme/spacing/spacing.theme';

const navbarHeight = '70px';

export const NavbarWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.small};
  height: 100%;
  justify-content: space-between;
`;

export const MobileNavbarWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${spacing.medium};
  height: ${navbarHeight};
`;

export const MobileNavbarMenu = styled(Box)`
  svg {
    height: auto;
    width: 30px;
  }
`;

export const ColoredLogo = styled(Box)`
  svg {
    width: 45px;
  }
`;

export const NavbarFooterIcons = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    height: 50px;
  }
`;

const dropdownAnimation = keyframes`
  0% {
    transform: translateY(45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(6px);
    animation-timing-function: ease-in;
  }
  98% {
    transform: translateY(4px);
    animation-timing-function: ease-in;
  }
  25%, 75%{
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`;


export const FloatingMobileNavbar = styled(Box)`
  position: absolute;
  z-index: 100;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  padding: ${spacing.mediumLarge} ${spacing.mediumSmall} ${spacing.small};

  left: 0;

  backdrop-filter: blur(20px);
  border-end-end-radius: ${spacing.mediumLarge};

  /* ----------------------------------------------
  Generated by AnimatiSS
  Licensed under FreeBSD License
  URL: https://xsgames.co/animatiss
  Twitter: @xsgames_
---------------------------------------------- */

  animation: ${dropdownAnimation} 0.5s linear both;
`;

export const MobileNavbarFooter = styled(Box)`
  margin-top: ${spacing.mediumLarge};

  svg {
    height: 25px;
  }

  h6 {
    font-size: 0.8rem;
  }
`;
