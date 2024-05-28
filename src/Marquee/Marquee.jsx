import { Box } from "@mui/material";
import React from "react";

const Marquee = () => {
  const messages = [
    "Feedback and support",
    "Search functionality",
    "Legal disclaimer",
    "Network segmentation",
    "Feedback and report",
    "Access control list",
  ];

  return (
    <Box
      style={{
        backgroundColor: "#18FEF5",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80px",
        marginTop: "3%",
        marginBottom: "2%",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .marquee-content {
            display: flex;
            animation: marquee 20s linear infinite;
          }
          .marquee-item {
            display: inline-flex;
            align-items: center;
            margin-right: 50px;
          }
          .star {
            position: relative;
            top: -5px;
            margin: 0 5px;
          }
        `}
      </style>
      <Box style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Box className="marquee-content">
          {messages.map((message, index) => (
            <span key={index} className="marquee-item">
              <span className="star">★</span>
              {message}
              <span className="star">★</span>
            </span>
          ))}
          {messages.map((message, index) => (
            <span key={index} className="marquee-item">
              <span className="star">★</span>
              {message}
              <span className="star">★</span>
            </span>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Marquee;
