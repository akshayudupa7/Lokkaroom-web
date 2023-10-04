'use client'
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Hidden, Typography ,Stack} from '@mui/material';
import {CgMenuLeft } from "react-icons/cg";
import { AiOutlineMinus,  AiOutlineDown,AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';

export default function ButtonDraw({children}) {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [val,setValue]=useState(false)
   console.log(val)
  //console.log(state.top)
  const toggleDrawer = (anchor, open) => () => {
      setValue(!val)
    if(state.bottom==false){
        setState({...state,bottom:true})
    }else{
        setState({...state,bottom:false})
    }

  };
  const frontStyles={
    boxShadow:'none !important'
  }
  const list = (anchor) => (
    <div style={{backgroundColor:"#000"}}>
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 210,backgroundColor:"black",color:"white",width:'80%',margin:"auto"}}
      role="presentation"

    > 
    <Box sx={{backgroundColor:"#fff",padding:"10px 20px"}}>
       <Image src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Flogo-square.png&w=96&q=75" width={50} height={50}/>
    </Box>
    <Stack direction="row" spacing={2} sx={{marginTop:2,marginBottom:2}}>
     <Box sx={{border:"3px solid #fff",width:"100%",height:150,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography variant="h6">MY ACCOUNTBOX</Typography>
     </Box>
     <Box   sx={{border:"3px solid #fff",width:"100%",height:150,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography variant="h6">COLLECTIBLES</Typography>
     </Box>
     <Box  sx={{border:"3px solid #fff",width:"100%",height:150,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography variant="h6">VOTES</Typography>
     </Box>
     <Box   sx={{border:"3px solid #fff",width:"100%",height:150,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography variant="h6">MAKETPLACE</Typography>
     </Box>
           
    </Stack>
    <Stack direction="row" spacing={2}>
    <Box   sx={{border:"3px solid #fff",width:"100%",height:150,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography variant="h6">HOMEPAGE</Typography>
     </Box>
     <Box sx={{border:"3px solid #fff",width:"100%",height:150,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography variant="h6">ABOUT US</Typography>
     </Box>
     <Box   sx={{border:"3px solid #fff",width:"100%",height:150,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography variant="h6">FAQ</Typography>
     </Box>
     <Box  sx={{border:"3px solid #fff",width:"100%",height:150,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography variant="h6">CONTACT US</Typography>
     </Box>
    </Stack>
    <Stack direction="row" spacing={2} sx={{margin:"auto",width:"100%",marginTop:2,display:"flex",justifyContent:"center"}}>
    <Box>
       <Link href="#" ><AiFillFacebook sx={{backgroundColor:"#fff"}}/></Link>
       </Box>
       <Box>
       <Link href="#" sx={{color:"#fff"}}><AiFillTwitterCircle sx={{color:"#fff",fontSize:"50px !important"}}/></Link>
       </Box>
       <Box>
       <Link href="#" sx={{color:"#fff"}}><AiFillInstagram/></Link>
       </Box>
        <Box>
       <Link href="#" sx={{color:"#fff"}}><AiFillLinkedin/></Link>
       </Box>
    
    </Stack>
    </Box>
    </div>
  );
  const Backstyles = {
    opacity:0,
  };

  return (
    <div >
   
        <React.Fragment key={"bottom"}>
        <Button  onClick={toggleDrawer("bottom", true)}>
        <Hidden mdUp>{val==true?<CgMenuLeft  style={{color:"#fff",fontSize:40}} />:<AiOutlineMinus  style={{color:"#fff",fontSize:40}} />}</Hidden>
        </Button>
          <Drawer 
            anchor={"bottom"}
            open={state["bottom"]}
            slotProps={{backdrop:{style:Backstyles}}}
             sx={{zIndex:1}}
            elevation={0}
        
          >
            {list("bottom")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
