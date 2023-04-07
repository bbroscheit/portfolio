import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function TestimonialsCard({ id, name, avatar, quote }) {

  return (
    <Card 
      sx={{ 
          maxWidth: 345 , 
          minHeight : 320,
          backgroundColor: "rgba(255,255,255,0.0)",
          backdropFilter: "blur(15px)",
          color:"#FFFFFF"
        }}>
    <CardHeader
      avatar={
        <Avatar
        alt="avatar"
        src={avatar}
        sx={{ width: 70, height: 70 }}
      />
      }
      title={<Typography variant="h6">
      {name}
    </Typography>}
      
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary" 
        sx={{
          paddingLeft:2,
          paddingRight:2,
          textAlign:"justify",
          color:"#FFFFFF"
        }}>
        {quote}
      </Typography>
    </CardContent>
    
  </Card>
  );
}

export default TestimonialsCard;
