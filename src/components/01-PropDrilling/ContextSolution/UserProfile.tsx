import React from "react";
import UserDetails from "./UserDetails";
import { Box, Typography } from "@mui/material";

// Still clean!
const UserProfile: React.FC = () => {
  return (
    <Box sx={{ border: "1px solid #eee", padding: "10px", margin: "10px" }}>
      <Typography variant="h6" component="h4">
        User Profile
      </Typography>
      <Typography variant="body2">No props here either!</Typography>
      <UserDetails />
    </Box>
  );
};

export default UserProfile;
