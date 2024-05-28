import { Button, Typography, Grid, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
const PricingPlan = () => {
  return (
    <Box>
      <Button
        sx={{
          textTransform: "none",
          backgroundColor: "#16757D",
          height: "35px",
          width: "180px",
          color: "#fff",
          borderRadius: "50px",
          mb: "1%",
          mt: "4%",
          ":hover": {
            backgroundColor: "#16757D",
          },
        }}
      >
        Pricing Plan
      </Button>
      <Typography
        sx={{ fontWeight: "600", fontSize: "2.5rem", lineHeight: "1.3" }}
      >
        Our best pricing plan for
        <br />
        your solution
      </Typography>
      <Box sx={{ marginLeft: "14%" }}>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={4} md={3.7}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                border: "1px solid #1a2237",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  mt: 1,
                  ml: 0.5,
                  fontWeight: "600",
                  fontSize: "1.6rem",
                }}
              >
                Personal
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  margin: "0 auto",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#18FEF5",
                  mt: "9%",
                  mb: "10%",
                }}
              >
                <MilitaryTechIcon sx={{ fontSize: "2rem", color: "black" }} />
              </Box>
              <Box sx={{ textAlign: "center", mt: 1 }}>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  5 Website
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50GB Disk Space
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50 Email Accounts
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50 Monthly Bandwidth
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  10 Subdomains
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  mt: 2,
                  fontWeight: "600",
                  fontSize: "2rem",
                }}
              >
                $99{" "}
                <span style={{ fontSize: "1.5rem", color: "gray" }}>/mo</span>
              </Typography>
              <Button
                sx={{
                  marginTop: "13px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "#16757D",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  height: "50px",
                  width: "180px",
                  mt: "5%",
                  ml: "27%",
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #0196e7 0%, #ff00a4 51%, #ff00a4 100%)",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #ff00a4 0%, #ff00a4 51%, #ff7ae4 100%)",
                  },
                }}
              >
                Purchase Now
                <ArrowForwardIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={3.7}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                border: "1px solid #1a2237",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  mt: 1,
                  ml: 0.5,
                  fontWeight: "600",
                  fontSize: "1.6rem",
                }}
              >
                Business
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  margin: "0 auto",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#18FEF5",
                  mt: "9%",
                  mb: "10%",
                }}
              >
                <BusinessCenterIcon sx={{ fontSize: "2rem", color: "black" }} />
              </Box>
              <Box sx={{ textAlign: "center", mt: 1 }}>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  5 Website
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50GB Disk Space
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50 Email Accounts
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50 Monthly Bandwidth
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  10 Subdomains
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  mt: 2,
                  fontWeight: "600",
                  fontSize: "2rem",
                }}
              >
                $199
                <span style={{ fontSize: "1.5rem", color: "gray" }}>/mo</span>
              </Typography>
              <Button
                sx={{
                  marginTop: "13px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "#16757D",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  height: "50px",
                  width: "180px",
                  mt: "5%",
                  ml: "27%",
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #0196e7 0%, #ff00a4 51%, #ff00a4 100%)",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #ff00a4 0%, #ff00a4 51%, #ff7ae4 100%)",
                  },
                }}
              >
                Purchase Now
                <ArrowForwardIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3.7}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                border: "1px solid #1a2237",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  mt: 1,
                  ml: 0.5,
                  fontWeight: "600",
                  fontSize: "1.6rem",
                }}
              >
                Premium
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  margin: "0 auto",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#18FEF5",
                  mt: "9%",
                  mb: "10%",
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: "2rem", color: "black" }} />
              </Box>
              <Box sx={{ textAlign: "center", mt: 1 }}>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  5 Website
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50GB Disk Space
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50 Email Accounts
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  50 Monthly Bandwidth
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  10 Subdomains
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  mt: 2,
                  fontWeight: "600",
                  fontSize: "2rem",
                }}
              >
                $299
                <span style={{ fontSize: "1.5rem", color: "gray" }}>/mo</span>
              </Typography>
              <Button
                sx={{
                  marginTop: "13px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "#16757D",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  height: "50px",
                  width: "180px",
                  mt: "5%",
                  ml: "27%",
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #0196e7 0%, #ff00a4 51%, #ff00a4 100%)",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #ff00a4 0%, #ff00a4 51%, #ff7ae4 100%)",
                  },
                }}
              >
                Purchase Now
                <ArrowForwardIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingPlan;
