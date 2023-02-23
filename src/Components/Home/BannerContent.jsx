import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BannerBox, BannerContainer } from '../../styles/HomeStyle';

const Content = () => {
  return (
    <BannerBox>
      <Box width={{ xs: '95%', sm: '60%' }}>
        <Typography variant='h2' color='white' mb={2.4}>
          Personal Assistance
          <br /> with various disability.
        </Typography>
        <Box width={{ sm: '80%', md: '50%' }}>
          {' '}
          <Typography variant='body1' color='white' mb={2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the Lorem Ipsum is simply
          </Typography>
        </Box>
        <Button variant='contained' color='primary'>
          Apply for Suport
        </Button>
      </Box>
    </BannerBox>
  );
};

const BannerContent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <BannerContainer>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
      >
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </Carousel>
    </BannerContainer>
  );
};

export default BannerContent;
