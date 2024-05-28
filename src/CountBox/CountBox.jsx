import React from "react";
import { Box, Typography } from "@mui/material";

const CountBox = () => {
  const boxStyle = {
    backgroundColor: "#1A2237",
    padding: "20px",
    textAlign: "center",
    width: "70%",
    height: "150px",
  };

  const countBoxItemStyle = {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  };

  return (
    <Box style={boxStyle}>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box style={countBoxItemStyle}>
          <Typography variant="h4">34</Typography>
          <Typography variant="body1">Our Experience</Typography>
        </Box>
        <Box style={countBoxItemStyle}>
          <Typography variant="h4">99</Typography>
          <Typography variant="body1">Customer Satisfaction</Typography>
        </Box>
        <Box style={countBoxItemStyle}>
          <Typography variant="h4">184</Typography>
          <Typography variant="body1">Our team member</Typography>
        </Box>
        <Box style={countBoxItemStyle}>
          <Typography variant="h4">541</Typography>
          <Typography variant="body1">Project Complete</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CountBox;
