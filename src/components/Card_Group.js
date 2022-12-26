/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea , Box} from '@mui/material';
import { Container } from '@mui/system';

export default function ActionAreaCard() {
  return (
<Box>
<Container>
    <Box sx={{display:{xs:'block' , sm:'block' , md:'block' , lg:'flex'} , gridTemplateColumns: 'repeat(3, 1fr)' , marginTop:'6%' , justifyContent:'center' ,alignItems:'center'}}>
    <Card sx={{maxWidth: 345 , boxShadow:5 , margin:{xs:0, sm:0 , md:'30px' , lg:'30px'} , height:250}}>
      <CardActionArea>
       <img src='https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/SOA_Mobile_INR._CB424651258_.svg' style={{width: '60px',
    padding: '20px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Become an Amazon seller
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Make your products available to crores of customers & businesses 24x7
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{maxWidth: 345 , boxShadow:5 , marginRight:{xs:0, sm:0 , md:'30px' , lg:'30px'} , height:250}}>
      <CardActionArea>
       <img src='https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Paid_Services_INR._CB424651263_.svg' style={{width: '60px',
    padding: '20px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Benefits of Selling on Amazon
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Reach crores of customers on Amazon.in, India's most visited shopping destination.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{maxWidth: 345 , boxShadow:5 , height:250}}>
      <CardActionArea>
       <img src='https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Checklist._CB424651247_.svg' style={{width: '60px',
    padding: '20px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Requirements to sell
          </Typography>
          <Typography variant="body2" color="text.secondary">
          GST/PAN information of your business and an active bank account is all you need to Sell on Amazon
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </Container>
    <Container>
    <Box sx={{display:{xs:'block' , sm:'block' , md:'block' , lg:'flex'} , gridTemplateColumns: 'repeat(3, 1fr)' ,  justifyContent:'center' ,alignItems:'center'}}>
    <Card sx={{maxWidth: 345 , boxShadow:5 , margin:{xs:0, sm:0 , md:'30px' , lg:'30px'} , height:250}}>
      <CardActionArea>
       <img src='https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Money-02_INR._CB1198675309_.svg' style={{width: '60px',
    padding: '20px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Amazon fees & pricing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Amazon has a simple and transparent fee structure, find about various fees and pricing to you products on Amazon
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{maxWidth: 345 , boxShadow:5 , marginRight:{xs:0, sm:0 , md:'30px' , lg:'30px'} , height:250}}>
      <CardActionArea>
       <img src='https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/FBA._CB424651236_.svg' style={{width: '60px',
    padding: '20px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Amazon FBA
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fulfillment by Amazon (FBA) is an all-in-one solution for storage, packing, shipping, delivery, and customer support
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{maxWidth: 345 , boxShadow:5 , height:250}}>
      <CardActionArea>
       <img src='https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Business_Growth._CB424651247_.svg' style={{width: '60px',
    padding: '20px'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          All selling programs
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Explore the various seller programs catered to support a wide range of your business needs
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </Container>
  </Box>
  );
}