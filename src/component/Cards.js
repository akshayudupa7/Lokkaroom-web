import Typography from "@mui/material/Typography";
import { Card, Grid, Box } from "@mui/material";

import "./Card.css";
import Link from "next/link";
import Image from "next/image";
export default function ActionAreaCard({ val, key }) {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Link href="#" className="cardactions">
        <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            src={val.images}
            layout="responsive"
            width={100}
            height={100}
          />
        </Box>{" "}
        <Box
          sx={{
            position: "absolute",
            gap: "10px",
            height: "100%",
            width: "100%",
            background: "rgb(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "&:hover": {
              border: "5px solid #fff",
              background: "rgb(0,0,0,0.3)",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#fff",  fontSize: "13px", fontWeight: 700, }}
          >
            /Live/
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
           
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: "1.2em",
            }}
          >
            {val.title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "16px", fontWeight: 700, }}>
            {val.sports}
          </Typography>
        </Box>
      </Link>
    </Grid>
  );
}
