import * as React from 'react';

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
import './menuLateral.css';

const drawerWidth = 240;

const buttons = [
    { text: 'Home', icon: <HomeIcon color="inherit" /> },
    { text: 'Dashboard', icon: <DashboardIcon color="inherit" /> },
    { text: 'Post', icon: <PostAddIcon color="inherit" /> },
    { text: 'Profile', icon: <PersonOutlineIcon color="inherit" /> }
];

const buttons2 = [
    { text: 'Support', icon: <SupportAgentIcon color="inherit" /> },
    { text: 'Settings', icon: <TuneIcon color="inherit" /> }
];

export default function PermanentDrawerLeft() {
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
                <Toolbar className="toolbar">
                    <img src={myIcon} alt="My Icon" style={{ marginRight: '10px' }} />
                    SocialPush
                </Toolbar>

                <List>
                    {buttons.map((button) => (
                        <ListItem key={button.text} disablePadding>
                            <ListItemButton className="listItemButton">
                                <ListItemIcon className="listItemIcon">
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
                            <ListItemButton className="listItemButton">
                                <ListItemIcon className="listItemIcon">
                                    {button.icon}
                                </ListItemIcon>
                                <ListItemText primary={button.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <Divider className="divider" />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon className="listItemIcon" style={{ marginLeft: '20px' }}>
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