import React from 'react';

import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Typography 
            component='p'
            variant='p'
            bgcolor='#f7f7f7'
            color='primary'
            p="10px" 
            textAlign="center"
            mt={20}>
                پروژه وبلاگ با GraphQL
            </Typography>
        </footer>
    );
};

export default Footer;