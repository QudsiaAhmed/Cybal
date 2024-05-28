import { Button, Typography, Box, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const ExpertTeamMember = () => {
  const teamMembers = [
    {
      name: "William Smith",
      position: "Brand Designer",
      img: "https://cybal-nextjs.vercel.app/assets/img/team/team1.jpg",
    },
    {
      name: "Tayer Kader",
      position: "Chiter Group",
      img: "https://cybal-nextjs.vercel.app/assets/img/team/team2.jpg",
    },
    {
      name: "Kuba Samsu",
      position: "Teka Dibe Bacchu",
      img: "https://cybal-nextjs.vercel.app/assets/img/team/team3.jpg",
    },
    {
      name: "Biddut Momtaj",
      position: "Raster Meye",
      img: "https://cybal-nextjs.vercel.app/assets/img/team/team4.jpg",
    },
  ];

  return (
    <Box
      sx={{ display: "flex", marginLeft: "14%", textAlign: "left", mt: "4%" }}
    >
      <Box sx={{ flex: 1 }}>
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
          Our Team Members
        </Button>
        <Typography
          sx={{ fontWeight: "600", fontSize: "2.5rem", lineHeight: "1.3" }}
        >
          Our Expert's team member
        </Typography>
        <Typography
          sx={{ fontWeight: "600", fontSize: "2.5rem", lineHeight: "1.3" }}
        >
          for your solution
        </Typography>
        <Typography>
          Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor
          saerror sed <br />
          earum a magni soluta quam minus dolor dolor sed earum a magni soluta
          autem
          <br /> dolor error error.
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "#16757D",
            color: "#fff",
            borderRadius: "5px",
            height: "45px",
            width: "180px",
            mt: "1%",
            ":hover": {
              backgroundColor: "#16757D",
            },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          View All Members
        </Button>
      </Box>
      <Box sx={{ flex: 1, marginLeft: "5%", marginRight: "8%", mt: "4.5%" }}>
        <Grid container spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item xs={6} key={index}>
              <img
                src={member.img}
                alt={member.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  textAlign: "left",
                  mt: 1,
                }}
              >
                {member.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  textAlign: "left",
                }}
              >
                {member.position}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ExpertTeamMember;
