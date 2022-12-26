/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Button, Typography} from '@mui/material';
import Bannerphoto from '../Photos/banner_photo.png';
export default function Banner() {
    return(
     <Box sx={{backgroundImage: `url(${Bannerphoto})` , height:{xs:713 ,sm:640 ,md:540 , lg:440} , overflow:'hidden' , backgroundRepeat:'no-repeat' }}>
       <Container>
       <Box sx={{float:'left'}}>
            <Typography variant='h5' sx={{fontWeight: 'bold',  color: 'white', fontSize: '40px',  marginTop: '73px',  width: '85%'}}>Begin your selling journey 
            on Amazon</Typography>
            <Typography sx={{width:{ md:'519px'  } , fontWeight: 'bold',  color: 'white',  marginTop: '17px',  fontSize: '16px'}}>
            Sell on Amazon.in and get a chance for long-term growth. Register now and avail 1-Click launch support at no additional cost
            </Typography>
             <Button sx={{ color: 'black', background: 'orange',  width: '23%',  borderRadius: '25px',  height: '52px',  fontWeight: 'bold',  marginTop: '24px',}}>Start selling</Button> 
           <Button sx={{background: 'white',marginTop: '27px', borderRadius: '23px', color: 'black',  marginLeft: '19px'}}>Learn more</Button>
         </Box> 
         <Box
        component="img"
        sx={{
          height: 400,
          width: 360,
          maxHeight: { xs: 333, md: 347 },
          maxWidth: { xs: 350, md: 360 },
        }}
        alt="The house from the offer."
        src='https://m.media-amazon.com/images/G/31/selldot/hero/BrandCampaign-WithOneClickLaunchSupport-Transparent.png'
      />
       </Container>
    </Box>
    )
}