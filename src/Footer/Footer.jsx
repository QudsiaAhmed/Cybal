import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Google,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1A2239",
        color: "white",
        py: 6,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ mb: 2 }}>
              <img
                src="https://cybal-nextjs.vercel.app/assets/img/logo.png"
                alt="Company Logo"
                style={{ maxWidth: "150px" }}
              />
            </Box>
            <Typography variant="body2" gutterBottom sx={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Fusce vitae risus nec dui <br />
              venenatis dignissim.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1, ml: -1.1 }}>
              <IconButton color="inherit" href="#">
                <Avatar sx={{ bgcolor: "#3b5998" }}>
                  <Facebook />
                </Avatar>
              </IconButton>
              <IconButton color="inherit" href="#">
                <Avatar sx={{ bgcolor: "#00acee" }}>
                  <Twitter />
                </Avatar>
              </IconButton>
              <IconButton color="inherit" href="#">
                <Avatar sx={{ bgcolor: "#0e76a8" }}>
                  <LinkedIn />
                </Avatar>
              </IconButton>
              <IconButton color="inherit" href="#">
                <Avatar sx={{ bgcolor: "#C13584" }}>
                  <Instagram />
                </Avatar>
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" gutterBottom>
              About Company
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "3.1rem",
              }}
            >
              <Link href="#" color="inherit" underline="none" sx={{ mt: 1 }}>
                About Us
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mt: 1 }}>
                Blog & News
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mt: 1 }}>
                Our Portfolio
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mt: 1 }}>
                Pricing Plan
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mt: 1 }}>
                Asked Question
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mt: 1 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Our Services
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "5.1rem",
              }}
            >
              <Typography variant="body2" sx={{ mt: 1 }}>
                Network Protection
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Computer Security
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Cyber Solution
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Locker Security
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Code Inspection
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Folder Duplication
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6"> Download App</Typography>
            </Box>
            <Typography variant="body2" gutterBottom sx={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Fusce vitae risus nec dui <br />
              venenatis dignissim.
            </Typography>
            <Box sx={{ mt: 0.2, display: "flex", gap: 1, ml: 0.6 }}>
              <Button
                startIcon={<Google />}
                sx={{
                  backgroundColor: "transaparent",
                  border: "1px solid gray",
                  color: "#000",
                  textTransform: "none",
                  mt: 2,
                  color: "#fff",
                  width: "200px",
                  height: "50px",
                }}
              >
                <Box sx={{ textAlign: "left", marginLeft: "1%" }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Download on
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Playstore
                  </Typography>
                </Box>
              </Button>
            </Box>
            <Box sx={{ mt: 1, display: "flex", gap: 1, ml: 0.6 }}>
              <Button
                startIcon={<Google />}
                sx={{
                  backgroundColor: "transaparent",
                  border: "1px solid gray",
                  color: "#000",
                  textTransform: "none",
                  mt: 2,
                  color: "#fff",
                  width: "200px",
                  height: "50px",
                }}
              >
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Download on
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    App Store
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <hr style={{ marginTop: "6%" }} />
        <Box mt={4} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
              Terms of Use
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ ml: 2 }}>
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
