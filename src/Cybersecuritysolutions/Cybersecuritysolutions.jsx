import { Box, Button, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const Cybersecuritysolutions = () => {
  return (
    <Box
      style={{
        textAlign: "left",
        padding: "10px",
        marginLeft: "14%",
        marginTop: "9%",
      }}
    >
      <Button
        sx={{
          backgroundColor: "#16757D",
          color: "#fff",
          textTransform: "none",
          borderRadius: "50px",
          height: "40px",
          width: "150px",
          ":hover": {
            backgroundColor: "#16757D",
          },
        }}
      >
        Our Services
      </Button>
      <Typography sx={{ mt: 3, fontSize: "2rem", fontWeight: "bold" }}>
        What we do for your
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
          Cyber security solutions
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            color: "#16757D",
            fontWeight: "bold",
            border: "1px solid #18D395",
            color: "#18D395",
            mr: "10rem",
            height: "40px",
            width: "220px",
            borderRadius: "3px",
            ":hover": {
              backgroundColor: "#18D395",
              color: "black",
            },
          }}
        >
          View All Services
          <ArrowForwardIcon sx={{ ml: 1 }} />
        </Button>
      </Box>

      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={4} md={3.7}>
          <Box
            sx={{
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <img
              src="https://cybal-nextjs.vercel.app/assets/img/service1.png"
              alt="Service 1"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <Typography variant="h6" sx={{ color: "#fff", mt: 1 }}>
              Malware Protection
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor.
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
              Read More
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3.7}>
          <Box
            sx={{
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <img
              src="https://cybal-nextjs.vercel.app/assets/img/service2.png"
              alt="Service 1"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <Typography variant="h6" sx={{ color: "#fff", mt: 1 }}>
              Server Protection
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor.
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
              Read More
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3.7}>
          <Box
            sx={{
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <img
              src="https://cybal-nextjs.vercel.app/assets/img/service3.png"
              alt="Service 1"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <Typography variant="h6" sx={{ color: "#fff", mt: 1 }}>
              Computer Security
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor.
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
              Read More
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cybersecuritysolutions;
