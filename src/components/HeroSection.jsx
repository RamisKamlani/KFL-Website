import React from 'react';
import HeroCard from './HeroCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';

function HeroSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" sx={{ background: '#e9f1f6'}}>
      <Box
        width="100%"
        maxWidth={1800}
        mx="auto"
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={6}
        px={{ xs: 0, sm: 0, md: 0, lg: 0 }}
        pt={6}
        minHeight={{ xs: 320, sm: 350, md: 400, lg: 400 }}
        height={{ xs: 340, sm: 380, md: 440, lg: 500 }}
      >
        {/* Left Hero Card */}
        <HeroCard className="flex-1" rounded>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height={{ xs: 340, sm: 380, md: 440, lg: 500 }}
            minHeight={{ xs: 320, sm: 350, md: 400, lg: 400 }}
            p={{ xs: 2, sm: 3, md: 4, lg: 6 }}
            position="relative"
            overflow="hidden"
          >
            {isXs && (
              <Box
                component="img"
                src="/kfl-logo.png"
                alt="KFL Logo"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '40px',
                  opacity: 0.13,
                  zIndex: 0,
                }}
              />
            )}
            <Box zIndex={1} position="relative">
              <Typography
                variant="h1"
                fontWeight={700}
                mb={3}
                sx={{
                  fontFamily: 'Clash Display, sans-serif',
                  fontSize: { xs: 18, sm: 22, md: 28, lg: 36 },
                  lineHeight: 1.1,
                  textAlign: isXs ? 'center' : 'left',
                }}
              >
                Karachi's First Ever Football League,<br />Breaking Boundaries beyond<br />A platform for all to shine
              </Typography>
              <Typography
                variant="body1"
                mb={4}
                sx={{
                  fontFamily: 'Clash Display, sans-serif',
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
                  textAlign: isXs ? 'center' : 'left',
                }}
              >
                Karachi Football League is the city's premier football competition, uniting players from all backgrounds to compete, connect, and celebrate the spirit of the game.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: '#222',
                  color: 'white',
                  borderRadius: '9999px',
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 0.5, sm: 1, md: 1.5 },
                  fontSize: { xs: 13, sm: 15, md: 18, lg: 20 },
                  fontWeight: 500,
                  fontFamily: 'Clash Display, sans-serif',
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': { background: '#111', boxShadow: 'none' },
                  width: 'fit-content',
                  mx: isXs ? 'auto' : (isSm ? 'auto' : undefined), // Center on xs and sm, left otherwise
                  display: 'block',
                }}
              >
                Discover More
              </Button>
              {isXs && (
                <Box mt={3} display="flex" flexDirection="column" gap={2} alignItems="center">
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(90deg, #2563eb 0%, #1e90ff 100%)',
                      color: 'white',
                      borderRadius: '9999px',
                      px: 2,
                      py: 1,
                      fontSize: 13,
                      fontWeight: 500,
                      fontFamily: 'Clash Display, sans-serif',
                      textTransform: 'none',
                      boxShadow: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      width: 'fit-content',
                      '&:hover': { background: 'linear-gradient(90deg, #1e90ff 0%, #2563eb 100%)' },
                    }}
                    endIcon={
                      <Box display="flex" alignItems="center" justifyContent="center" width={32} height={32} borderRadius="50%" bgcolor="#fff">
                        <ChevronRightIcon sx={{ color: '#2563eb', fontSize: 20 }} />
                      </Box>
                    }
                  >
                    Click to See This Seasons Stats
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(90deg, #e5e7eb 0%, #fff 100%)',
                      color: '#222',
                      borderRadius: '9999px',
                      px: 2,
                      py: 1,
                      fontSize: 13,
                      fontWeight: 500,
                      fontFamily: 'Clash Display, sans-serif',
                      textTransform: 'none',
                      boxShadow: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      width: 'fit-content',
                      '&:hover': { background: 'linear-gradient(90deg, #fff 0%, #e5e7eb 100%)' },
                    }}
                    endIcon={
                      <Box display="flex" alignItems="center" justifyContent="center" width={32} height={32} borderRadius="50%" bgcolor="#fff">
                        <ChevronRightIcon sx={{ color: '#222', fontSize: 20 }} />
                      </Box>
                    }
                  >
                    Download Our Mobile App
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </HeroCard>
        {/* Right Hero Card */}
        {!isXs && (
          <HeroCard className="flex-1 flex items-center justify-center relative min-h-[320px]" rounded>
            <Box
              position="relative"
              width="100%"
              height={{ xs: 340, sm: 380, md: 440, lg: 500 }}
              minHeight={{ xs: 320, sm: 350, md: 400, lg: 400 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                src="/kfl-logo.png"
                alt="KFL Logo"
                sx={{
                  width: { xs: 120, sm: 400, md: 560, lg: 730 },
                  height: { xs: 120, sm: 400, md: 400, lg: 450 },
                  objectFit: 'contain',
                  borderRadius: '40px',
                  background: 'white',
                  boxShadow: 2,
                }}
              />
              {/* Overlayed Buttons */}
              <Box
                position="absolute"
                bottom={{ xs: 16, sm: 24, md: 32, lg: 48 }}
                right={{ xs: 16, sm: 24, md: 32, lg: 48 }}
                display="flex"
                flexDirection="column"
                gap={2}
                alignItems="end"
              >
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #2563eb 0%, #1e90ff 100%)',
                    color: 'white',
                    borderRadius: '9999px',
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 1, sm: 1.5, md: 2 },
                    fontSize: { xs: 13, sm: 15, md: 18, lg: 20 },
                    fontWeight: 500,
                    fontFamily: 'Clash Display, sans-serif',
                    textTransform: 'none',
                    boxShadow: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    width: 'fit-content',
                    '&:hover': { background: 'linear-gradient(90deg, #1e90ff 0%, #2563eb 100%)' },
                  }}
                  endIcon={
                    <Box display="flex" alignItems="center" justifyContent="center" width={32} height={32} borderRadius="50%" bgcolor="#fff">
                      <ChevronRightIcon sx={{ color: '#2563eb', fontSize: { xs: 20, sm: 24, md: 28 } }} />
                    </Box>
                  }
                >
                  Click to See This Seasons Stats
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #e5e7eb 0%, #fff 100%)',
                    color: '#222',
                    borderRadius: '9999px',
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 1, sm: 1.5, md: 2 },
                    fontSize: { xs: 13, sm: 15, md: 18, lg: 20 },
                    fontWeight: 500,
                    fontFamily: 'Clash Display, sans-serif',
                    textTransform: 'none',
                    boxShadow: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    width: 'fit-content',
                    '&:hover': { background: 'linear-gradient(90deg, #fff 0%, #e5e7eb 100%)' },
                  }}
                  endIcon={
                    <Box display="flex" alignItems="center" justifyContent="center" width={32} height={32} borderRadius="50%" bgcolor="#fff">
                      <ChevronRightIcon sx={{ color: '#222', fontSize: { xs: 20, sm: 24, md: 28 } }} />
                    </Box>
                  }
                >
                  Download Our Mobile App
                </Button>
              </Box>
            </Box>
          </HeroCard>
        )}
      </Box>
    </Box>
  );
}

export default HeroSection;