import Button from '@mui/material/Button';

// Reusable navigation button component
function NavButton({ label, active, variant = 'default', customClass = '', href }) {
  let style = {};
  let hover = {};
  // Set fixed height and min-width for each button to 44px
  let baseSx = {
    fontFamily: 'Clash Display, sans-serif',
    fontWeight: 400,
    fontSize: 15,
    minWidth: 90,
    height: 44,
    borderRadius: '9999px',
    px: variant === 'blue' || variant === 'dark' ? 2.5 : 1.5,
    textTransform: 'none',
    boxShadow: 'none',
    transition: 'background 0.2s',
  };
  if (variant === 'blue') {
    style = {
      background: 'linear-gradient(90deg, #2563eb 0%, #1e90ff 100%)',
      color: 'white',
      ...baseSx,
      '&:hover': {
        background: 'linear-gradient(90deg, #1e90ff 0%, #2563eb 100%)',
        boxShadow: 'none',
      },
    };
  } else if (variant === 'dark') {
    style = {
      background: '#222',
      color: 'white',
      ...baseSx,
      '&:hover': {
        background: '#111',
        boxShadow: 'none',
      },
    };
  } else {
    style = {
      background: 'transparent',
      color: '#222',
      ...baseSx,
      '&:hover': {
        background: '#222',
        color: 'white',
        boxShadow: 'none',
      },
    };
  }
  return (
    <Button href={href} component="a" variant="contained" disableElevation sx={style} className={customClass}>
      {label}
    </Button>
  );
}

export default NavButton;