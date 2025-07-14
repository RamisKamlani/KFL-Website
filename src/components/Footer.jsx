import React from 'react';
import { Box, Typography, Button, TextField, IconButton, Paper, InputAdornment } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box sx={{ width: '100%', background: '#0a2540', pt: 6, pb: 2, px: { xs: 1, md: 0 } }}>
      <Box sx={{ maxWidth: 1600, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'space-between', alignItems: 'stretch', px: { xs: 1, md: 2 } }}>
        {/* Newsletter & Social */}
        <Paper elevation={0} sx={{ flex: 2, background: 'linear-gradient(135deg, #0a2540 80%, #17497c 100%)', color: '#fff', borderRadius: 6, p: { xs: 3, md: 5 }, minWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box display="flex" alignItems="center" mb={2}>
            <Box component="img" src="/kfl-logo.png" alt="KFL Logo" sx={{ height: 48, width: 'auto', mr: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'Clash Display, sans-serif' }}>Karachi Football League</Typography>
          </Box>
          <Typography sx={{ mb: 2, fontSize: 18, fontWeight: 400 }}>
            Sign up to our newsletter for the latest news and updates about the league
          </Typography>
          <Box display="flex" alignItems="center" mb={3}>
            <TextField
              variant="outlined"
              placeholder="Enter Email Address"
              size="small"
              sx={{
                bgcolor: '#0a2540',
                borderRadius: 9999,
                input: { color: '#fff', fontSize: 16 },
                mr: 2,
                flex: 1,
                '& fieldset': { borderColor: '#2563eb' },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" sx={{ background: '#2563eb', color: '#fff', borderRadius: 9999, px: 4, fontWeight: 500, textTransform: 'none', boxShadow: 'none', '&:hover': { background: '#17497c' } }}>
                      Submit
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display="flex" gap={2}>
            <IconButton sx={{ bgcolor: '#17497c', color: '#fff', borderRadius: 2, p: 1.5, '&:hover': { bgcolor: '#2563eb' } }}><FacebookIcon fontSize="large" /></IconButton>
            <IconButton
              sx={{ bgcolor: '#17497c', color: '#fff', borderRadius: 2, p: 1.5, '&:hover': { bgcolor: '#2563eb' } }}
              onClick={() => window.open('https://www.instagram.com/karachi_football_league/?hl=en', '_blank')}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ bgcolor: '#17497c', color: '#fff', borderRadius: 2, p: 1.5, '&:hover': { bgcolor: '#2563eb' } }}><TwitterIcon fontSize="large" /></IconButton>
          </Box>
        </Paper>
        {/* Company Links */}
        <Paper elevation={0} sx={{ flex: 1, background: 'linear-gradient(135deg, #0a2540 80%, #17497c 100%)', color: '#fff', borderRadius: 6, p: { xs: 3, md: 5 }, minWidth: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Clash Display, sans-serif' }}>Company</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>About League</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>Teams</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>Fixtures</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>Contact Us</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>FAQs</Typography>
        </Paper>
        {/* Services Links */}
        <Paper elevation={0} sx={{ flex: 1, background: 'linear-gradient(135deg, #0a2540 80%, #17497c 100%)', color: '#fff', borderRadius: 6, p: { xs: 3, md: 5 }, minWidth: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Clash Display, sans-serif' }}>Quick Links</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>Register Team</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>Live Scores</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>League Table</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>Star Performers</Typography>
          <Typography sx={{ mb: 1, fontSize: 17, cursor: 'pointer' }}>Gallery</Typography>
        </Paper>
      </Box>
      {/* Copyright and bottom links */}
      <Box sx={{ maxWidth: 1600, mx: 'auto', mt: 4, pt: 2, borderTop: '1px solid #17497c', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', color: '#e9f1f6', fontSize: 15, px: { xs: 2, md: 0 } }}>
        <Typography sx={{ mb: { xs: 1, md: 0 } }}>
          Copyright {new Date().getFullYear()}, Karachi Football League. All Rights Reserved
        </Typography>
        <Box display="flex" gap={2}>
          <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }}>Privacy Policy</Typography>
          <Typography sx={{ cursor: 'pointer', textDecoration: 'underline' }}>Terms & Conditions</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
