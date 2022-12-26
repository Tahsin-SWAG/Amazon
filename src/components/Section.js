/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Button, } from '@mui/material';

export default function Section() {
return (
<Container sx={{justifyContent:'center'}}>
  <Box sx={{ display:'flex' , border:'1px solid #8ccfeb'}}>
  <Box sx={{marginTop:{xs:'7%' , sm:'2%' , md:'0%' , lg:'0%'}}}>
    <img src="https://m.media-amazon.com/images/G/31/selldot/Images/WebpImages/LaunchOfferBanner.webp" style={{width:'100px' , padding:'30px'}}/>
  </Box>
  <Box sx={{marginLeft:{lg:'10px'}}}>
    <Typography variant='h6' sx={{fontWeight:'bold' , marginTop:'30px'}}>
1-Click Launch Support offer</Typography>
 <Typography>End-to-end guidance for onboarding on Amazon.in at no additional cost by Amazon-engaged third-party service providers.</Typography>
  <Button sx={{
     color: 'black',
    fontWeight: 'bold',
    border: '1px solid black',
    borderRadius: '29px',
    marginLeft: '-8px',
    marginTop: '7px',
    marginBottom:{xs:'5%' , sm:'2%' , md:'0%' , lg:'0%'}
  }}>Avail offer now</Button>
  </Box>
  </Box>
</Container>
)
}