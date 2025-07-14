import React from 'react';
import { AppBar, Toolbar, Button, MenuItem, Select, FormControl, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Menu, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PublicIcon from '@mui/icons-material/Public';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  const [location, setLocation] = React.useState('New York');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearchOpen = () => setSearchOpen(true);
  const handleSearchClose = () => setSearchOpen(false);
  const handleSearchInput = (e) => setSearchText(e.target.value);
  const handleSearchSubmit = () => {
    // You can handle the search logic here
    setSearchOpen(false);
    setSearchText('');
  };

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);
  const handleMenuSelect = (city) => {
    setLocation(city);
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#262827;', boxShadow: 'none', height: 35, minHeight: 35, display: 'flex', justifyContent: 'center' }}>
      <Toolbar  variant='dense' disableGutters className="flex justify-between min-h-0" sx={{ minHeight: 35, height: 35, paddingY: 0, pl: 0, pr: 0 }}>
        {/* Left: Global and Location Button (always visible) */}
        <Box className="flex items-center" sx={{ minHeight: 35, display: 'flex' }}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #2563eb 0%, #1e90ff 100%)',
              transform: 'rotate(180deg)', // flip entire button (background)
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: 13,
              minHeight: 28,
              borderRadius: '20px 0 0 20px',
              px: '24px',
              boxShadow: 'none',
              '&:hover': {
                background: 'linear-gradient(90deg, #1e90ff 0%, #2563eb 100%)',
                boxShadow: 'none',
              },
            }}
          >
            {/* Flip inner content back */}
            <Box sx={{ display: 'flex', alignItems: 'center', transform: 'rotate(180deg)' }}>
              <PublicIcon sx={{ fontSize: 16 }} />
              <Box component="span" sx={{ ml: 1 , fontSize: 13, fontWeight: '400' }}> {/* Match font size with Global */}
                Global
              </Box>
            </Box>
          </Button>
          <Button
            variant="text"
            endIcon={<KeyboardArrowDownIcon sx={{ color: 'white', fontSize: 16 }} />}
            onClick={handleMenuOpen}
            sx={{
              color: 'white',
              fontWeight: '400',
              textTransform: 'none',
              fontSize: 13, // Make font size match Global
              minHeight: 28,
              borderRadius: '0 20px 20px 0',
              px: "10px",
              py: 0,
              ml: 0,
              background: 'transparent',
              whiteSpace: 'nowrap', // Prevent wrapping
              '&:hover': {
                background: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            Change Location
          </Button>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            PaperProps={{ sx: { mt: 1, minWidth: 160, fontFamily: 'Clash Display, sans-serif' } }}
          >
            {['New York', 'London', 'Tokyo', 'Dubai'].map((city) => (
              <MenuItem
                key={city}
                selected={location === city}
                onClick={() => handleMenuSelect(city)}
                sx={{ fontFamily: 'Clash Display, sans-serif', fontSize: 13 }}
              >
                {city}
              </MenuItem>
            ))}
          </Menu>
          <Box sx={{ width: 0.0003, height: 38, bgcolor: '#fff' , opacity:0.5 }} />
        </Box>

        {/* Right: Search and Contact */}   
        {/* Desktop: show both buttons, mobile: only icons */}
        <Box className="flex items-center space-x-2" sx={{ minHeight: 35 }}>
          {/* Line before Contact (desktop only) */}
          <Box sx={{ width: 0.0003, height: 38, bgcolor: '#fff' , opacity:0.5, display: { xs: 'none', sm: 'block' } }} />
          {/* Contact button (desktop) */}
          <Button
            variant="text" 
            startIcon={<MailOutlineIcon sx={{ fontSize: 13 }} />} 
            sx={{ color: 'white', fontWeight: '400', textTransform: 'none', fontSize: 13, minHeight: 28, paddingY: 0, px: '30px', display: { xs: 'none', sm: 'flex' }, '&:hover': { color: '#e5e5e5' } }}
          >
            Contact
          </Button>
          {/* Contact icon (mobile) */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'inline-flex', sm: 'none' }, p: 0.5 }}
            aria-label="contact"
          >
            <MailOutlineIcon sx={{ fontSize: 18 }} />
          </IconButton>
          {/* Line after Contact (desktop only) */}
          <Box sx={{ width: 0.0003, height: 38, bgcolor: '#fff', opacity:0.5, display: { xs: 'none', sm: 'block' } }} />
          {/* Search button (desktop) */}
          <Button
            
            variant="text"
            startIcon={<SearchIcon sx={{ fontSize: 13 }} />}
            sx={{ color: 'white', fontWeight: '400', textTransform: 'none', fontSize: 13, minHeight: 28, paddingY: 0,  px: '30px', display: { xs: 'none', sm: 'flex' }, '&:hover': { color: '#e5e5e5' } }}
            onClick={handleSearchOpen}
          >
            Search
          </Button>
          {/* Search icon (mobile) */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'inline-flex', sm: 'none' }, p: 0.5, ml: 1 }}
            aria-label="search"
            onClick={handleSearchOpen}
          >
            <SearchIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Toolbar>
      <Dialog open={searchOpen} onClose={handleSearchClose} maxWidth="xs" fullWidth>
        <DialogTitle>Search</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Enter search text"
            type="text"
            fullWidth
            value={searchText}
            onChange={handleSearchInput}
            onKeyDown={e => { if (e.key === 'Enter') handleSearchSubmit(); }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSearchClose} color="secondary">Cancel</Button>
          <Button onClick={handleSearchSubmit} variant="contained">Search</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default Header;
