import {
  Grid,
  Box,
  Card,
  Paper,
  InputBase,
  Divider,
  IconButton,
  MenuIcon,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import Image from "next/image";
import DirectionsIcon from "@mui/icons-material/Directions";

const data = [
  {
    src: "https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Flogo-square.png&w=96&q=75",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/ldpp91682003842603.jpg",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/dc1457c4-7c9b-41c3-8b8c-f15559cc6153.png",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/k5v8n1686644567737.png",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/84bde9e0-295d-4369-853e-2ce09f93fb51.png",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/gt4lr1678900881232.png",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/4jnph1687190012574.png",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/do7731665942336493.png",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/pekrl1677078153351.png",
  },
  {
    src: "https://storage.googleapis.com/prod-lokkaroom/lfi2y1679871885417.png",
  },
];

export default function ScrollCarousel() {
  return (
    <div style={{height:"20vh",backgroundColor:"#fff",marginTop:80}}>
      <Grid container spacing={8} sx={{display:"flex",alignItems:"center"}}>
        <Grid item xs={12} md={6} >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              py: 1,
              overflow: "auto",
              width: "100%",
              scrollSnapType: "x mandatory",
              "& > *": {
                scrollSnapAlign: "center",
              },
              "::-webkit-scrollbar": { },
            }}
          >
            {data.map((item) => (
              <Box
                orientation="horizontal"
                size="sm"
                key={item.title}
                variant="contained"
              >
                <Image src={item.src} width={70} height={70} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} >
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"100%",border:"2px solid grey",marginTop:"10px" }}>
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Lokkaroom"
        inputProps={{ 'aria-label': 'Search Lokkaroom' }}
      />
      </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
