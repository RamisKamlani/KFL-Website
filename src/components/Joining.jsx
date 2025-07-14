import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

const steps = [
  {
    step: 'Step 01',
    title: 'Team Registration',
    desc: 'Begin by registering your football team on the KFL platform. Provide your team name, manager details, and contact information to get started.',
  },
  {
    step: 'Step 02',
    title: 'Player Enrollment',
    desc: 'Add your squad members by submitting player names, ages, and positions. Ensure all players meet the league eligibility criteria.',
  },
  {
    step: 'Step 03',
    title: 'Document Submission',
    desc: 'Upload required documents such as player IDs, team photo, and consent forms for league verification and approval.',
  },
  {
    step: 'Step 04',
    title: 'Confirmation & Kickoff',
    desc: 'Once your team and documents are verified, receive confirmation and get ready for the league kickoff! Stay tuned for schedules and updates.',
  },
];

function Joining() {
  return (
    <Box id="register-team" sx={{ width: '100%', minHeight: 520, height: 'auto', py: { xs: 4, md: 8 }, px: { xs: 0.5, sm: 1, md: 2 }, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', background: `url('/kfl-logo.png') center/cover no-repeat` }}>
      {/* Overlay for readability */}
      <Box sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', bgcolor: 'rgba(30, 58, 138, 0.75)', zIndex: 1, borderRadius: { xs: 0, md: 8 } }} />
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, mx: 'auto', px: { xs: 0.5, sm: 1, md: 2, lg: 4 } }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, color: '#e9f1f6', fontSize: 16 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)',
            border: '1.5px solid #e9f1f6',
            borderRadius: 9999,
            padding: '4px 18px',
            fontWeight: 500,
            color: '#fff',
          }}>How to Join the League</span>
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, mb: 3, color: '#fff', fontSize: { xs: 20, sm: 26, md: 32, lg: 38 }, textShadow: '0 2px 16px rgba(0,0,0,0.25)' }}>
          Register Your Football Team for KFL<br />Follow These Simple Steps
        </Typography>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
          {steps.map((step, idx) => (
            <Paper key={idx} elevation={2} sx={{
              flex: 1,
              borderRadius: 5,
              p: { xs: 2, sm: 3 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minWidth: 0,
              minHeight: { xs: 160, sm: 200, md: 220 },
              maxWidth: { xs: '100%', sm: 320 },
              background: 'rgba(255,255,255,0.92)',
              boxShadow: 2,
            }}>
              <Box display="flex" alignItems="center" mb={1}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb', mr: 1 }} />
                <Typography variant="subtitle2" sx={{ color: '#222', fontWeight: 600, fontSize: { xs: 12, sm: 13 } }}>{step.step}</Typography>
              </Box>
              <Typography variant="h6" sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, mb: 0.5, fontSize: { xs: 14, sm: 16, md: 18 }, color: '#1e3a8a' }}>{step.title}</Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#222', fontSize: { xs: 11, sm: 13, md: 14 } }}>{step.desc}</Typography>
              <Box flexGrow={1} />
              <Button variant="contained" sx={{ background: '#2563eb', color: '#fff', borderRadius: '50%', minWidth: 32, minHeight: 32, boxShadow: 1, alignSelf: 'flex-end', p: 0, '&:hover': { background: '#1e3a8a', boxShadow: 1 }, fontSize: { xs: 16, sm: 18 } }}>
                <span style={{ fontSize: 16, fontWeight: 700 }}>&rarr;</span>
              </Button>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Joining;
