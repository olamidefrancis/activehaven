import React from 'react';
import {
  AboutContainer,
  FooterContainer,
  HomeContainer,
  TopBar,
  WhatweDoContainer,
} from '../../styles/HomeStyle';
import logo from '../../assets/ActiveHaven .png';
import { Box, Button, Grid, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import aboutImg from '../../assets/about_img.png';
import BannerContent from './BannerContent';

const Home = () => {
  const year = new Date().getFullYear();
  const isLoggedIn = localStorage.getItem('activeUser');
  const handleClick = () => {
    if (isLoggedIn) {
      localStorage.clear();
      window.location.reload();
    } else {
      window.location.href = '/signin';
    }
  };
  return (
    <HomeContainer>
      <TopBar display='flex' justifyContent='space-between' alignItems='center'>
        <img src={logo} alt='logo' />
        <Button variant='contained' onClick={handleClick}>
          {isLoggedIn ? 'Sign Out' : 'Staff Signin'}
        </Button>
      </TopBar>
      <BannerContent />
      <AboutContainer width='100%' bgcolor='white'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant='h4' mb={2}>
                About Company
              </Typography>
              <Typography variant='h6' mb={2}>
                ActiveHaven UK Limited
              </Typography>
              <Typography variant='body1' mb={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
              </Typography>
              <Typography variant='body1'>
               Seeking for job? Send CV with cover letter to adebayobright.ab@gmail.com 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width='100%'>
              <img src={aboutImg} alt='about' width='100%' />
            </Box>
          </Grid>
        </Grid>
      </AboutContainer>
      <WhatweDoContainer width='100%' bgcolor='white'>
        <Typography variant='h4' mb={2} align='center'>
          What we do?
        </Typography>
        <Typography variant='body1' align='center'>
        Specialist and tailored support for Autism Spectrum, ADHD,Down Syndrome.
        Personal Asistance with various diadility.
        SEN Recruitment, Professional Training abd Support.
        Tuition: Special Education Need and Learning Disability.
        Dementia Support.
        Palliativee Care and Support.
        </Typography>
      </WhatweDoContainer>
      <FooterContainer>
        <Grid container spacing={2} justifyContent='space-between'>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant='h4' mb={2}>
                Get in touch
              </Typography>
              <Typography variant='body1' mb={2}>
                We look forward to hearing from you. Have a issue you’re looking
                to discuss or question? Let us know the details and we’ll get
                back to you within 24 hours.{' '}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display='flex' columnGap={2} mb={2}>
              <PhoneInTalkIcon />
              <Typography variant='body1'>+447403968952</Typography>
            </Box>
            <Box display='flex' columnGap={2} mb={2}>
              <CalendarMonthIcon />
              <Typography variant='body1'> Mon - Sun Open 24 hours</Typography>
            </Box>
            <Box display='flex' columnGap={2} mb={2}>
              <LocationOnIcon />
              <Typography variant='body1'>
                Suite F8 Hartsbourne House, Carpenders Park, Watford WD19 5EF
              </Typography>
            </Box>
            <Box display='flex' columnGap={2} mb={2}>
              <EmailIcon />
              <Typography variant='body1'>
                Adebright@activehaven.co.uk
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant='body1' align='center' color='white'>
            © {year} ActiveHaven UK Limited. All rights reserved.
          </Typography>
        </Box>
      </FooterContainer>
    </HomeContainer>
  );
};

export default Home;
