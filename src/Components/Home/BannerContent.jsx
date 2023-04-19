import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import { BannerBox, BannerContainer } from '../../styles/HomeStyle';

const Content = ({banner}) => {
  return (
    <BannerBox img={banner}>
      <Box width={{ xs: '95%', sm: '60%' }}>
        <Typography variant='h2' color='white' mb={2.4}>
          Personal Assistance
          <br /> with various disability.
        </Typography>
        <Box width={{ sm: '80%', md: '50%' }}>
          {' '}
          <Typography variant='body1' color='white' mb={2}>
          INSPIRE Z ASPIRE
          </Typography>
        </Box>
        <Link to='/support'>
          {' '}
          <Button variant='contained' color='primary'>
            Apply for Suport
          </Button>
        </Link>
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
        infinite={true}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
      >
        <Content banner={banner1} />
        <Content banner={banner2} />
        <Content banner={banner3} />
        <Content banner={banner4} />
      
      </Carousel>
    </BannerContainer>
  );
};

export default BannerContent;