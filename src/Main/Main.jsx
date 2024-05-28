import React from "react";
import { Button, Typography, Box, useTheme } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CountBox from "../CountBox/CountBox";
const Main = () => {
  const theme = useTheme();

  return (
    <Box style={{ position: "relative" }}>
      <img
        src="https://cybal-nextjs.vercel.app/assets/img/bg/home-bg.jpg"
        style={{
          width: "100%",
          height: "80vh",
          objectFit: "cover",
        }}
      />
      <Box
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
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
          style={{ color: "white", marginBottom: "16px" }}
        >
          We're a best cyber <br />
          security problem <br />
          solution team
        </Typography>
        <Typography style={{ color: "white", marginBottom: "16px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur
          adipiscing <br />
          elit tempor ut labore
        </Typography>
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
              width: "170px",
              borderRadius: "5px",
              background:
                "linear-gradient(90deg, #0196e7 0%, #ff00a4 51%, #ff00a4 100%)",
              transition: "background-color 0.3s ease",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #ff00a4 0%, #ff00a4 51%, #ff7ae4 100%)",
              },
            }}
          >
            Discover More
          </Button>
          <Box
            sx={{
              ml: 2,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: "#18fef5",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ":hover": {
                  backgroundColor: "transparent",
                  border: "1px solid #18fef5",
                },
              }}
            >
              <VideocamIcon style={{ color: "white" }} />
            </Box>
            <Typography
              sx={{
                ml: 1,
                color: "white",
                fontSize: "1.25rem",
              }}
            >
              Video Tour
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ pt: "35%", ml: "15%" }}>
          <CountBox />
        </Box> */}
      </Box>
    </Box>
  );
};

export default Main;
