import React from "react";
import { Typography, Box, useTheme, Button } from "@mui/material";
import Videocam from "@mui/icons-material/Videocam";
const DataAcess = () => {
  const theme = useTheme();

  return (
    <Box style={{ position: "relative", marginTop: "" }}>
      <img
        src="https://cybal-nextjs.vercel.app/assets/img/bg/section-2.jpg"
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "cover",
        }}
      />
      <Box
        style={{
          position: "absolute",
          top: "40%",
          left: "53%",
          transform: "translate(-50%, -50%)",
          textAlign: "left",
          width: "80%",
          [theme.breakpoints.up("sm")]: {
            width: "70%",
          },
          [theme.breakpoints.up("md")]: {
            width: "60%",
          },
        }}
      >
        <Typography
          variant="h2"
          style={{
            color: "white",
            marginBottom: "16px",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Cyber Security Skills Gap Widens
          <br />
          As Demand For Experts Continues <br />
          To Soar.
        </Typography>
        <Typography style={{ color: "white", marginBottom: "16px" }}>
          Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo
          doligula eget <br />
          dolorenean massa.In enim justo, rhoncus ut, imperdiet avene natis
          vitae justo nullam
          <br />
          dictum felis eu pede mollis pretium Inte ger tincid unt cras dapibus.
        </Typography>

        <Box style={{ display: "flex", gap: "40px", color: "white" }}>
          <Box style={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "3rem",
                "&:hover": {
                  color: "pink",
                },
              }}
            >
              94%
            </Typography>
            <Typography>Quality Services</Typography>
          </Box>
          <Box style={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "3rem",
                "&:hover": {
                  color: "pink",
                },
              }}
            >
              69%
            </Typography>{" "}
            <Typography>Skilled Staff</Typography>
          </Box>
          <Box style={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "3rem",
                "&:hover": {
                  color: "pink",
                },
              }}
            >
              99%
            </Typography>

            <Typography>Support Team</Typography>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              height: "50px",
              width: "220px",
              borderRadius: "5px",
              textTransform: "none",
              background:
                "linear-gradient(90deg, #0196e7 0%, #ff00a4 51%, #ff00a4 100%)",
              transition: "background-color 0.3s ease",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #ff00a4 0%, #ff00a4 51%, #ff7ae4 100%)",
              },
            }}
          >
            Get Your Services
          </Button>
          <Box
            sx={{
              ml: 2,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "#18FEF5",
                height: "50px",
                width: "220px",
                textTransform: "none",
                borderRadius: "5px",
                backgroundColor: "transparent",
                border: "1px solid #18FEF5",
                "&:hover": {
                  backgroundColor: "#18FEF5",
                  color: "black",
                },
              }}
            >
              Contact With Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataAcess;
