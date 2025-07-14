import React from 'react';
import NavButton from './NavButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const navLinks = [
  { label: 'Home', section: '#home' },
  { label: 'About Us', section: '#about-us' },
  { label: 'Register Your Team', section: '#register-team' },
  { label: 'Star Performers', section: '#star-performers' },
  { label: 'Teams', section: '#teams' },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  // Scroll to section by id
  const handleNavClick = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full flex flex-nowrap items-center justify-between gap-x-2 px-0 md:px-0 lg:px-0 overflow-hidden" style={{ minHeight: 54, background: '#e9f1f6', paddingTop: '10px' }}>
      {/* Logo section */}
      <div className="flex items-center flex-shrink-0 mb-2 md:mb-0">
        <img
          src="/kfl-logo.png"
          alt="Logo"
          className="h-12 w-12 object-contain mr-2 md:mr-4"
          style={{ minWidth: 48, minHeight: 40 }}
        />
      </div>
      {/* Hamburger menu for mobile */}
      <div className="flex md:hidden ml-auto">
        <IconButton onClick={handleDrawerOpen} size="large" edge="end">
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>
      {/* Navigation buttons container - fit tightly around buttons */}
      <div className="hidden md:flex flex-nowrap items-center bg-white rounded-full shadow-sm h-[40px] md:h-[40px] lg:h-[46px] px-1 md:px-0 max-w-full md:ml-4" style={{overflow: 'hidden'}}>
        {navLinks.map((nav, idx) => (
          <NavButton
            key={nav.label}
            label={nav.label}
            customClass="rounded-full text-xs md:text-xs lg:text-base px-3 md:px-3 lg:px-5"
            href={nav.section}
          />
        ))}
      </div>
      {/* Action buttons - only show on md and up, never wrap below nav */}
      <div className="hidden md:flex flex-nowrap flex-row items-center gap-2 md:gap-2 lg:gap-4 mt-0">
        {/* Start Tax-Filing Button */}
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: 'linear-gradient(90deg, #2563eb 0%, #1e90ff 100%)',
            color: 'white',
            fontFamily: 'Clash Display, sans-serif',
            fontWeight: 400,
            fontSize: { xs: 13, md: 13, lg: 15 },
            borderRadius: '9999px',
            p: '6px !important',
            minWidth: { xs: 100, md: 100, lg: 140 },
            height: { xs: 36, md: 36, lg: 44 },
            display: 'flex',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              background: 'linear-gradient(90deg, #1e90ff 0%, #2563eb 100%)',
              boxShadow: 'none',
            },
          }}
          endIcon={
            <span className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white">
              <ChevronRightIcon sx={{ color: '#2563eb', fontSize: { xs: 20, md: 20, lg: 24 } }} />
            </span>
          }
        >
          Start Tax-Filing
        </Button>
        {/* Contact Us Button */}
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: '#222',
            color: 'white',
            fontFamily: 'Clash Display, sans-serif',
            fontWeight: 400,
            fontSize: { xs: 13, md: 13, lg: 15 },
            borderRadius: '9999px',
            p: '6px !important',
            minWidth: { xs: 90, md: 90, lg: 120 },
            height: { xs: 36, md: 36, lg: 44 },
            display: 'flex',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              background: '#111',
              boxShadow: 'none',
            },
          }}
          endIcon={
            <span className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white">
              <ChevronRightIcon sx={{ color: '#222', fontSize: { xs: 20, md: 20, lg: 24 } }} />
            </span>
          }
        >
          Contact Us
        </Button>
      </div>
      {/* Drawer for mobile nav */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <div className="w-64 p-4 flex flex-col gap-2" style={{ fontFamily: 'Clash Display, sans-serif' }}>
          <List>
            {navLinks.map((nav, idx) => (
              <ListItem key={nav.label} disablePadding>
                <ListItemButton onClick={() => { handleNavClick(nav.section); handleDrawerClose(); }}>
                  <ListItemText primary={nav.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
