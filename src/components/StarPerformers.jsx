import React from 'react';
import { Box, Typography, Paper, Button, useTheme } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

// Custom SVGs for Golden Boot and Glove
const GoldenBootIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 36c0-2 1-4 3-5l10-5 7-13c1-2 4-2 5 0l2 4c1 2 0 4-2 5l-5 2 2 4 7 2c2 1 3 3 2 5l-1 3c-1 2-3 3-5 3H13c-3 0-5-2-5-5z" fill="#FFD700" stroke="#B8860B" strokeWidth="2"/>
  </svg>
);
const GloveIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="8" width="8" height="20" rx="4" fill="#e0e0e0" stroke="#1976d2" strokeWidth="2"/>
    <rect x="28" y="12" width="8" height="16" rx="4" fill="#e0e0e0" stroke="#1976d2" strokeWidth="2"/>
    <rect x="8" y="12" width="8" height="16" rx="4" fill="#e0e0e0" stroke="#1976d2" strokeWidth="2"/>
    <rect x="13" y="28" width="22" height="10" rx="5" fill="#e0e0e0" stroke="#1976d2" strokeWidth="2"/>
  </svg>
);

const cards = [
  {
    icon: <GoldenBootIcon />,
    title: 'Golden Boot - Sheheryar Khan',
    desc: 'Scoring a Whopping 12 Goals in Season 1, Sheheryar Khan has been a standout performer, showcasing exceptional skill and determination on the field.',
  },
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 48, color: '#2563eb' }} />,
    title: 'MVP -Uzair Zaidi',
    desc: 'Having a significant impact on the IOBM FC success, Uzair Zaidi has been recognized as the Most Valuable Player of Season 1.',
  },
  {
    icon: <GloveIcon />,
    title: 'Golden Glove - Mutasim Khan',
    desc: 'With an outstanding performance in goal keeping 4 cleansheets, Mutasim Khan has been awarded the Golden Glove for his exceptional saves and leadership in defense.',
  },
];

function StarPerformers() {
  const theme = useTheme();
  return (
    <Box id="star-performers"  width="100%" display="flex" justifyContent="center" alignItems="center" sx={{ background: '#e9f1f6', py: { xs: 6 , md: 2 } }}>
      <Paper elevation={6} className="flex-1" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', width: '100%', overflow: 'hidden', position: 'relative', minHeight: { xs: 320, md: 320 }, height: { xs: 'auto', md: 360, lg: 500}, boxShadow: 6, borderRadius: 6, background: '#1e3a8a' , p:0  }}>
        <Box maxWidth={1000} mx="auto" px={{ xs: 1, md: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, color: '#e9f1f6', fontSize: 16 }}>
            <span style={{
              display: 'inline-block',
              background: '#2563eb',
              border: '1.5px solid #e9f1f6',
              borderRadius: 9999,
              padding: '4px 18px',
              fontWeight: 500,  
              color: '#fff',
            }}>Star Performers</span>
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, mb: 3, color: '#fff', fontSize: { xs: 20, md: 28, lg: 36 } }}>
            Our Star Performers<br />
            From Season 1
          </Typography>
          <Box display="flex" justifyContent="flex-end" mb={3}>
            <Button variant="contained" sx={{ background: '#fff', color: '#1e3a8a', borderRadius: 9999, px: 3, py: 1, fontSize: 15, fontWeight: 500, textTransform: 'none', boxShadow: 'none', '&:hover': { background: '#e9f1f6', color: '#1e3a8a', boxShadow: 'none' } }}>
              Discover More
            </Button>
          </Box>
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
            {cards.map((card, idx) => {
              // Define links for each card
              const links = [
                'https://www.instagram.com/karachi_football_league/p/C-snRtAIbWl/?hl=en', // Golden Boot
                'https://www.instagram.com/karachi_football_league/p/C-sulEsowC0/?hl=en', // MVP (replace with correct link)
                'https://www.instagram.com/karachi_football_league/p/C-sY4DyoDrF/?hl=en', // Golden Glove (replace with correct link)
              ];
              return (
                <Paper key={idx} elevation={2} sx={{
                  flex: 1,
                  borderRadius: 5,
                  p: { xs: 1.5, sm: 2 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  minWidth: 0,
                  minHeight: { xs: 120, sm: 160, md: 180 },
                  maxWidth: { xs: '100%', sm: 300 },
                  background: '#fff',
                  boxShadow: 1,
                }}>
                  <Box mb={1}>{card.icon}</Box>
                  <Typography variant="subtitle1" sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, mb: 0.5, fontSize: { xs: 13, sm: 15, md: 17 }, color: '#1e3a8a' }}>{card.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#222', fontSize: { xs: 11, sm: 13, md: 14 } }}>{card.desc}</Typography>
                  <Box flexGrow={1} />
                  <Button variant="contained" sx={{ background: '#1e3a8a', color: '#fff', borderRadius: '50%', minWidth: 28, minHeight: 28, boxShadow: 1, alignSelf: 'flex-end', p: 0, '&:hover': { background: '#2563eb', boxShadow: 1 }, fontSize: { xs: 14, sm: 16 } }}
                    onClick={() => window.open(links[idx], '_blank')}>
                    <span style={{ fontSize: 14, fontWeight: 700 }}>&rarr;</span>
                  </Button>
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default StarPerformers;
