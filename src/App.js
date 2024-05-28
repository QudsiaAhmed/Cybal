import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import CyberSecurityOperation from "./CyberSecurityOperation/CyberSecurityOperation";
import Cybersecuritysolutions from "./Cybersecuritysolutions/Cybersecuritysolutions";
import Marquee from "./Marquee/Marquee";
import TrustCyberSecurityOperation from "./TrustCyberSecurityOperation /TrustCyberSecurityOperation ";
import LatestProductOne from "./LatestProduct/LatestProductOne";
import LatestProductTwo from "./LatestProduct/LatestProductTwo";
import PricingPlan from "./PricingPlan/PricingPlan";
import ExpertTeamMember from "./ExpertTeamMember/ExpertTeamMember";
import SubscriptionLetter from "./SubscriptionLetter/SubscriptionLetter";
import Footer from "./Footer/Footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab } from "@mui/material";
import DataAcess from "./DataAcess/DataAcess";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <CyberSecurityOperation />
      <Cybersecuritysolutions />
      <Marquee />
      <TrustCyberSecurityOperation />
      <LatestProductOne />
      <LatestProductTwo />
      <DataAcess />
      <PricingPlan />
      {/* <CustomerFeedback /> */}
      <ExpertTeamMember />
      <SubscriptionLetter />
      <Footer />
      {showScroll && (
        <Fab
          color="primary"
          aria-label="scroll back to top"
          onClick={scrollTop}
          style={scrollToTopStyle}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </div>
  );
}

const scrollToTopStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: "1000",
};

export default App;
