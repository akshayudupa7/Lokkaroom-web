"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useState } from "react";
import { Box } from "@mui/material";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import "./Bar.css";
export default function Accord_A() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Accordion
        sx={{ color: "#fff", backgroundColor: "black", width: "90vw" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ lineHeight: "3rem" }}>
            <Link href="#" className="Nav_Data">
              Create Your Lokkaroom
            </Link>
          </Typography>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleExpandClick}
            className="Nav_Data"
            sx={{ "&.Mui-expanded": { minHeight: 50, maxHeight: 50 } }}
          >
            {expanded == true ? (
              <AiOutlineUp sx={{ minHeight: "0px" }} />
            ) : (
              <AiOutlineDown sx={{ minHeight: 0 }} />
            )}
          </AccordionSummary>
        </Box>
        <AccordionDetails>
          <Typography>
            <Link href="#" className="Nav_Data">
              Athletes
            </Link>
          </Typography>
          <Typography sx={{ marginBottom: 1, marginTop: 1 }}>
            <Link href="#" className="Nav_Data">
              Clubs/Organaization
            </Link>
          </Typography>
          <Typography>
            <Link href="#" className="Nav_Data">
              Agents/Affiliates
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
