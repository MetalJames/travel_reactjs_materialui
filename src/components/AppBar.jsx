import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Typography, Toolbar, Box } from '@mui/material';
import logo from '../assets/favicon.png';

    export default function SearchAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Container>
                <Toolbar style={{padding: 0}}>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1}} component={Link} to='/' color='inherit'>
                        Travel the World
                    </Typography>
                    <img src={logo} height='35px' alt='Canada US flags' />
                </Toolbar>
            </Container>
        </AppBar>
        </Box>
    );
}
