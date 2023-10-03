import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import "./Nav.css";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:"20px"}}>
            <div>
              <Link href="/">
                <Image
                  src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
                  width={140}
                  height={60}
                  className="logo"
                />
              </Link>
            </div>
            <div style={{marginTop:"20px",display:"flex",flexDirection:"row",width:"100%",justifyContent:'flex-end'}}>
              <Button
                className="nav1_button"
                sx={{
                  background: "transperent",
                  marginRight:'10px',
                  "&:hover": {
                    background: `linear-gradient(to bottom,rgba(210, 206, 8, 0.38),rgba(210, 206, 8, 0.38))`,
                  },
                }}
              >
                Sign In
              </Button>
              <Button
                className="nav2_button"
                sx={{
                  backgroundColor: "#F8BB5A",
                  "&:hover": {
                    backgroundColor: "#F3990A",
                  },
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
