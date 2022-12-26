import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Button, } from '@mui/material';




export default function Section() {
return (
<Box >
<Container>
<Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , border:1 ,borderColor:'#45b0dd'}}>
<CardMedia
  component="img"
  sx={{
    height: 120,
    width: 150,
    padding:'40px',
    maxHeight: { xs: 133, md: 147 },
    maxWidth: { xs: 150, md: 120 },
  }}
  image="https://m.media-amazon.com/images/G/31/selldot/Images/WebpImages/LaunchOfferBanner.webp"
/>
   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <CardContent sx={{ flex: '1 0 auto' , }}>
    <Typography component="div" variant="h5">
     1-Click Launch Support offer
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
    End-to-end guidance for onboarding on Amazon.in at no additional cost by Amazon-engaged third-party service providers.
    </Typography>
    <Button  sx={{border: '2px solid black',
borderRadius: '20px',
color: 'black',
fontWeight: 'bold',
marginTop: '5px'}}>Avail Offer Now</Button>
  </CardContent>
</Box>
</Card>
</Container>
</Box>
)
}