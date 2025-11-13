import React from "react";
import UserSection from "./UserSection";
import type { User, UpdateUser } from "../types";
import { Box, Typography } from "@mui/material";

interface DashboardProps {
  user: User;
  updateUser: UpdateUser;
}

// Dashboard doesn't need user data, but must pass it through
const Dashboard: React.FC<DashboardProps> = ({ user, updateUser }) => {
  return (
    <Box sx={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <Typography variant="h4" component="h2">
        Dashboard
      </Typography>
      <Typography variant="body1">
        I don't need user data, but I have to pass it down...
      </Typography>
      <UserSection user={user} updateUser={updateUser} />
    </Box>
  );
};

export default Dashboard;
