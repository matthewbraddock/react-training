import React from "react";
import { UserProvider } from "./UserProvider";
import Dashboard from "./Dashboard";
import { Box, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h3" component="h1">
          Context Solution
        </Typography>
        <Dashboard />
      </Box>
    </UserProvider>
  );
};

export default App;
