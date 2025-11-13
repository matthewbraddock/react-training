import React, { useState } from "react";
import Dashboard from "./Dashboard";
import type { User, UpdateUser } from "../types";
import { Box, Typography } from "@mui/material";

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
  });

  const updateUser: UpdateUser = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h3" component="h1">
        Prop Drilling Example
      </Typography>
      <Dashboard user={user} updateUser={updateUser} />
    </Box>
  );
};

export default App;
