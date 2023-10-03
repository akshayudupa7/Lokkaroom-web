'use client'
import Header from '@/component/Header'
import Background from '@/component/Background'
import Club from '@/component/Club'
import {ClubData } from "../../Data/data"
import { Box,Grid } from '@mui/material'
import Footer from '@/component/Footer'
export default function page() {
  return (
    <div style={{width:"100%"}}>
    <Header/>
    <Background/>
    <Box sx={{backgroundColor: 'rgba(20, 18, 18, 1) !important',paddingTop:10,paddingBottom:10}}>
    {
      
        <Grid   justifyContent="center"  alignItems="center" spacing={4} container sx={{ minHeight: '100vh', maxWidth: '100%'}}>
         {
                ClubData?.map((val,i)=>{
                    return(
                    <Club val={val} key={i}/>
                    )
                })
            }
         </Grid>
          
    }
    </Box>
    <Footer/>
    </div>
  )
}
