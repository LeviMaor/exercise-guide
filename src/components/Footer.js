import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/muscle-logo.webp';

const Footer = () => (
  <Box mt="80px" bgcolor="white">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '300px', height: '150px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made by Levi Maor</Typography>
  </Box>
);

export default Footer;