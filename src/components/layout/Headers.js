import React from 'react';
import { AppBar, Toolbar, Typography ,Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <AppBar position='sticky'>
                <Container maxWidth="lg">
                <Toolbar>
                    <Link to={'/'} style={{textDecoration:'none' , width:'100%' ,color:'inherit'}}>
                    <Typography component='h1' variant='h5' fontWeight='700' flex={1}>
                        وبلاگ من
                    </Typography>
                    </Link>
                    <BookIcon />
                </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Headers;