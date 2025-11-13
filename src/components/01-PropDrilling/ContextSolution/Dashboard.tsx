import React from "react";
import UserSection from "./UserSection";
import { Box, Typography } from "@mui/material";

// Clean! No props needed
const Dashboard: React.FC = () => {
  return (
    <Box sx={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <Typography variant="h4" component="h2">
        Dashboard
      </Typography>
      <Typography variant="body1">
        Clean component - no unnecessary props!
      </Typography>
      <UserSection />
    </Box>
  );
};

export default Dashboard;
