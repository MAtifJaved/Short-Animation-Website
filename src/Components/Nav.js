import React from "react";
import style from './nav.module.css';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

function Nav (){
return(
<>
<div >
<AppBar position="static" elevation={0} >
  <Toolbar>
     <div className={style.rightnav}>
    <Typography variant="h6" style={{color: 'rgb(250,0,125)'}} >
      Home
    </Typography>
     
    <Typography variant="h6" style={{color: 'rgb(250,0,125)'}} >
      About Us
    </Typography>
     
    <Typography variant="h6"  style={{color: 'rgb(250,0,125)'}}>
      Services
    </Typography>
    <Typography variant="h6"  style={{color: 'rgb(250,0,125)'}}>
      Contact Us
    </Typography>
    </div>
  </Toolbar>
</AppBar>
    
</div>

</>
);
}
export default Nav;