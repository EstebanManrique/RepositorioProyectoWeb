import React from "react";
import Slider from "@mui/material/Slider";
import Avatar from "@mui/material/Avatar";
import Rating from '@mui/material/Rating';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      <Slider
        size="small"
        defaultValue={58}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </div>
  );
}

function About(){
  return(
    <div>
      <h2>About</h2>
      <Rating 
        name="example-rating"
        defaultValue={2.5}
        size="large"
      />
    </div>
  );
}

function Dashboard(){
  return(
    <div>
      <h2>Dashboard</h2>        
      <Avatar>ES</Avatar>
      <Avatar>MK</Avatar>
    </div>
  );
}

export{Home, About, Dashboard}