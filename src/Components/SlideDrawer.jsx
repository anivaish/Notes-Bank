import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from 'react-responsive';


//imported components
import Navlist from './Navlist';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  border: 'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  border: 'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

var AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


AppBar = styled(AppBar)`
z-index:1201;
background-color:#fff;
height: 65px;
box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 22px;
  margin-left: 16px;
`;

const SlideDrawer = () => {
  
  // const open = !useMediaQuery({ query: `(max-width: 760px)` });
  const [open, setOpen] = React.useState(!useMediaQuery({ query: `(max-width: 600px)` })); 

  const handleDrawer = () => {
    setOpen(prevState => !prevState);
  };

  const logo = 'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png';

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar >
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: '10px',
              marginLeft: '-10px'
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }} />
          <Heading style={{ marginLeft: '10px', fontFamily: 'Poppins' }}>
            Notes Bank
          </Heading>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader ></DrawerHeader>
        <Navlist />
      </Drawer>
    </Box>
  );
}

export default SlideDrawer;