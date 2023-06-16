import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import BannerImage from '../assets/images/banner1.webp'

const Banner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: "70px"}, ml: { sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Start Your Fitness Journey Today!
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px"
        >
            The Body <span style={{color:'#ff2625'}}>ACHIEVES</span> <br /> What The Mind <span style={{color:'#ff2625'}}>BELIEVES</span>
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Explore the most effective exercises
        </Typography>
        <Button variant='contained' color="error" href="#exercises">Explore Exercises</Button>
        <Typography fontWeight={600} color="#ff2625" sx={{opacity: 0.1, display: { lg: 'block', xs: 'none'}}} fontSize="90px">
            It's You Against <br />Yourself
        </Typography>
        <img src= {BannerImage} className="hero-banner-img"/>
    </Box>
  )
}

export default Banner