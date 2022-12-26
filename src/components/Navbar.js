/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from "../Photos/logo.png"
import { Container , Typography} from '@mui/material';
export default function ButtonAppBar() {
  return (
     <Box sx={{ flexGrow: 1 , backgroundColor:'#008296'}}>
      <Container>
      <AppBar position="static" sx={{ backgroundColor:'#008296'}}>
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box>
          <img src={Logo}/>
          </Box>
          </Typography>
          <Button color="inherit" sx={{fontWeight: 'bold',
    textDecoration: 'underline'}}>Login</Button>
      </Toolbar>
      </AppBar>
      </Container>
    </Box>
  
  );
}