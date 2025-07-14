import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

function Team() {
  return (
    <>
      <Paper elevation={6} sx={{ borderRadius: 6, p: { xs: 3, md: 4 }, background: '#f8fafc', color: '#222', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 500, color: '#2563eb', fontSize: 18, mb: 1 }}>
          <span style={{
            display: 'inline-block',
            background: '#fff',
            border: '1.5px solid #2563eb',
            borderRadius: 9999,
            padding: '4px 18px',
            fontWeight: 500,
            color: '#2563eb',
          }}>Meet Our Team</span>
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, fontSize: { xs: 20, md: 28 } }}>
          Our Expert Team
        </Typography>
      </Paper>
      <Paper elevation={4} sx={{ borderRadius: 6, overflow: 'hidden', p: 0, background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', minHeight: 340, position: 'relative' }}>
        <Box component="img" src="/team-member1.jpg" alt="Team Member" sx={{ width: '100%', height: 320, objectFit: 'cover' }} />
        <Box sx={{ position: 'absolute', left: 0, bottom: 0, width: '100%', p: 2, background: 'linear-gradient(0deg, rgba(30,58,138,0.85) 60%, rgba(30,58,138,0.0) 100%)' }}>
          <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, fontFamily: 'Clash Display, sans-serif' }}>Sarah Ahmed</Typography>
          <Typography sx={{ color: '#e9f1f6', fontSize: 16 }}>League Coordinator</Typography>
        </Box>
      </Paper>
    </>
  );
}

export default Team;
