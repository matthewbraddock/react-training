import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { BasePanel } from "./BaseComponents";
import type { UpdateUser, User } from "../types";

interface UserPanelProps {
  title: string;
  footer?: React.ReactNode;
  user: User;
  updateUser: UpdateUser;
}

// Extending BasePanel to create a specialized panel
export class UserPanel extends BasePanel {
  declare props: UserPanelProps;

  // Override the renderContent method
  renderContent(): React.ReactNode {
    const { user, updateUser } = this.props;

    return (
      <Box>
        <Typography sx={{ mt: 1, color: "#e74c3c" }}>
          <strong>Name:</strong> {user.name}
        </Typography>
        <Typography sx={{ mt: 1, color: "#e74c3c" }}>
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography sx={{ mt: 1, color: "#e74c3c" }}>
          <strong>Role:</strong> {user.role}
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => updateUser({ name: "Jane Smith" })}
          sx={{ mt: 1 }}
        >
          Change Name to Jane
        </Button>
      </Box>
    );
  }
}
