import { Button, Typography, Grid, Box } from "@mui/material";
import React from "react";
const CustomerFeedback = () => {
  return (
    <Box sx={{ marginLeft: "14%" }}>
      <Button
        sx={{
          textTransform: "none",
          backgroundColor: "#16757D",
          height: "35px",
          width: "180px",
          color: "#fff",
          borderRadius: "50px",
          mb: "1%",
          mt: "10%",
          ":hover": {
            backgroundColor: "#16757D",
          },
        }}
      >
        Top Reviews
      </Button>
      <Typography
        sx={{ fontWeight: "600", fontSize: "2.5rem", lineHeight: "1.3" }}
      >
        Take a look our top
        <br />
        Customer feedback
      </Typography>
    </Box>
  );
};

export default CustomerFeedback;
