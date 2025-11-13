import React from "react";
import UserProfile from "./UserProfile";
import { Box, Typography } from "@mui/material";

// Also clean!
const UserSection: React.FC = () => {
  return (
    <Box sx={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <Typography variant="h5" component="h3">
        User Section
      </Typography>
      <Typography variant="body1">No props to pass through!</Typography>
      <UserProfile />
    </Box>
  );
};

export default UserSection;
