import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import { Avatar, Box, styled, Typography } from '@mui/material';
import  MuiDrawer  from '@mui/material/Drawer';
import { useTheme } from '@emotion/react';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleOutlined, PersonOutlined, PieChartOutlineOutlined, ReceiptLongOutlined, TimelineOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const drawerWidth = 240;
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
const closedMixin = (theme) => ({
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const array1 = [
  { text: "Dashboard", icon: <HomeOutlined/>, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlined />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlined />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptLongOutlined />,
    path: "/invoices",
  },
];

const array2 = [
  { text: "Profile Form", icon: <PersonOutlined />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    path: "/faq",
  },
];

const array3 = [
  { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlined />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
];

const SideBar = ({open , handleDrawerClose}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>

    <Divider />
  <Avatar sx={{mx : "auto" ,  width : open ? 88 : 44 , height : open ? 88 : 44  , my : 1 , 
  border : "2px solid grey" , transition : "0.25s"}}
   src="public/medium.webp" alt='cat'/>
    <Typography align="center" sx={{fontSize : open ? "17" : 0  , transition : "0.25s"}}>M-zefzafy</Typography>
    <Typography  align="center" sx={{fontSize : open ? "15" : 0  , transition : "0.25s" , color : theme.palette.info.main}} >Admin</Typography>


    
    <Divider />
    <List>
      {array1.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          onClick={() => navigate(item.path)}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor : location.pathname === item.path ? theme.palette.mode === "dark"? grey[800] : grey[300] : null,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {array2.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          onClick={() => navigate(item.path)}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor : location.pathname === item.path ? theme.palette.mode === "dark"? grey[800] : grey[300] : null,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <Divider />
    <List>
      {array3.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
          onClick={() => navigate(item.path)}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              bgcolor : location.pathname === item.path ? theme.palette.mode === "dark"? grey[800] : grey[300] : null,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>

  )
}

export default SideBar