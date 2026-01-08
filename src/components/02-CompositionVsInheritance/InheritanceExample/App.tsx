import React, { useState } from "react";
import { Box, Typography, Alert } from "@mui/material";
import type { UpdateUser, User } from "../types";
import { StatsPanel } from "./StatsPanel";
import { UserPanel } from "./UserPanel";

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
  });

  const [stats] = useState({
    views: 45230,
    clicks: 3421,
    conversions: 287,
  });

  const updateUser: UpdateUser = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        ❌ Inheritance Example
      </Typography>

      <Alert severity="warning" sx={{ mb: 3 }}>
        <Typography variant="body2">
          <strong>Not Recommended:</strong> This example uses class inheritance.
          Notice how rigid and coupled the components are.
        </Typography>
      </Alert>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Both panels extend BasePanel class, inheriting its layout and structure.
      </Typography>

      <UserPanel
        title="User Panel (extends BasePanel)"
        user={user}
        updateUser={updateUser}
        footer={
          <Typography variant="caption">
            😬 Locked into BasePanel structure
          </Typography>
        }
      />

      <StatsPanel
        title="Stats Panel (extends BasePanel)"
        stats={stats}
        footer={
          <Typography variant="caption">
            😬 Can't easily customize without affecting parent
          </Typography>
        }
      />

      <Box
        sx={{
          mt: 3,
          p: 2,
          bgcolor: "#fff5f5",
          color: "#e74c3c",
          borderRadius: "8px",
          border: "1px solid #e74c3c",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Problems with this approach:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          <li>
            <Typography variant="body2">
              Must use class components (no hooks)
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Tightly coupled to base class structure
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Hard to mix behaviors from multiple sources
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Changes to BasePanel affect all children
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Can't easily combine different panel types
            </Typography>
          </li>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
