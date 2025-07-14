import React from 'react';
import { Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Team from './Team';

const faqs = [
  {
    q: 'How do I register my team for the Karachi Football League?',
    a: 'You can register your team by following the steps in the “How to Join” section. Fill out the registration form, add your players, and submit the required documents.'
  },
  {
    q: 'What are the eligibility requirements for players?',
    a: 'Players must meet the age and residency requirements set by the league. All players must provide valid identification and consent forms.'
  },
  {
    q: 'Is there a registration fee for the league?',
    a: 'Yes, there is a nominal registration fee per team. Details are provided during the registration process.'
  },
  {
    q: 'How can I get updates about match schedules?',
    a: 'All match schedules and updates are available in the KFL app and will be sent via notifications to registered users.'
  },
  {
    q: 'Who do I contact for support or queries?',
    a: 'You can reach out to the KFL support team via the app or the contact form on our website.'
  },
];

function Questions() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, py: { xs: 6, md: 10 }, px: { xs: 1, md: 0 }, justifyContent: 'center', alignItems: 'stretch' }}>
      {/* Left: FAQ */}
      <Paper elevation={6} sx={{ flex: 2, minWidth: 320, borderRadius: 6, p: { xs: 3, md: 5 }, background: '#fff', color: '#222', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, color: '#2563eb', fontSize: 18 }}>
          <span style={{
            display: 'inline-block',
            background: '#f8fafc',
            border: '1.5px solid #2563eb',
            borderRadius: 9999,
            padding: '4px 18px',
            fontWeight: 500,
            color: '#2563eb',
          }}>Frequently Asked Questions</span>
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, mb: 3, fontSize: { xs: 22, md: 32 } }}>
          League FAQs<br />Answered with Clarity
        </Typography>
        {faqs.map((faq, idx) => (
          <Accordion key={idx} sx={{ width: '100%', background: '#f8fafc', mb: 2, borderRadius: 6, boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: 600, fontSize: 18 }}>
              {faq.q}
            </AccordionSummary>
            <AccordionDetails sx={{ color: '#222', fontSize: 16 }}>
              {faq.a}
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
      {/* Right: Team Member */}
      <Box sx={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Team />
      </Box>
    </Box>
  );
}

export default Questions;
