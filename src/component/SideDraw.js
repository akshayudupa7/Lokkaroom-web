"use client";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Hidden, Typography, Stack, Container } from "@mui/material";
import { CgMenuLeft } from "react-icons/cg";
import {
  AiOutlineMinus,
  AiOutlineClose,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export default function SideDraw({ children }) {
  const [state, setState] = React.useState({
    left: false,
  });
  const [val, setValue] = useState(false);
  console.log(val);
  //console.log(state.top)
  const toggleDrawer = (anchor, open) => () => {
    setValue(!val);
    if (state.left == false) {
      setState({ ...state, left: true });
    } else {
      setState({ ...state, left: false });
    }
  };
  const frontStyles = {
    boxShadow: "none !important",
  };
  const list = (anchor) => (
    <div
      style={{
        backgroundColor: "#121212",
        maxHeight: "100vh",
        overflowY: "auto",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 210,
       
          color: "white",
          width: "100%",
          margin: "auto",
        }}
        role="presentation"
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "20px 20px",
            marginTop: "100px",
          }}
        >
          <Image
            src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Flogo-square.png&w=96&q=75"
            width={50}
            height={50}
          />
        </Box>
        <Container>
          <Stack
            direction="row"
            spacing={2}
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            <Box
              sx={{
                border: "3px solid #fff",
                width: "90%",
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#1D1D1D"
              }}
            >
              <Typography variant="h6"
                 sx={{ color: "#FEFEFE", fontSize: "16px", fontWeight: 600 }}
              >MY ACCOUNT</Typography>
            </Box>
            <Box
              sx={{
                border: "3px solid #fff",
                width: "90%",
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#1D1D1D"
              }}
            >
              <Typography variant="h6"
                 sx={{ color: "#FEFEFE", fontSize: "16px", fontWeight: 600 }}
              >COLLECTIBLES</Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                border: "3px solid #fff",
                width: "100%",
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
               backgroundColor:"#1D1D1D"
              }}
            >
              <Typography variant="h6"
                 sx={{ color: "#FEFEFE", fontSize: "16px", fontWeight: 600 }}
              >VOTES</Typography>
            </Box>
            <Box
              sx={{
                border: "3px solid #fff",
                width: "100%",
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#1D1D1D"
              }}
            >
              <Typography variant="h6"
                 sx={{ color: "#FEFEFE", fontSize: "16px", fontWeight: 600 }}
              >MAKETPLACE</Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            <Box
              sx={{
                border: "3px solid #fff",
                width: "100%",
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#1D1D1D"
              }}
            >
              <Typography variant="h6"
                 sx={{ color: "#FEFEFE", fontSize: "16px", fontWeight: 600 }}
              >HOMEPAGE</Typography>
            </Box>
            <Box
              sx={{
                border: "3px solid #fff",
                width: "100%",
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#1D1D1D"
              }}
            >
              <Typography variant="h6"
                 sx={{ color: "#FEFEFE", fontSize: "16px", fontWeight: 600 }}
              >ABOUT US</Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                border: "3px solid #fff",
                width: "100%",
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#1D1D1D"
              }}
            >
              <Typography variant="h6"
                 sx={{ color: "#FEFEFE", fontSize: "16px", fontWeight: 600 }}
              >FAQ</Typography>
            </Box>
            <Box
              sx={{
                border: "3px solid #fff",
                width: "100%",
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:"#1D1D1D"
              }}
            >
              <Typography variant="h6"
                 sx={{ color: "#FEFEFE", fontSize: "16px", fontWeight: 600 }}
              >CONTACT US</Typography>
            </Box>
          </Stack>
        </Container>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            margin: "auto",
            width: "100%",
            marginTop: 4,
            marginBottom: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "30%",
              backgroundColor: "#312E2E",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              href="#"
              style={{ color: "#fff", fontSize: "36px", marginRight: 10 }}
            >
              <AiFillFacebook />
            </Link>

            <Link
              href="#"
              style={{ color: "#fff", fontSize: "36px", marginRight: 10 }}
            >
              <AiFillTwitterCircle
                sx={{ color: "#fff", fontSize: "50px !important" }}
              />
            </Link>

            <Link
              href="#"
              style={{ color: "#fff", fontSize: "36px", marginRight: 10 }}
            >
              <AiFillInstagram />
            </Link>

            <Link href="#" style={{ color: "#fff", fontSize: "36px" }}>
              <AiFillLinkedin />
            </Link>
          </Box>
        </Stack>
      </Box>
    </div>
  );
  const Backstyles = {
    opacity: 0,
  };

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          {val == true ? (
            <AiOutlineClose style={{ color: "#fff", fontSize: 40 }} />
          ) : (
            <BiMenu style={{ color: "#fff", fontSize: 40 }} />
          )}
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          slotProps={{ backdrop: { style: Backstyles } }}
          sx={{ zIndex: 1 }}
          elevation={0}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
