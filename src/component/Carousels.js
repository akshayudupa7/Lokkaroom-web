import React, { useState } from "react";
import "./Carousels.css";
import Link from "next/link";
import { Grid, Card, Stack, Button, Typography, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  const inline = {
    width: "12px",
    height: "12px",
    borderRadius: "100%  !important",
  };
  const dotStyle = {
    width: "12px", // Adjust the width and height to make the dots round
    height: "12px",
    margin: "0 5px", // Adjust the margin between dots as needed
    border: "none", // Remove the border
    borderRadius: "50%", // Make the dots round
    backgroundColor: "#000", // Set the background color of the dots
  };

  const activeDotStyle = {
    backgroundColor: "#fff", // Set the background color of the active dot
  };

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={6}>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
          style={{ border: "2px solid #fff" }}
        >
          <div class="carousel-indicators">
            <button
              class="active"
              style={inline}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              style={inline}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-current="true"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              class="individaul_carousel"
              style={inline}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-current="true"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              style={inline}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-current="true"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              style={inline}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-current="true"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              style={inline}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-current="true"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              style={inline}
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="6"
              aria-current="true"
              aria-label="Slide 7"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-1.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-2.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-3.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-4.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-5.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-6.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-7.jpg&w=1920&q=75"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
        </div>
        <div>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: "2px solid grey",
              marginTop: "10px",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Lokkaroom"
              inputProps={{ "aria-label": "Search Lokkaroom" }}
            />
          </Paper>
        </div>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: "flex", gap: "6%" }}>
        <div style={{ flexBasis: "80%" }}>
          <Box
            sx={{
              marginBottom: "20px",
              height: "30vh",
              backgroundSize: "100% 100%",
              backgroundImage: `linear-gradient(to bottom,rgba(219, 199, 92, 0.83),rgba(219, 199, 92, 0.80)), url(https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fmarketplace.jpg&w=1920&q=75)`,
            }}
          >
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  height: "30vh",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                MARKET PLACE
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              height: "30vh",
              backgroundSize: "100% 100%",
              backgroundImage: `linear-gradient(to bottom,rgba(219, 199, 92, 0.83),rgba(219, 199, 92, 0.80)), url(https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fwallet.jpg&w=1920&q=75)`,
            }}
          >
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  height: "30vh",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                MY ACCOUNT
              </Typography>
            </Link>
          </Box>
        </div>
        <div style={{ flexBasis: "80%" }}>
          <Box
            sx={{
              height: "60vh",
              backgroundSize: "100% 100%",
              backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.603), rgba(0, 0, 0, 0.639)), url(https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fcollectibles-2.jpg&w=1920&q=75)`,
            }}
          >
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  height: "60vh",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                COLLECTIBLES
              </Typography>
            </Link>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default Carousel;
