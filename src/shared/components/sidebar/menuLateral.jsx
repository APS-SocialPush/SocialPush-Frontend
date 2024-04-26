import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';

import myIcon from '/sideicon.png';

const drawerWidth = 250;

const buttonsMenu = [
    { text: 'Home', icon: <HomeIcon color="inherit" />, path: '/home'},
    { text: 'Dashboard', icon: <DashboardIcon color="inherit" />, path: '/dashboard'},
    { text: 'Post', icon: <PostAddIcon color="inherit" />, path: '/post'},
    { text: 'Profile', icon: <PersonOutlineIcon color="inherit"/>, path: '/profile' },
];

const buttons2 = [
    { text: 'Support', icon: <SupportAgentIcon color="inherit" /> },
    { text: 'Settings', icon: <TuneIcon color="inherit" /> }
];

export default function MenuLateral() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: '#221245',
                        color: 'white',
                        borderRadius: '0px 20px 20px 0px',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar style={{display:'flex', marginTop:'30px', marginBottom:'30px', marginLeft:'20px'}}>
                    <img src={myIcon} alt="My Icon" style={{ marginRight: '10px' }} />
                    SocialPush
                </Toolbar>

                <List>
                    {buttonsMenu.map((button) => (
                        <ListItem key={button.text} disablePadding>
                            <ListItemButton component={Link} to={button.path} style={{marginLeft:'30px'}}>
                                <ListItemIcon style={{color:'white'}}>
                                    {button.icon}
                                </ListItemIcon>
                                <ListItemText primary={button.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <List sx={{ marginTop: 'auto' }}>
                    {buttons2.map((button) => (
                        <ListItem key={button.text} disablePadding>
                            <ListItemButton style={{marginLeft:'30px'}}>
                                <ListItemIcon style={{color:'white'}}>
                                    {button.icon}
                                </ListItemIcon>
                                <ListItemText primary={button.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <Divider style={{ backgroundColor: '#ffffff', width: '75%', margin: '0 auto' }} />

                    <ListItem disablePadding>
                        <ListItemButton style={{marginLeft:'30px'}}>
                            <ListItemIcon style={{color:'white'}}>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Log out" />
                        </ListItemButton>
                    </ListItem>
                </List>
                
            </Drawer>
        </Box>
    );
}