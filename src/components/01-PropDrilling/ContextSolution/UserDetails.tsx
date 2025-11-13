import React from "react";
import { useUser } from "./useUser";
import { Box, Button, Typography } from "@mui/material";

// Gets data directly from context
const UserDetails: React.FC = () => {
  const { user, updateUser } = useUser();

  return (
    <Box
      sx={{
        border: "1px solid #cfc",
        padding: "10px",
        margin: "10px",
        backgroundColor: "rgba(12, 14, 2, 1)",
      }}
    >
      <Typography variant="h6" component="h5">
        User Details (Using Context)
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
      <Box sx={{ mt: 1 }}>
        <Button
          variant="contained"
          onClick={() => updateUser({ name: "Jane Doe" })}
          sx={{ mt: 1 }}
        >
          Change First Name to Jane
        </Button>
      </Box>
    </Box>
  );
};

export default UserDetails;
