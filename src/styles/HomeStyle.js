import styled from '@emotion/styled';
import { Box } from '@mui/material';

const HomeContainer = styled(Box)`
  width: 100%;
  .MuiTypography-root {
    font-family: 'Inter', sans-serif;
  }
  .MuiButton-root {
    text-transform: none;
    background: #e0c13e;
    border-radius: 20px;
    padding: 8px 24px;
    font-weight: 550;
    box-shadow: none;
    color: #fff;
    &:hover {
      background: #e0c13e;
    }
  }
`;

const TopBar = styled(Box)`
  width: 100%;
  height: 64px;
  background: #347295;
  padding: 4px 32px;

  img {
    width: 84px;
    height: auto;
  }

  @media (max-width: 380px) {
    padding: 4px 16px;
  }
`;

const BannerContainer = styled(Box)`
  width: 100%;
  max-height: 599px;
  height: 599px;
  .react-multi-carousel-list {
    height: 100%;
    .react-multi-carousel-track {
      height: 100%;
      .react-multi-carousel-item {
        height: 100%;
      }
    }
    .react-multi-carousel-dot-list {
      .react-multi-carousel-dot button {
        background: #fff;
        border-width: 0;
        border: none;
      }
      .react-multi-carousel-dot--active button {
        background: #e0c13e;
      }
    }
  }
  @media (max-width: 600px) {
    height: 60vh;
  }
`;

const BannerBox = styled(Box)`
  width: 100%;
  height: 100%;
  padding-bottom: 36px;
  padding-left: 16px;
  background: url('/banner1.png'), #ffffff;
  //   background-color: rgba(52, 114, 149, 0.5);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .MuiTypography-root {
    font-family: 'Inter', sans-serif;
  }
  .MuiTypography-h2 {
    font-weight: 700;
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    padding-left: 60px;
    .MuiTypography-h2 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 1100px) {
    padding-left: 120px;
  }
`;

const AboutContainer = styled(Box)`
  width: 100%;
  padding: 4rem 1rem;
  .MuiGrid-root {
    align-items: center;
    .MuiGrid-item {
      .MuiBox-root {
        .MuiTypography-h4 {
          font-weight: 700;
        }
        .MuiTypography-h6 {
          font-weight: 500;
        }
        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding: 6rem 60px 3rem;
  }
  @media (min-width: 1240px) {
    padding: 6rem 120px 3rem;
  }
`;

const WhatweDoContainer = styled(AboutContainer)`
  padding-top: 0 !important;
  padding-bottom: 4rem !important;
`;

const FooterContainer = styled(Box)`
  width: 100%;
  height: auto;
  background: #347295;
  padding: 4rem 1rem 2rem;
  .MuiGrid-root {
    .MuiGrid-item {
      .MuiBox-root {
        .MuiSvgIcon-root {
          fill: #fff;
        }
        .MuiTypography-root {
          color: #fff;
        }
        .MuiTypography-h4 {
          font-weight: 700;
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding: 4rem 60px 2rem;
  }
  @media (min-width: 1240px) {
    padding: 4rem 120px 2rem;
  }
`;

export {
  HomeContainer,
  TopBar,
  BannerContainer,
  BannerBox,
  AboutContainer,
  WhatweDoContainer,
  FooterContainer,
};
