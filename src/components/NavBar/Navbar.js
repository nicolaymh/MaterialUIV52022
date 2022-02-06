import React, { useState } from 'react';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Badge,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        console.log(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            elevation={0}
            color='secondary'
            sx={{ backgroundColor: 'white' }}
        >
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                    }}
                    component='div'
                >
                    {/* Logo */}
                    <Box>
                        <IconButton>
                            <LocalMallIcon />
                        </IconButton>
                    </Box>

                    {/* Links */}
                    <Box sx={{ display: 'flex' }}>
                        <Typography
                            sx={{
                                marginRight: '20px',
                                cursor: 'pointer',
                                color: '#616161',
                            }}
                        >
                            Home
                        </Typography>

                        <Typography
                            sx={{
                                marginRight: '20px',
                                cursor: 'pointer',
                                color: '#616161',
                            }}
                        >
                            Brand
                        </Typography>

                        <Typography
                            sx={{
                                marginRight: '20px',
                                cursor: 'pointer',
                                color: '#616161',
                            }}
                            aria-controls='basic-menu'
                            aria-haspopup='true'
                            aria-expanded={openMenu ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Categories
                        </Typography>
                        {/* Dropdown Items */}
                        <Menu
                            id='basic-menu'
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Men</MenuItem>
                            <MenuItem onClick={handleClose}>Women</MenuItem>
                            <MenuItem onClick={handleClose}>Phones</MenuItem>
                            <MenuItem onClick={handleClose}>
                                Accesories
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Other</MenuItem>
                        </Menu>

                        <Typography
                            sx={{
                                marginRight: '20px',
                                cursor: 'pointer',
                                color: '#616161',
                            }}
                        >
                            Men
                        </Typography>

                        <Typography
                            sx={{
                                marginRight: '20px',
                                cursor: 'pointer',
                                color: '#616161',
                            }}
                        >
                            Women
                        </Typography>

                        <Typography
                            sx={{
                                marginRight: '20px',
                                cursor: 'pointer',
                                color: '#616161',
                            }}
                        >
                            FAQ
                        </Typography>
                    </Box>

                    {/* Buttons */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            sx={{ backgroundColor: '#ff4081' }}
                            disableElevation
                            variant='contained'
                        >
                            Account
                        </Button>
                        <IconButton>
                            <Badge badgeContent={4} color='primary'>
                                <ShoppingBasketIcon color='action' />
                            </Badge>
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
