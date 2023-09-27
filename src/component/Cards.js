import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";

import "./Card.css";
import Link from "next/link";
export default function ActionAreaCard({ val }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          backgroundSize: "100% 100%",
          backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.603), rgba(0, 0, 0, 0.639)), url(${val.images})`,
          "&:hover": {
            backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${val.images})`,
          },
        }}
      >
      
        <Link href="#" className="cardactions">
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            /Live/
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "2rem" }}
          >
            {val.title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {val.sports}
          </Typography>
        </Link>
    
      </Card>

    </Grid>
  );
}
