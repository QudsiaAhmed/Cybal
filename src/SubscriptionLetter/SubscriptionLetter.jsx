import {
  Button,
  Typography,
  Grid,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const SubscriptionLetter = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "20vh", marginTop: "8%" }}
    >
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#1A2237",
          width: "60%",
          height: "40vh",
          borderRadius: "10px",
          marginBottom: "3%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "2.5rem",
            lineHeight: "1.3",
            marginTop: "4%",
          }}
        >
          Subscribe to our newsletter, We don't make any
          <br />
          spam.
        </Typography>
        <Typography sx={{ mt: "2%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
          tempor enim minim
        </Typography>
        <Box
          sx={{
            mt: "4%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            //   variant="outlined"
            placeholder="Enter your email"
            sx={{
              width: "800px",
              height: "45px",
              border: "1px solid #2D365C",
              borderRadius: "50px",
              color: "gray",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                height: "45px",
              },
              "& fieldset": { borderRadius: "50px" },
            }}
          />
          <IconButton
            sx={{
              backgroundColor: "#16757D",
              color: "#fff",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              marginLeft: "-46px",
              ":hover": {
                backgroundColor: "#16757D",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default SubscriptionLetter;
