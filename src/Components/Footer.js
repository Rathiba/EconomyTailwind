import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material'; // Keep the MUI Link as MuiLink
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RoadMap.js';

const Footer = () => {
    return (
        <Box sx={{
            bgcolor: '#f0f0f0',
            color: 'white',
            padding: '20px',
          }}>
            <Container maxWidth="lg">
                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                    <Box item xs={12} sm={4}>
                        <Typography variant="h5" sx={{color:'black'}}>Economic Tailwind</Typography>
                        <MuiLink href="#" color="black" underline="none">Google Play</MuiLink><br />
                        <MuiLink href="#" color="black" underline="none">Apple Store</MuiLink><br />
                        <MuiLink href="https://www.youtube.com/@EconomicTailwinds" color="black" underline="none">YouTube</MuiLink><br />
                        <MuiLink href="#" color="black" underline="none">Blog</MuiLink>
                    </Box>
                    <Box item xs={12} sm={4}>
                        <Typography variant="h5" sx={{color:'black'}}>Get Started</Typography>
                        <Link to="/RoadMap" style={{ color: 'black', textDecoration: 'none' }}>Road Map</Link><br />
                        <MuiLink href="#" color="black" underline="none">Translation</MuiLink>
                    </Box>
                    <Box item xs={12} sm={4}>
                        <Typography variant="h5" sx={{color:'black'}}>About</Typography>
                        <MuiLink href="#" color="black" underline="none">Features</MuiLink><br />
                        <MuiLink href="#" color="black" underline="none">Source Code</MuiLink><br />
                        <Typography color='black' sx={{ mt: 3 }}>&copy; 2023 EconomicTailwinds</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
