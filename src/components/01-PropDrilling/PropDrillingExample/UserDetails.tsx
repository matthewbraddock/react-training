import React from "react";
import type { User, UpdateUser } from "../types";
import { Box, Typography, Button } from "@mui/material";

interface UserDetailsProps {
  user: User;
  updateUser: UpdateUser;
}

// Finally! A component that actually uses the data
const UserDetails: React.FC<UserDetailsProps> = ({ user, updateUser }) => {
  return (
    <Box
      sx={{
        border: "1px solid #fcc",
        padding: "10px",
        margin: "10px",
        backgroundColor: "rgba(12, 14, 2, 1)",
      }}
    >
      <Typography variant="h6" component="h5">
        User Details (Finally needs the data!)
      </Typography>
      <Typography variant="body1">
        <strong>Name:</strong> {user.name}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {user.email}
      </Typography>
      <Typography variant="body1">
        <strong>Role:</strong> {user.role}
      </Typography>
      <Button
        variant="contained"
        onClick={() => updateUser({ name: "Jane Doe" })}
        sx={{ mt: 1 }}
      >
        Change First Name to Jane
      </Button>
    </Box>
  );
};

export default UserDetails;
