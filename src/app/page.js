"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../component/Header";
import { useEffect } from "react";
import { BorderOuterSharp } from "@mui/icons-material";
import Banner from "@/component/Banner";
import Cards from "@/component/Cards";
import { CardData } from "../Data/data";
import { Container, Grid } from "@mui/material";
import Footer from "../component/Footer";
import { StickyContainer, Sticky } from "react-sticky";

import "../component/Card.css";
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.min.js");
    }
  }, []);
  return (
    <main style={{ width: "100%" }}>
      <Header />
      <Banner />

     
        <Grid
          container
          direction='row'
          justifyContent='space-between'

          spacing={{xs:8,sm:4,md:8,lg:0}}
          sx={{
            paddingTop: "60px",
            backgroundColor: "rgba(18, 18, 18, 1) !important",
            display: "flex",
            justifyContent: "space",
          }}
        >
          {CardData.map((val) => {
            return <Cards val={val} />;
            console.log(val);
          })}
        </Grid>
   

      <Footer />
    </main>
  );
}
