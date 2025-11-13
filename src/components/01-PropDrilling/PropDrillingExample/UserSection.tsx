import React from "react";
import UserProfile from "./UserProfile";
import type { User, UpdateUser } from "../types";
import { Box, Typography } from "@mui/material";

interface UserSectionProps {
  user: User;
  updateUser: UpdateUser;
}

// UserSection also doesn't need user data
const UserSection: React.FC<UserSectionProps> = ({ user, updateUser }) => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
      }}
    >
      <Typography variant="h5" component="h3">
        User Section
      </Typography>
      <Typography variant="body1">
        I also don't need user data, just passing through...
      </Typography>
      <UserProfile user={user} updateUser={updateUser} />
    </Box>
  );
};

export default UserSection;
