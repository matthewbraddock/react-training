import React from "react";
import { Typography, Button, Box } from "@mui/material";
import type { User, UpdateUser } from "../types";

interface UserInfoProps {
  user: User;
  updateUser: UpdateUser;
}

// Simple, focused component that just handles user display and updates
export const UserInfo: React.FC<UserInfoProps> = ({ user, updateUser }) => {
  return (
    <Box>
      <Typography sx={{ mt: 1, color: "#2e7d32" }}>
        <strong>Name:</strong> {user.name}
      </Typography>
      <Typography sx={{ mt: 1, color: "#2e7d32" }}>
        <strong>Email:</strong> {user.email}
      </Typography>
      <Typography sx={{ mt: 1, color: "#2e7d32" }}>
        <strong>Role:</strong> {user.role}
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => updateUser({ name: "Jane Smith" })}
        sx={{ mt: 1 }}
      >
        Change Name to Jane
      </Button>
    </Box>
  );
};
