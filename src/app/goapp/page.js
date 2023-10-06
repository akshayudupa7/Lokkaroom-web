'use client'
import Nav from '@/component/Nav'
import Carousels from "@/component/Carousels"
import { Container ,Stack} from '@mui/material'
import BigCarousel from '@/component/BigCarousel'
import Boxes from "@/component/Boxes"
import ImageBox from '@/component/ImageBox'
import ScrollCarousel from '@/component/ScrollCarousel'
import Gofooter from '@/component/Gofooter'
export default function page() {
   
  return (
    <div  style={{width:"100%",backgroundColor:"rgb(18, 18, 18)"}}>
         <Nav/>
         <Container sx={{display:'flex',flexDirection:'column'}}>
       
         <Carousels/>
         <BigCarousel/>
         <Boxes/>
         <ImageBox/>
       
         </Container>
         <ScrollCarousel/>
        
         <Gofooter/>
       
    </div>
  )
}
