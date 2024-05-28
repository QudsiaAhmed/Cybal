import { Button, Typography, Grid, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const LatestProductTwo = () => {
  return (
    <Box sx={{ marginLeft: "12%" }}>
      <Grid container spacing={0} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={4} md={5}>
          <Box
            sx={{
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <img
              src="https://cybal-nextjs.vercel.app/assets/img/portfolio/4.jpg"
              alt="Service 1"
              style={{
                width: "100%",
                marginBottom: "10px",
                height: "440px",
                borderRadius: "15px",
              }}
            />
            <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 1 }}>
              Solution
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mt: 1, ml: 1 }}>
              On Board Project
            </Typography>
            <Button
              sx={{
                marginTop: "10px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                color: "#16757D",
                fontWeight: "bold",
                color: "#18D395",
                borderRadius: "3px",
                ":hover": {
                  backgroundColor: "trasparent",
                },
              }}
            >
              View Details
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Box
            sx={{
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <img
              src="https://cybal-nextjs.vercel.app/assets/img/portfolio/5.jpg"
              alt="Service 1"
              style={{
                width: "100%",
                marginBottom: "10px",
                height: "440px",
                borderRadius: "15px",
              }}
            />
            <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 1 }}>
              Cyber
            </Typography>
            <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 1 }}>
              Computer Secutity
            </Typography>
            <Button
              sx={{
                marginTop: "10px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                color: "#16757D",
                fontWeight: "bold",
                color: "#18D395",
                borderRadius: "3px",
                ":hover": {
                  backgroundColor: "trasparent",
                },
              }}
            >
              View Details
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Box
            sx={{
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <img
              src="https://cybal-nextjs.vercel.app/assets/img/portfolio/6.jpg"
              alt="Service 1"
              style={{
                width: "100%",
                marginBottom: "10px",
                height: "440px",
                borderRadius: "15px",
              }}
            />
            <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 1 }}>
              Protection
            </Typography>
            <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 1 }}>
              Family Secutity
            </Typography>
            <Button
              sx={{
                marginTop: "10px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                color: "#16757D",
                fontWeight: "bold",
                color: "#18D395",
                borderRadius: "3px",
                ":hover": {
                  backgroundColor: "trasparent",
                },
              }}
            >
              View Details
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestProductTwo;
