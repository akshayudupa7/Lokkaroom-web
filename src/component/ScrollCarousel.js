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
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Image from "next/image";
import DirectionsIcon from "@mui/icons-material/Directions";
import "./ScrollCarousel.css";

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
    <div style={{  backgroundColor: "#fff", marginTop: 80 }}>
      <Grid
        container
        spacing={8}
        sx={{height:160}}
      >
        <Grid item xs={12} md={6}>
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
              "::-webkit-scrollbar": {},
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
        <Box sx={{padding:"16px 28px 0px 48px"}}>
          <Paper
            component="form"
            sx={{
              position:"relative",
              width: "100%",
              border: "3px solid #B1B1B1",
              boxShadow:'none !important'
             
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
            
              sx={{
                ml: 1,
                flex: 1,
                paddingLeft: "14px",
                paddingRight: "14px",
               
              }}
              placeholder="Find a Club or Athlete"
              inputProps={{ "aria-label": "Search Lokkaroom" }}
              className="searchBox"
            />
          </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
