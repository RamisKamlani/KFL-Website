import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

// Example logos (replace with your actual logo paths)
const logos = [
  '/dota.png', 'fast.png', '/fcrizvia.png', '/folio3.png',
  '/iobm.png', '/titans.png', '/spartans.png', 
  '/streetrover.png', '/anas11.png', '/berzerk.png'
];

function BelowAbout() {
  return (
    <Box id='teams' width="100%" display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={6} py={{ xs: 1, md: 1 }}>
      {/* Left Card */}
      <Paper
        elevation={6}
        sx={{
          borderRadius: 6,
          flexBasis: { xs: '100%', md: '30%' },
          flexGrow: 0,
          flexShrink: 0,
          width: { xs: '100%', md: '30%' },
          maxWidth: { xs: '100%', md: '60%' },
          minWidth: 320,
          minHeight: 180,
          height: { xs: 'auto', md: 250 },
          background: 'linear-gradient(135deg, #2196f3 0%, #2563eb 100%)', // blue gradient
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 3, md: 5 },
          boxShadow: 6,
        }}
      >
        <Typography variant="h5" fontWeight={700} sx={{ fontFamily: 'Clash Display, sans-serif', mb: 2, fontSize: { xs: 18, md: 24, lg: 28 }, textAlign: 'left', width: '100%' }}>
          Our Teams From Season 1
        </Typography>
        <Box mt={2} mb={3} display="flex" flexDirection="row" alignItems="center" width="100%" justifyContent="space-between">
          <Box sx={{ border: '1.5px solid #fff', borderRadius: '9999px', px: 4, py: 1.5, fontWeight: 700, fontSize: 26, background: 'rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', minWidth: 0 }}>
            200+ <span style={{ fontWeight: 400, fontSize: 18, marginLeft: 8 }}>Players</span>
          </Box>
          <Button variant="contained" sx={{
            background: 'white',
            color: '#2563eb',
            borderRadius: '50%',
            minWidth: 56,
            minHeight: 56,
            boxShadow: 2,
            p: 0,
            ml: 2,
            border: '6px solid #e3edfa',
            transition: 'box-shadow 0.2s',
            '&:hover': { background: '#e3edfa', color: '#2563eb', boxShadow: 4 },
          }}>
            <span style={{ fontSize: 28, fontWeight: 700 }}>&rarr;</span>
          </Button>
        </Box>
      </Paper>
      {/* Right Card: Animated logo rows */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: 6,
          flexBasis: { xs: '100%', md: '70%' },
          flexGrow: 0,
          flexShrink: 0,
          width: { xs: '100%', md: '70%' },
          maxWidth: { xs: '100%', md: '66.5%' },
          minWidth: 220,
          minHeight: 240,
          height: { xs: 'auto', md: 260 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 4, md: 6 },
          background: '#f8fafc',
        }}
      >
        <Box display="flex" flexDirection="column" gap={5} width={{ xs: '110%', md: '110%' }}>
          {/* Row 1: moves left */}
          <Box sx={{ width: { xs: '100%', md: '100%' }, overflow: 'hidden', position: 'relative', height: 80 }}>
            <Box sx={{ display: 'flex', gap: 8, width: 'max-content', animation: 'logosLeft 16s linear infinite' }}>
              {[...logos, ...logos].map((src, idx) => (
                <Box key={src+idx} component="img" src={src} alt="logo"  sx={{ height: 80, width: 'auto', borderRadius: 4, background: '#fff', px: 4, py: 2, boxShadow: 2, border: '2px solid #e5e7eb' }} />
              ))}
            </Box>
          </Box>
          {/* Row 2: moves right */}
          <Box sx={{ width: { xs: '100%', md: '100%' }, overflow: 'hidden', position: 'relative', height: 100 }}>
            <Box sx={{ display: 'flex', gap: 8, width: 'max-content', animation: 'logosRight 16s linear infinite' }}>
              {[...logos, ...logos].map((src, idx) => (
                <Box key={src+idx} component="img" src={src} alt="logo" sx={{ height: 80, width: 'auto', borderRadius: 4, background: '#fff', px: 4, py: 2, boxShadow: 2, border: '2px solid #e5e7eb' }} />
              ))}
            </Box>
          </Box>
        </Box>
        <style>{`
          @keyframes logosLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes logosRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </Paper>
    </Box>
  );
}

export default BelowAbout;
