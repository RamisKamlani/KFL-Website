import React from 'react';
import { Box, Typography, Paper, Button, Avatar, AvatarGroup } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const reviews = [
  {
    name: 'Ali Raza',
    avatar: '/avatar1.png',
    rating: 5,
    text: "The Karachi Football League is an amazing platform for local talent. The matches are well organized and the app keeps us updated with live stats!",
  },
  {
    name: 'Sana Ahmed',
    avatar: '/avatar2.png',
    rating: 5,
    text: "Loved the energy and the competition. Registering our team was super easy and the whole experience was fantastic.",
  },
  {
    name: 'Bilal Khan',
    avatar: '/avatar3.png',
    rating: 5,
    text: "Great exposure for young players. The league management is very professional and the app is a game changer for fans and teams alike.",
  },
];

function Reviews() {
  return (
    <Box  sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, py: { xs: 6, md: 10 }, px: { xs: 1, md: 0 }, justifyContent: 'center', alignItems: 'stretch'  }}>
      {/* Left Card: Heading and summary */}
      <Paper elevation={6} sx={{ flex: 1, minWidth: 320, maxWidth: 420, background: '#2563eb', color: '#fff', borderRadius: 6, p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, color: '#e9f1f6', fontSize: 18 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)',
            border: '1.5px solid #e9f1f6',
            borderRadius: 9999,
            padding: '4px 18px',
            fontWeight: 500,
            color: '#fff',
          }}>League Reviews</span>
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, mb: 3, fontSize: { xs: 24, md: 32 } }}>
          Reviews About the League
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <AvatarGroup max={5}>
            <Avatar src="/avatar1.png" alt="Ali Raza" />
            <Avatar src="/avatar2.png" alt="Sana Ahmed" />
            <Avatar src="/avatar3.png" alt="Bilal Khan" />
            <Avatar sx={{ bgcolor: '#fff', color: '#2563eb', fontWeight: 700 }}>100+</Avatar>
          </AvatarGroup>
        </Box>
        <Typography sx={{ fontSize: 16, color: '#e9f1f6', fontWeight: 400 }}>
          More than 100+ Positive Reviews
        </Typography>
      </Paper>
      {/* Review Cards */}
      {reviews.map((review, idx) => (
        <Paper key={idx} elevation={3} sx={{ flex: 1, minWidth: 320, maxWidth: 420, borderRadius: 6, p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', background: '#f8fafc' }}>
          <Box display="flex" alignItems="center" mb={1}>
            <Box sx={{ fontWeight: 700, fontSize: 22, color: '#222', mr: 1 }}>KFL</Box>
            {[...Array(review.rating)].map((_, i) => (
              <StarIcon key={i} sx={{ color: '#fbbf24', fontSize: 20, ml: 0.2 }} />
            ))}
            <Typography sx={{ ml: 1, fontWeight: 600, color: '#222', fontSize: 18 }}>{review.rating}.0</Typography>
          </Box>
          <Avatar src={review.avatar} alt={review.name} sx={{ width: 56, height: 56, borderRadius: 2, mb: 2 }} />
          <Typography sx={{ fontSize: 17, color: '#222', mb: 3, fontFamily: 'Clash Display, sans-serif' }}>
            {review.text}
          </Typography>
          <Typography sx={{ fontWeight: 600, color: '#222', fontSize: 16 }}>{review.name}</Typography>
          <Typography sx={{ color: '#666', fontSize: 15, mb: 2 }}>League Participant</Typography>
          <Box flexGrow={1} />
          <Button variant="contained" sx={{ background: '#2563eb', color: '#fff', borderRadius: '50%', minWidth: 44, minHeight: 44, boxShadow: 1, alignSelf: 'flex-end', p: 0, '&:hover': { background: '#1e3a8a', boxShadow: 1 } }}>
            <span style={{ fontSize: 22, fontWeight: 700 }}>&rarr;</span>
          </Button>
        </Paper>
      ))}
    </Box>
  );
}

export default Reviews;
