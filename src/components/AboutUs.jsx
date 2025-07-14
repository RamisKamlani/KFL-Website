import React from 'react';
import { Box, Typography, Button, Chip, Paper } from '@mui/material';

// Placeholder images for the phone carousel
const phoneImages = [
  '/phone1.png',
  '/phone2.png',
  '/phone3.png',
  '/phone4.png',
];

function AboutUs() {
  // Simple vertical animation using CSS keyframes
  return (
    <Box  id='about-us' width="100%" display="flex" justifyContent="center" alignItems="center" sx={{ background: '#e9f1f6', py: { xs: 6 , md: 2 } }}>
      <Box
        width="100%"
        maxWidth={1800}
        mx="auto"
        display="flex"
        flexDirection={{ xs: 'column',  md: 'row' }}
        gap={8}
        px={{ xs: 0, sm: 0, md: 0, lg: 0 }}
        py={{ xs: 10, sm: 6, md: 0 }}
        alignItems="center"
      >
        {/* Combined HeroCard for text and phones */}
        <Paper elevation={6} className="flex-1" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', width: '100%', overflow: 'hidden', position: 'relative', minHeight: { xs: 320, md: 320 }, height: { xs: 'auto', md: 360, lg: 500}, boxShadow: 6, borderRadius: 6, background: '#fff' , p:0 }}>
          {/* Left: Text Content */}
          <Box p={{ xs: 2, sm: 3, md: 5 }} flex={1} display="flex" flexDirection="column" justifyContent="center" minWidth={0}
            sx={{
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Chip label="About Us" sx={{ mb: 2, fontWeight: 500, maxWidth: 180, fontSize: { xs: 13, sm: 15, md: 16 }, px: 1.5, py: 0.5, borderRadius: '9999px', background: '#fff', color: '#222', boxShadow: 1 }} />
            <Typography
              variant="h3"
              fontWeight={700}
              mb={2}
              sx={{
                fontFamily: 'Clash Display, sans-serif',
                fontSize: { xs: 18, sm: 22, md: 28, lg: 36 },
                lineHeight: 1.15,
                wordBreak: 'break-word',
              }}
            >
              Introducing the app that's redefining<br/>convenience for everyone
            </Typography>
            <Typography
              variant="body2"
              mb={3}
              sx={{
                fontFamily: 'Clash Display, sans-serif',
                fontSize: { xs: 11, sm: 13, md: 15, lg: 16 },
                color: '#222',
                maxWidth: 500,
                wordBreak: 'break-word',
              }}
            >
              The 4League App like never before in Pakistan is the first time a local football match data, live stats, notifications as well as much more will all be available in one place. The app is designed to provide a seamless experience for football fans, allowing them to stay updated with their favorite teams and players.
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1.5} alignItems="center">
              <Button
                variant="contained"
                sx={{
                  background: '#222',
                  color: 'white',
                  borderRadius: '9999px',
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 0.5, sm: 1 },
                  fontSize: { xs: 13, sm: 15, md: 16 },
                  fontWeight: 500,
                  fontFamily: 'Clash Display, sans-serif',
                  textTransform: 'none',
                  minHeight: { xs: 32, sm: 36, md: 40 },
                  boxShadow: 'none',
                  '&:hover': { background: '#111', boxShadow: 'none' },
                }}
              >
                Discover More
              </Button>
              <Box component="img" src="/google-play-badge.png" alt="Google Play" sx={{ height: { xs: 32, sm: 38, md: 44 }, width: 'auto' }} />
              <Box component="img" src="/app-store-badge.png" alt="App Store" sx={{ height: { xs: 32, sm: 38, md: 44 }, width: 'auto' }} />
            </Box>
          </Box>
          {/* Right: Animated Phones */}
          <Box flex={1} display="flex" justifyContent="center" alignItems="flex-start" sx={{ minWidth: 120, py: { xs: 2, md: 0 }, overflow: 'visible', position: 'relative' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'start',
                gap: { xs: 2, sm: 4, md: 8 },
                width: '100%',
                height: { xs: 160, sm: 220, md: 320 , lg: 450 },
                overflow: 'hidden',
                position: 'relative',
                mt: { xs: 0, md: 0, lg: 0 },
              }}
            >
              {/* First column */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1, sm: 2, md: 4 },
                  animation: 'colUpOnly 10s linear infinite alternate',
                }}
              >
                {[0, 0, 0].map((_, i) => (
                  <Box key={i} component="img" src={phoneImages[0]} alt="Phone 1" style={{ height: '200px'}} sx={{ width: { xs: 48, sm: 70, md: 90, lg: 110 }, height: { xs: 90, sm: 120, md: 200, lg: 260 }, borderRadius: 6, boxShadow: 3, objectFit: 'contain', display: 'block' }} />
                ))}
                {[0, 0, 0].map((_, i) => (
                  <Box key={i+3} component="img" src={phoneImages[1]} alt="Phone 2" style={{ height: '200px'}} sx={{ width: { xs: 48, sm: 70, md: 90, lg: 110 }, height: { xs: 90, sm: 120, md: 200, lg: 260 }, borderRadius: 6, boxShadow: 3, objectFit: 'contain', display: 'block' }} />
                ))}
              </Box>
              {/* Second column */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: { xs: 9, md: 9, lg: 9},
                  gap: { xs: 1, sm: 2, md: 4 },
                  animation: 'colUpOnly 10s linear infinite alternate',
                }}
              >
                {[0, 0, 0].map((_, i) => (
                  <Box  key={i} component="img" src={phoneImages[2]} alt="Phone 3"  style={{ height: '200px' }} sx={{ width: { xs: 48, sm: 70, md: 90, lg: 110 }, height: { xs: 90, sm: 120, md: 200, lg: 260 }, borderRadius: 6, boxShadow: 3, objectFit: 'contain', display: 'block' }} />
                ))}
                {[0, 0, 0].map((_, i) => (
                  <Box key={i+3} component="img" src={phoneImages[3]} alt="Phone 4" style={{ height: '200px'}} sx={{ width: { xs: 48, sm: 70, md: 90, lg: 110 }, height: { xs: 90, sm: 120, md: 200, lg: 260 }, borderRadius: 6, boxShadow: 3, objectFit: 'contain', display: 'block' }} />
                ))}
              </Box>
            </Box>
            <style>{`
              @keyframes colUpOnly {
                0% { transform: translateY(0); }
                100% { transform: translateY(-1000px); }
              }
              @keyframes colDownOnly {
                0% { transform: translateY(0); }
                100% { transform: translateY(400px); }
              }
            `}</style>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default AboutUs;
