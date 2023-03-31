import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
const Navlist = () => {
    const navList = [
        { id: 1, name: 'Notes', icon: <LightbulbIcon />, route: '/' },
        { id: 2, name: 'Archives', icon: <ArchiveIcon />, route: '/archive' },
        { id: 3, name: 'Bin', icon: <DeleteIcon />, route: '/delete' },
    ]

    return (
        <List style={{ border: "none" }}>
            {navList.map(list => (
                <ListItem key={list.id} disablePadding sx={{ display: 'block' }}>
                    <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: window.open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: window.open ? 3 : 'auto',
                                    color: '#5f6368',
                                    alignItems: 'center'
                                }}
                            >
                                {list.icon}
                            </ListItemIcon>
                            <p style={{
                                margin: '0px 0px 0px 8px', fontFamily: 'poppins', fontSize: '.875rem', fontWeight: '500'
                            }}>{list.name}</p>
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default Navlist;