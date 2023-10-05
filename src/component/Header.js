"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Bar from "@/component/Bar";
import { Hidden, Stack } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown1 from "@/component/Dropdown1";
import Dropdown2 from "@/component/Dropdown2";
import "./Header.css";
export default function ButtonAppBar({ props }) {
  console.log(props);

  const [va, setValu] = useState(true);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          sx={{ paddingTop: 4, backgroundColor: "black" }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Hidden mdDown>
                <Box sx={{ paddingBottom: 2 }}>
                  <Link href="/">
                    <Image
                      src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
                      width={140}
                      height={70}
                    />
                  </Link>
                </Box>
              </Hidden>
              <Box>
                <Hidden mdUp>
                  <Bar />
                </Hidden>
                <Stack direction="row" spacing={4}>
                  <Hidden mdDown>
                    <Typography
                      variant="h6"
                      component="body1"
                      sx={{ marginTop: "7px !important" }}
                    >
                      <Link href="/find-a-lokkaroom" className="nav-link">
                        Find a Lokkaroom
                      </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                      <Dropdown1 />
                    </Typography>
                    <Typography variant="h6" component="div">
                      <Dropdown2 />
                    </Typography>
                    <Typography
                      variant="h6"
                      component="body1"
                      sx={{ marginTop: "8px !important" }}
                    >
                      <Link href="/goapp" className="nav-link">
                        GO TO APP
                      </Link>
                    </Typography>
                  </Hidden>
                </Stack>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box></Box>
    </>
  );
}
