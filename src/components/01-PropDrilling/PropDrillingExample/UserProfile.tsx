import React from "react";
import UserDetails from "./UserDetails";
import type { User, UpdateUser } from "../types";
import { Box, Typography } from "@mui/material";

interface UserProfileProps {
  user: User;
  updateUser: UpdateUser;
}

// UserProfile doesn't need it either!
const UserProfile: React.FC<UserProfileProps> = ({ user, updateUser }) => {
  return (
    <Box
      sx={{
        border: "1px solid #eee",
        padding: "10px",
        margin: "10px",
      }}
    >
      <Typography variant="h6" component="h4">
        User Profile
      </Typography>
      <Typography variant="body2">Still just passing through...</Typography>
      <UserDetails user={user} updateUser={updateUser} />
    </Box>
  );
};

export default UserProfile;
