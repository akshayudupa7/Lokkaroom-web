import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import "./Nav.css";
import { Stack ,Hidden} from "@mui/material";
import ButtonDraw from "./BottomDraw";
import { AiOutlineMinus,  AiOutlineDown} from "react-icons/ai";
import {CgMenuLeft } from "react-icons/cg";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(18,18,18)",zIndex:1999 }}>
        <Toolbar>
          <ButtonDraw/>
          <div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:"20px"}}>
            <div>
              <Link href="/">
                <Image
                  src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
                  width={180}
                  height={80}
                  className="logo"
                />
              </Link>
            </div>
            <Stack direction='row' spacing={1} sx={{marginTop:4}}>
            <Box>
           
              <Button
                className="nav1_button"
              >
                Sign In
              </Button>
            </Box>
            <Box>
              <Button
                className="nav2_button"
              >
                Sign Up
              </Button>
            </Box>
          </Stack>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
