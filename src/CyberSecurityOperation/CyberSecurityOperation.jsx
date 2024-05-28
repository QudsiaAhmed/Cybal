import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CyberSecurityOperation = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const containerStyle = {
    display: "flex",
    flexDirection: isMdUp ? "row" : "column",
    alignItems: "center",
  };

  const imageContainerStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    width: isMdUp ? "70%" : "100%",
    height: isMdUp ? "60vh" : "auto",
    marginLeft: isMdUp ? "10%" : "0",
    marginTop: isMdUp ? "15%" : "10%",
  };

  const contentContainerStyle = {
    flex: 1,
    padding: "20px",
    marginTop: isMdUp ? "7%" : "5%",
    marginLeft: isMdUp ? "-18rem" : "0",
    textAlign: isMdUp ? "left" : "center",
  };

  const buttonStyle = {
    backgroundColor: "#16757D",
    color: "#fff",
    textTransform: "none",
    borderRadius: "50px",
    padding: 1.2,
    display: "flex",
    height: "40px",
    width: "170px",
    alignSelf: isMdUp ? "flex-start" : "center",
    margin: isMdUp ? "0 0 0 29%" : "0",
    ":hover": {
      backgroundColor: "#16757D",
    },
  };

  const boxStyle = {
    backgroundColor: "#1a2237",
    height: "150px",
    width: isMdUp ? "600px" : "90%",
    borderRadius: "15px",
    mt: 4,
    margin: isMdUp ? "0 0 0 30%" : "0 auto",
  };
  const boxStyleTwo = {
    backgroundColor: "#1a2237",
    height: "150px",
    width: isMdUp ? "600px" : "90%",
    borderRadius: "15px",
    mt: 4,
    margin: isMdUp ? "0 0 0 30%" : "0 auto",
  };
  return (
    <Box style={containerStyle}>
      <Box style={imageContainerStyle}>
        <img
          src="https://cybal-nextjs.vercel.app/assets/img/about1.png"
          alt="About"
          style={imageStyle}
        />
      </Box>
      <Box style={contentContainerStyle}>
        <Button sx={buttonStyle}>About our company</Button>
        <Typography
          sx={{
            mt: 4,
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: isMdUp ? "left" : "center",
            ml: isMdUp ? "30%" : "0",
          }}
        >
          This Is 24/7 Cyber Security
          <br /> Operation Center For Your Problem
          <br />
          Solution..
        </Typography>
        <Box sx={boxStyle}>
          <Typography
            sx={{
              color: "#fff",
              textAlign: "left",
              pt: "4%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CheckIcon sx={{ color: "#18FED5", mr: 1, ml: 2 }} /> Identifying
            threats
          </Typography>
          <br />
          <Typography sx={{ textAlign: "left", ml: 3 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor <br />
            ut labore.
          </Typography>
        </Box>
        <Box sx={boxStyleTwo} style={{ marginTop: "3%" }}>
          <Typography
            sx={{
              color: "#fff",
              textAlign: "left",
              pt: "4%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CheckIcon sx={{ color: "#18FED5", mr: 1, ml: 2 }} /> Security
            management
          </Typography>
          <br />
          <Typography sx={{ textAlign: "left", ml: 3 }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor <br />
            ut labore.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CyberSecurityOperation;
