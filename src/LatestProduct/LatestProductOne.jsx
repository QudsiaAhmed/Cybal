import { Button, Typography, Grid, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const LatestProductOne = () => {
  return (
    <Box sx={{ mt: "10%" }}>
      <Button
        sx={{
          textTransform: "none",
          backgroundColor: "#16757D",
          height: "35px",
          width: "180px",
          color: "#fff",
          borderRadius: "50px",
          mb: "1%",
          ":hover": {
            backgroundColor: "#16757D",
          },
        }}
      >
        Latest Project
      </Button>
      <Typography
        sx={{ fontWeight: "600", fontSize: "2.5rem", lineHeight: "1.3" }}
      >
        We made the latest product <br />
        for our client
      </Typography>
      <Box sx={{ marginLeft: "12%" }}>
        <Grid container spacing={0} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={4} md={3}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: "8px",
                textAlign: "left",
              }}
            >
              <img
                src="https://cybal-nextjs.vercel.app/assets/img/portfolio/1.jpg"
                alt="Service 1"
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  height: "440px",
                  borderRadius: "15px",
                }}
              />
              <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 0.5 }}>
                Creative
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 0.5 }}>
                Creative Solution
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
          <Grid item xs={12} sm={4} md={5}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: "8px",
                textAlign: "left",
              }}
            >
              <img
                src="https://cybal-nextjs.vercel.app/assets/img/portfolio/2.jpg"
                alt="Service 1"
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "15px",
                }}
              />
              <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 0.5 }}>
                Programming
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 0.5 }}>
                Programming & AI
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
                src="https://cybal-nextjs.vercel.app/assets/img/portfolio/3.jpg"
                alt="Service 1"
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  height: "440px",
                  borderRadius: "15px",
                }}
              />
              <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 0.5 }}>
                Cyber
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff", mt: 1, ml: 0.5 }}>
                Computer Security
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
                  ml: -1,
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
    </Box>
  );
};

export default LatestProductOne;
