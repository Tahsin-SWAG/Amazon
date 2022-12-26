import { Container } from '@mui/system';
import { Box } from '@mui/system';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Footer() {
   return (
   <Box sx={{background:'#ebf8fa' , marginTop:'3%'}}>
    <Container sx={{display:{xs:'block' , sm:'block' , md:'flex'}}}>
    <Card sx={{ minWidth: 175 , backgroundColor:'#ebf8fa' , border:'#ebf8fa' }}>
      <CardContent>  
        <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Sell on Amazon
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Amazon seller Registration</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Guide to sell on Amazon </Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Offers for Sellers</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>FAQS to Sell on Amazon</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Help & Support</Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 175 , backgroundColor:'#ebf8fa' , border:'#ebf8fa' }}>
      <CardContent>  
        <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
        Seller Resources
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Advantages of E-commerce</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>How to register for GST?</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Do's and Don'ts of Online selling</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>How to start an online store ?</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px'}}>Export from India</Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 175 , backgroundColor:'#ebf8fa' , border:'#ebf8fa' }}>
      <CardContent>  
        <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
        Grow your business
        </Typography>
      </CardContent>  
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Amazon FBA</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Amazon Global Selling</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Amazon Advertising</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Become a Prime seller</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px'}}>More selling programs</Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 175 , backgroundColor:'#ebf8fa' , border:'#ebf8fa' }}>
      <CardContent>  
        <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
        Learn More
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Seller University</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Seller Blog</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>A to Z GST Guide</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Seller Events</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Tools to Grow your Business</Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 175 , backgroundColor:'#ebf8fa' , border:'#ebf8fa' }}>
      <CardContent>  
        <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
        Social Media
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Facebook</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Youtube</Button>
      </CardActions>
      <CardActions >
        <Button size="small" sx={{color: 'black',
    fontSize: '11px' }}>Instagram</Button>
      </CardActions>
    </Card>
</Container>
</Box>
   )
}